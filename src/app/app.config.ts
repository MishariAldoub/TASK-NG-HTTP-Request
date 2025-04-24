import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//ALL I HAD TO DO WAS ADD THIS!??
import { routes } from './app.routes';
//MAKE SURE TO add provideHttpClient() NEXT TIME
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
  
};
