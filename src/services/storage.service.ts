import {ConfigService} from './config.service';

export class StorageService{

  static instance:StorageService;

  constructor() {

  }

  static getInstance() {
    if(StorageService.instance == null) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  setKey(name:string, value:string) {
    window.localStorage[name] = value;
  }

  getKey(name:string) {
    return window.localStorage[name];
  }

  clear(name:string) {
    console.log('asdasd');
  }
}
