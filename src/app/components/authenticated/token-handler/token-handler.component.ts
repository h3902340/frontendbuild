import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-token-handler',
  templateUrl: './token-handler.component.html',
  styleUrls: ['./token-handler.component.css']
})
export class TokenHandlerComponent {
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.authService.login(token.replace('Bearer ', ''));
        let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
        this.router.navigate(['/userprofile']);
      }
    });
  }
}
