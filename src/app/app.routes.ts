import { provideRouter, RouterConfig } from '@angular/router';

import { IndexRoutes } from './+index/index.routes';
import { AdminRoutes } from './+admin/admin.routes';

const routes: RouterConfig = [
  ...IndexRoutes,
  ...AdminRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];