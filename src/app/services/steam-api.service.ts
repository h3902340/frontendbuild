import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { DOMService } from './dom.service';

@Injectable()
export class SteamApiService {

  constructor(private oauthService: OAuthService, private http: HttpClient, private domService: DOMService) {
    oauthService.configure({
      issuer: 'https://steamcommunity.com/openid', // The URL of the OpenID provider
      loginUrl: 'https://steamcommunity.com/openid/login', // The URL for the login page of the OpenID provider
      redirectUri: baseUrl + '/api/user/login', // Your backend's URL
      postLogoutRedirectUri: domService.getWindow().location.origin, // Where to redirect after logging out
      responseType: 'id_token', // The type of response we want from the OpenID provider
      scope: 'openid', // The scope of the authentication request
      showDebugInformation: true, // Display debug information
      customQueryParams: { // Custom parameters for the authentication request
        'openid.realm': baseUrl, // Your backend's URL
        'openid.return_to': baseUrl + '/api/user/login', // Your backend's URL              
        'openid.ns': 'http://specs.openid.net/auth/2.0', // The namespace for OpenID 2.0
        'openid.mode': 'checkid_setup', // The mode for OpenID
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select', // The identity for OpenID
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select' // The claimed id for OpenID
      },
      oidc: false,
    });
  }

  getPlayerSummaries(steamId: string): Observable<any> {
    const url = `${baseUrl}/api/GetPlayerSummaries?steamId=${steamId}`;
    return this.http.get(url);
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}

