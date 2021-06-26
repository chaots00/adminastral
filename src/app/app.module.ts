import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoComponent } from './perso/perso/perso.component';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonstreComponent } from './monstre/monstre/monstre.component';
import { HeaderComponent } from './layot/header/header.component';
import { ObjetComponent } from './objet/objet.component';
import { QuetesComponent } from './quetes/quetes.component';
import { CompetenceComponent } from './competence/competence.component';
import { MajPipe } from './maj.pipe';
import { PersoAjoutComponent } from './perso-ajout/perso-ajout.component';
import { AjoutObjetComponent } from './ajout-objet/ajout-objet.component';
import { AjoutMonstreComponent } from './ajout-monstre/ajout-monstre.component';
import { AjoutQueComponent } from './ajout-que/ajout-que.component';
import { AjoutcompetenceComponent } from './ajoutcompetence/ajoutcompetence.component';



@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    MonstreComponent,
    HeaderComponent,
    ObjetComponent,
    QuetesComponent,
    CompetenceComponent,
    MajPipe,
    PersoAjoutComponent,
    AjoutObjetComponent,
    AjoutMonstreComponent,
    AjoutQueComponent,
    AjoutcompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
