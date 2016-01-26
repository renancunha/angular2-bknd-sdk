export class ConfigService{

  private static instance:ConfigService;

  //URLs
  private _apiUrl:string = 'https://api.backand.com';
  private _socketUrl:string = 'https://api.backand.com:4000';
  private _signUpUrl:string = '/1/user/signup';
  private _tokenUrl:string = '/token';

  private _anonymousToken:string;
  private _signUpToken:string;
  private _appName:string;

  static getInstance() {
    if(ConfigService.instance == null) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  //Setters & Getters
  setApiUrl(apiUrl:string) {
    this._apiUrl = apiUrl;
  }
  getApiUrl() {
    return this._apiUrl;
  }

  geSignUpUrl() {
    return this._signUpUrl;
  }

  getTokenUrl() {
    return this._tokenUrl;
  }

  setAnonymousToken(anonymousToken:string) {
    this._anonymousToken = anonymousToken;
  }
  getAnonymousToken() {
    return this._anonymousToken;
  }

  setSignUpToken(signUpToken:string) {
    this._signUpToken = signUpToken;
  }
  getSignUpToken() {
    return this._signUpToken;
  }

  setAppName(appName:string) {
    this._appName = appName;
  }
  getAppName() {
    return this._appName;
  }
}
