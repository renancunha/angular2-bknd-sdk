import {Injectable, EventEmitter, Injector} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, BaseRequestOptions, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {ConfigService} from './config.service';
import {StorageService} from './storage.service';

@Injectable()
export class BkHttpService{

  private _headerAuthName:string = 'Authorization';
  private _headerAnonName:string = 'AnonymousToken';

  private _http:Http;
  private _config:ConfigService;
  private _storage:StorageService;

  constructor() {
    var injector = Injector.resolveAndCreate([HTTP_PROVIDERS]);
    this._http = injector.get(Http);
    this._config = ConfigService.getInstance();
    this._storage = StorageService.getInstance();
  }

  private _request(req: Request, options?: RequestOptionsArgs)  {
    let request:any;

    if(!req.headers) {
      req.headers = new Headers();
    }

    req.headers.set('Content-Type', 'application/x-www-form-urlencoded');

    // If is the token url, we must ignore this headers
    let ignoreHeaders:boolean = req.url.match(this._config.getApiUrl() + this._config.getTokenUrl()) !== null;

    if(!ignoreHeaders)
    {
      // The authorizatin token
      let token:string = this._storage.getKey('token');
      if(token !== undefined) {
        req.headers.set(this._headerAuthName, token);
      }

      // The anonymous token
      if(this._config.getAnonymousToken() !== undefined) {
        req.headers.set(this._headerAnonName, this._config.getAnonymousToken());
      }
    }

    request = this._http.request(req);
    return request;
  }

  private _requestHelper(requestArgs: RequestOptionsArgs, additionalOptions: RequestOptionsArgs)  {
    let options = new RequestOptions(requestArgs);

    if(additionalOptions) {
      options = options.merge(additionalOptions)
    }

    return this._request(new Request(options))
  }

  get(url: string, options?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, method: RequestMethod.Get }, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, body: body, method: RequestMethod.Post }, options);
  }

  put(url: string, body: string, options ?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, body: body, method: RequestMethod.Put }, options);
  }

  delete(url: string, options ?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, method: RequestMethod.Delete }, options);
  }

  patch(url: string, body:string, options?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, body: body, method: RequestMethod.Patch }, options);
  }

  head(url: string, options?: RequestOptionsArgs)  {
    return this._requestHelper({ url:  url, method: RequestMethod.Head }, options);
  }

}
