import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { Quetes } from './quetes';
import { QuetesService } from './quetes.service';

@Component({
  selector: 'app-quetes',
  templateUrl: './quetes.component.html',
  styleUrls: ['./quetes.component.scss'],
  providers: [MessageService]
})
export class QuetesComponent implements OnInit {
  public quetes:Quetes[] = [];   
 contactForm!: FormGroup;

  constructor( private readonly _queteService: QuetesService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,) { }

  ngOnInit(): void {
    const {  } = this._activedRoute.snapshot.params;
    this.quetes = this._queteService.getAll();
    this.contactForm = this._formBuilder.group({
      id: [null, []],
      nom: [null, [Validators.required]],
      ennoncer: [null, Validators.required],
      niveau: [null, Validators.required],
      recompense: [null, Validators.required],
      monstre: [null, Validators.required],
      exp: [null, Validators.required],
    });
  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      this._queteService.addQuete(data);
      console.log("data", data);
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }
  removquetes(quetesId:string):void {
    this._queteService.removeQuete(quetesId)
  }
  updatequetes(quetes:Quetes):void {
    this._queteService.updateQuetes(quetes)
  }

  }



