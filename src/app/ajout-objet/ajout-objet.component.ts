import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Objet } from '../objet/objet';
import { ObjetService } from '../objet/objet.service';


@Component({
  selector: 'app-ajout-objet',
  templateUrl: './ajout-objet.component.html',
  styleUrls: ['./ajout-objet.component.scss'],
  providers: [MessageService]
})
export class AjoutObjetComponent implements OnInit {
  contactForm!: FormGroup;
  public objet!: Objet|null;
 

  constructor(
    private readonly _objetService: ObjetService,
    private readonly _router:Router,
    private readonly _messageService:MessageService,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    const { idObjet } = this._activedRoute.snapshot.params;
  console.log(idObjet, "idObjet");
  this.objet = this._objetService.get(idObjet);
  console.log(this.objet);
  this.contactForm = this._formBuilder.group({
    id: [this.objet?.id, []],
    nom: [this.objet?.nom, Validators.required],
    dega: [this.objet?.dega, Validators.required],
    prix_vente: [this.objet?.prix_vente, Validators.required],
    prix_achat: [this.objet?.prix_achat, Validators.required],
    effect: [this.objet?.effect, Validators.required],
  });
  }

  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      if(data.id != null){
        this._objetService.updateObjet(data);
      }else{
      this._objetService.addObjet(data);
      }
      this._router.navigateByUrl("objet");
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }


}
