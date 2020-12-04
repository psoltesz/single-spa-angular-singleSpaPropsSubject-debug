import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { start as singleSpaStart } from 'single-spa';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaStart();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
