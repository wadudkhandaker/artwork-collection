import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(StoreModule.forRoot(reducers, { metaReducers })),
    importProvidersFrom(EffectsModule.forRoot([])),
    importProvidersFrom(StoreDevtoolsModule.instrument({ maxAge: 25 })),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(), provideAnimationsAsync(),
  ]
};