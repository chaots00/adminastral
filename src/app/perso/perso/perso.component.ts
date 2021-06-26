import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Perso } from '../perso';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss'],
  providers: [MessageService]
})
export class PersoComponent implements OnInit {
  public perso: Perso[] = [];
  contactForm!: FormGroup;

  constructor(
    private readonly _persoService: PersoService,
  ) { }

  ngOnInit(): void {
    this.perso = this._persoService.getAll();
  }
 

  
  removPerso(persoId:string):void {
    this._persoService.removePerso(persoId)
  }
 
  get f(){
    return this.contactForm.controls;
  }
 
}
