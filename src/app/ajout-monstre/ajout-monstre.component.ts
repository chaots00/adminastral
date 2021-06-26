import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Monstre } from '../monstre/monstre';
import { MonstreService } from '../monstre/monstre.service';

@Component({
  selector: 'app-ajout-monstre',
  templateUrl: './ajout-monstre.component.html',
  styleUrls: ['./ajout-monstre.component.scss'],
  providers: [MessageService]
})
export class AjoutMonstreComponent implements OnInit {
  public monstre!: Monstre|null;
  contactForm!: FormGroup;

  constructor( 
     private readonly _monstreService: MonstreService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,) { }

  ngOnInit(): void {
    const { idMonstre } = this._activedRoute.snapshot.params;
    console.log(idMonstre, "idMonstre");
    this.monstre = this._monstreService.get(idMonstre);
    console.log(this.monstre);
    this.contactForm = this._formBuilder.group({
      id: [this.monstre?.id, []],
      nom: [this.monstre?.nom , Validators.required],
      pv: [this.monstre?.pv, Validators.required],
      gold: [this.monstre?.gold, Validators.required],
      dega: [this.monstre?.dega, Validators.required],
      exp: [this.monstre?.exp, Validators.required],
      description: [this.monstre?.description, Validators.required],
    });
  }


  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      if(data.id != null){
        this._monstreService.updateMonstre(data);
      }else{
      this._monstreService.addMonstre(data);
      }
      this._router.navigateByUrl("monstres");
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }


}
