import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Monstre } from '../monstre';
import { MonstreService } from '../monstre.service';

@Component({
  selector: 'app-monstre',
  templateUrl: './monstre.component.html',
  styleUrls: ['./monstre.component.scss']
})
export class MonstreComponent implements OnInit {
  public monstre: Monstre[] = [];
  contactForm!: FormGroup;

  constructor(
    private readonly _monstreService: MonstreService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,
  ) { }

  ngOnInit(): void {{
    
    
    const {  } = this._activedRoute.snapshot.params;
    this.monstre = this._monstreService.getAll();
    this.contactForm = this._formBuilder.group({
      id: [null, []],
      nom: [null, [Validators.required]],
      pv: [null, Validators.required],
      gold: [null, Validators.required],
      dega: [null, Validators.required],
      exp: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      this._monstreService.addMonstre(data);
      console.log("data", data);
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }
  removMonstre(monstreId:string):void {
    this._monstreService.removeMonstre(monstreId)
  }
  updateMonstre(monstre:Monstre):void {
    this._monstreService.updateMonstre(monstre)
  }


}
