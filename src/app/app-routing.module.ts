import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//loadChildren: './endUser/user.module#UserModule',
// loadChildren : () => import('./endUser/user/user.module').then(m => m.UserModule)
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./enduser/user.module').then((m) => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
