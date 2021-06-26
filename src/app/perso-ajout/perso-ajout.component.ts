import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Perso } from '../perso/perso';
import { PersoService } from '../perso/perso.service';

@Component({
  selector: 'app-perso-ajout',
  templateUrl: './perso-ajout.component.html',
  styleUrls: ['./perso-ajout.component.scss'],
  providers: [MessageService]
})
export class PersoAjoutComponent implements OnInit {
  public perso!: Perso|null;
  contactForm!: FormGroup;
  

  constructor( 
    private readonly _persoService: PersoService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,)
   { 
    
  }

  ngOnInit(): void {
    const { idPerso } = this._activedRoute.snapshot.params;
    console.log(idPerso, "idperso");
    this.perso = this._persoService.get(idPerso);
    console.log(this.perso);
    this.contactForm = this._formBuilder.group({
      id: [this.perso?.id, []],
      nom: [this.perso?.nom , Validators.required],
      niveau: [this.perso?.niveau, Validators.required],
      pv_max: [this.perso?.pv_max, Validators.required],
      dega: [this.perso?.dega, Validators.required],
      exp: [this.perso?.exp, Validators.required],
      classe: [this.perso?.classe, Validators.required],
      competence: [this.perso?.competence, Validators.required],
      histoire: [this.perso?.histoire, Validators.required],
    });
}
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      if(data.id != null){
        this._persoService.updatePerso(data);
      }else{
      this._persoService.addPerso(data);
      }
      this._router.navigateByUrl("perso");
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }

 
  

}
