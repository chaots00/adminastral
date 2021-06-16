import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import { PersoComponent } from './perso/perso/perso.component';

const routes: Routes = [
  {path:"perso",component:PersoComponent},
  {path:"monstre",component:MonstreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
