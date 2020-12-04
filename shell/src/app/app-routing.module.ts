import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'child-app',
    children: [
      {
        path: '**',
        loadChildren: () =>
          import('./spa-host/spa-host.module').then((m) => m.SpaHostModule),
        data: { app: 'child-app' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
