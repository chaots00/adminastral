import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutMonstreComponent } from './ajout-monstre/ajout-monstre.component';
import { AjoutObjetComponent } from './ajout-objet/ajout-objet.component';
import { AjoutQueComponent } from './ajout-que/ajout-que.component';
import { AjoutcompetenceComponent } from './ajoutcompetence/ajoutcompetence.component';
import { CompetenceComponent } from './competence/competence.component';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import { ObjetComponent } from './objet/objet.component';
import { PersoAjoutComponent } from './perso-ajout/perso-ajout.component';
import { PersoComponent } from './perso/perso/perso.component';
import { QuetesComponent } from './quetes/quetes.component';

const routes: Routes = [
  {path:"perso",component:PersoComponent},
  {path:"monstres",component:MonstreComponent},
  {path:"objet",component:ObjetComponent},
  {path:"quetes",component:QuetesComponent},
  {path:"competence",component:CompetenceComponent},
  {path:"perso-ajout",component:PersoAjoutComponent},
  {path:"perso-edit/:idPerso",component:PersoAjoutComponent},
  {path:"objet-edit/:idObjet",component:AjoutObjetComponent},
  {path:"objet-ajout",component:AjoutObjetComponent},
  {path:"monstre-edit/:idMonstre",component:AjoutMonstreComponent},
  {path:"monstre-ajout",component:AjoutMonstreComponent},
  {path:"quette-edit/:idquetes",component:AjoutQueComponent},
  {path:"quette-ajout",component:AjoutQueComponent},
  {path:"competence-edit/:idcompetence",component:AjoutcompetenceComponent},
  {path:"competence-ajout",component:AjoutcompetenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
