import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment.prod";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

import { MatToolbarModule } from "@angular/material/toolbar";

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { AuthGuard } from "./app/shared/guards/auth.guard";
import { AuthorizationGuard } from "./app/shared/guards/authorization.guard";



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      MatToolbarModule,
    ),
    AuthGuard,
    AuthorizationGuard,
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ]
})
  .catch(err => console.error(err));
