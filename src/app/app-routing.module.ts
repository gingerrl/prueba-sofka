import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'form',
    component: FormPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
