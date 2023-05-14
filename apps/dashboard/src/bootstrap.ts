import { bootstrapApplication } from "@angular/platform-browser";
import { withEnabledBlockingInitialNavigation, provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { appRoutes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
  ]
});
