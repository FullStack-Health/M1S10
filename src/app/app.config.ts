import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  // o provideHttpClient() é usado para quando se tem o uso da classe HttpClient e o projeto é standalone
  providers: [provideRouter(routes), provideHttpClient()]
};
