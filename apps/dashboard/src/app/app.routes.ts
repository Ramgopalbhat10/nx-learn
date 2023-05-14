import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: AppComponent,
    providers: [provideStore(), provideEffects()],
  },
];
