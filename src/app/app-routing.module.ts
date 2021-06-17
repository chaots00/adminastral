import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import { ObjetComponent } from './objet/objet.component';
import { PersoComponent } from './perso/perso/perso.component';
import { QuetesComponent } from './quetes/quetes.component';

const routes: Routes = [
  {path:"perso",component:PersoComponent},
  {path:"monstres",component:MonstreComponent},
  {path:"objet",component:ObjetComponent},
  {path:"quetes",component:QuetesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
