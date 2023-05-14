import { Route } from '@angular/router';
import { FeaturesLoginComponent } from './features-login/features-login.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromLogin from './+state/login.reducer';
import { LoginEffects } from './+state/login.effects';

export const featuresLoginRoutes: Route[] = [
  {
    path: '',
    component: FeaturesLoginComponent,
    providers: [
      provideState(fromLogin.LOGIN_FEATURE_KEY, fromLogin.loginReducer),
      provideEffects(LoginEffects),
    ],
  },
];
