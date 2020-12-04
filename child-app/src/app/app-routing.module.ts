import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [{ path: '**', component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/child-app/' }],
})
export class AppRoutingModule {}
