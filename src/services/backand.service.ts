import {Injectable, Inject} from 'angular2/core';

//Backand services
import {ConfigService} from './config.service';
import {AuthService} from './auth.service';

@Injectable()
export class BackandService{

  private _config:ConfigService;
  private _authService:AuthService;

  constructor(authService:AuthService) {
    this._config = ConfigService.getInstance();
    this._authService = authService;
  }

  setAnonymousToken(anonymousToken:string) {
    this._config.setAnonymousToken(anonymousToken);
  }
  getAnonymousToken() {
    return this._config.getAnonymousToken();
  }

  setSignUpToken(signUpToken:string) {
    this._config.setSignUpToken(signUpToken);
  }
  getSignUpToken() {
    return this._config.getSignUpToken();
  }

  setAppName(appName:string) {
    this._config.setAppName(appName);
  }
  getAppName() {
    return this._config.getAppName();
  }

  signIn(username:string, password:string) {
    return this._authService.signIn(username, password)
  }

  signOut() {
    return this._authService.signOut();
  }

}
