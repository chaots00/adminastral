import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Objet } from './objet';
import { ObjetService } from './objet.service';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.scss'],
  providers: [MessageService]
})
export class ObjetComponent implements OnInit {
public objet:object[] = [];    contactForm!: FormGroup;
  constructor(
    private readonly _objetService: ObjetService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,
  ) { }

  ngOnInit(): void {{
    
    
    const {  } = this._activedRoute.snapshot.params;
    this.objet = this._objetService.getAll();
    this.contactForm = this._formBuilder.group({
      id: [null, []],
      nom: [null, [Validators.required]],
      dega: [null, Validators.required],
      prix_vente: [null, Validators.required],
      prix_achat: [null, Validators.required],
      effect: [null, Validators.required],
    });
  }
  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      this._objetService.addObjet(data);
      console.log("data", data);
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }
  removobjet(objetId:string):void {
    this._objetService.removeObjet(objetId)
  }

  updateobjet(objet:Objet):void {
    this._objetService.updateObjet(objet)
  }

}
