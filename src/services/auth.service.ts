import {Injectable} from 'angular2/core';

import {BkHttpService} from './bk-http.service';
import {ConfigService} from './config.service';
import {StorageService} from './storage.service';
import {UtilService} from './util.service';

@Injectable()
export class AuthService{

  private _config:ConfigService;
  private _bkHttp:BkHttpService;

  constructor(bkHttp:BkHttpService) {
    this._bkHttp = bkHttp;
    this._config = ConfigService.getInstance();
  }

  signIn(username:String, password:String) {
    let data:any = {
      grant_type: 'password',
      username: username,
      password: password,
      appname: this._config.getAppName()
    };

    return this.authenticate(data);
  }

  authenticate(authData:any) {
    let call = this._bkHttp.post(this._config.getApiUrl() + this._config.getTokenUrl(), UtilService.encodeObjToURI(authData));
    call.subscribe(
      function (res:any) {
        var response = res.json();

        if(response.access_token !== undefined) {
          var token = 'bearer ' + response.access_token;
          window.localStorage['token'] = token;
          window.localStorage['user'] = JSON.stringify(response);
        }
      },
      function (error:any) {

      }
    );
    return call;
  }

  signOut() {

  }

}
