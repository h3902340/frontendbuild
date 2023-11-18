import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Object3D } from 'three';
import { AttachmentInfo } from '../data-structures';

@Component({
  selector: 'app-unit-viewer',
  templateUrl: './unit-viewer.component.html',
  styleUrls: ['./unit-viewer.component.css']
})
export class UnitViewerComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas') private canvasRef: ElementRef;

  //* Stage Properties

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 1000;

  @Input()
  public modelPath: string;
  @Input()
  public attachments: AttachmentInfo[] = [];

  public startingAnimation: string;

  //? Scene properties
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private ambientLight: THREE.AmbientLight;
  private light1: THREE.PointLight;
  private light2: THREE.PointLight;
  private light3: THREE.PointLight;
  private light4: THREE.PointLight;
  private attachmentModels: { model: Object3D, fromBone: Object3D, isSync: boolean }[] = [];
  private modelMain: Object3D;
  private directionalLight: THREE.DirectionalLight;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;
  private clock: THREE.Clock;
  private gltfs: GLTF[];
  private mixers: THREE.AnimationMixer[];

  public ngAfterViewInit(): void {
    this.clock = new THREE.Clock();
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['modelPath']) {
      this.refreshModel();
    }
  }

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    let rect = this.canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = (rect.top + 70).toString();
    renderer.domElement.style.left = rect.left.toString();
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
  };

  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(0xd4d4d8);
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    this.camera.position.x = 0;
    this.camera.position.y = 50;
    this.camera.position.z = 120;
    this.ambientLight = new THREE.AmbientLight(0xffffff, 100);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    this.directionalLight.position.set(1, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0xffffff, 50);
    this.light1.position.set(0, 2, 4);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0xffffff, 50);
    this.light2.position.set(5, 1, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0xffffff, 50);
    this.light3.position.set(0, 1, -5);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0xffffff, 50);
    this.light4.position.set(-5, 3, 5);
    this.scene.add(this.light4);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  private render(): void {
    //component.renderer.render(component.scene, component.camera);
    requestAnimationFrame(this.render.bind(this));
    var delta = this.clock.getDelta();
    if (this.mixers) {
      for (let mixer of this.mixers) {
        mixer.update(delta);
      }
    }
    this.renderer.render(this.scene, this.camera);
    for (let attachment of this.attachmentModels){
      if (attachment.isSync) {
        attachment.fromBone.position.x = 0;
        attachment.fromBone.position.y = 0;
        attachment.fromBone.position.z = 0;
        attachment.fromBone.rotation.x = 0;
        attachment.fromBone.rotation.y = 0;
        attachment.fromBone.rotation.z = 0;
      }
    }
  }

  private async refreshModel() {
    for (let model of this.attachmentModels) {
      this.scene.remove(model.model);
    }
    this.attachmentModels = [];
    this.gltfs = [];
    this.mixers = [];
    this.modelMain = await this.loadModelAnimated(this.modelPath);
    var box = new THREE.Box3().setFromObject(this.modelMain);
    box.getCenter(this.modelMain.position); // this re-sets the mesh position
    this.modelMain.position.x = 0;
    this.modelMain.position.y = -.9;
    const scale = new THREE.Vector3(1, -1, 1);
    this.modelMain.rotation.z = Math.PI;
    this.modelMain.scale.multiply(scale);
    for (let i = 0; i < this.attachments.length; i++) {
      let modelAttach = await this.loadModelAnimated(this.attachments[i].modelPath);
      let toBone = this.findBone(this.modelMain, this.attachments[i].toBone);
      if (!toBone) {
        console.error('bone not found! ' + this.attachments[i].toBone);
        continue;
      }
      let fromBone = this.findBone(modelAttach, this.attachments[i].fromBone);
      if (fromBone) {
        this.attachmentModels.push({
          model: modelAttach,
          fromBone: fromBone,
          isSync: this.attachments[i].syncanims,
        });
        toBone.add(fromBone);
      } else {
        console.error('bone not found! ' + this.attachments[i].fromBone);
      }
    }
  }

  private findBone(model: Object3D, boneName: string): Object3D | null {
    if (model.name == boneName) return model;
    for (let child of model.children) {
      let result = this.findBone(child, boneName);
      if (result) {
        return result;
      }
    }
    return null;
  }

  private async loadModelAnimated(path: string): Promise<Object3D> {
    let gltf = await this.loaderGLTF.loadAsync(path);
    let model: Object3D = gltf.scene;
    this.scene.add(model);
    this.gltfs.push(gltf);
    this.mixers.push(new THREE.AnimationMixer(model));
    if (this.startingAnimation) {
      this.playAnimation(this.startingAnimation);
    }
    return model;
  }

  public playAnimation(animationName: string): void {
    for (let i = 0; i < this.gltfs.length; i++) {
      this.mixers[i].stopAllAction();
      for (let animation of this.gltfs[i].animations) {
        if (animation.name != animationName) continue;
        this.mixers[i].clipAction(animation).play();
        break;
      }
    }
  }
}
