import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalUiService } from './global-ui.service';
import { LocalStorageService } from './local-storage.service';


export const BASE_URL = 'https://aaa-backend-demo-dev-public.allaboutapps.at';

interface ICredentials {
  accessToken: string;
  expiresIn: number;
  refreshToken: string | null;
  tokenType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials?: ICredentials;

  userProfile: {
    uid: string;
    scope: string[];
    data: {
      likedBeerIds: number[],
      commentsMap: { [id: number]: string; }
    }
  };

  constructor(
    private http: HttpClient,
    private globalUi: GlobalUiService,
    private localStorage: LocalStorageService
  ) {
    this.credentials = this.localStorage.get(LocalStorageService.credentialsName);
    console.log('###', this.credentials);
  }

  login = async () => {

    if (this.credentials) {
      return;
    }

    try {
      this.globalUi.isLoading = true;
      this.credentials = (await this.http.post(BASE_URL + '/api/v1/auth/token', {
        scope: 'guest',
        grantType: 'guest'
      }).toPromise()) as ICredentials;

      this.globalUi.isLoading = false;
      this.localStorage.set(LocalStorageService.credentialsName, this.credentials);
      console.log('### credentials', this.credentials);
    } catch (err) {
      this.globalUi.isLoading = false;
      this.globalUi.showError('Login error ' + err);
    }
  }



  get isAuthenticated() {
    return !!this.credentials;
  }

  loadProfile = async () => {

    if (!this.isAuthenticated) {
      return;
    }

    console.log('### getProfile');

    try {
      this.globalUi.isLoading = true;
      this.userProfile = await this.http.get(BASE_URL + '/app/v1/user/profile', {
        headers: {
          Authorization: 'Bearer ' + this.credentials.accessToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).toPromise() as any;

      console.log('### profile', this.userProfile);

      this.globalUi.isLoading = false;

    } catch (err) {
      this.globalUi.isLoading = false;
      this.globalUi.showError('Get profile error ' + err);
    }
  }

}
