// Import all services
import {AuthService} from './services/auth.service';
import {ConfigService} from './services/config.service';
import {BkHttpService} from './services/bk-http.service';
import {StorageService} from './services/storage.service';
import {UtilService} from './services/util.service';
import {BackandService} from './services/backand.service';

// Export all services
//export * from './services/auth.service';
//export * from './services/config.service';
//export * from './services/bk-http.service';

// Export only main service
export * from './services/backand.service';

// Export providers to setup angular2 dependency injection system
export const PROVIDERS: any[] = [
  AuthService,
  BkHttpService,
  StorageService,
  UtilService,
  BackandService
];
