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
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,
  ) { }

  ngOnInit(): void {{
    
    
      const {  } = this._activedRoute.snapshot.params;
      this.perso = this._persoService.getAll();
      this.contactForm = this._formBuilder.group({
        id: [null, []],
        nom: [null, [Validators.required]],
        niveau: [null, Validators.required],
        pv_max: [null, Validators.required],
        dega: [null, Validators.required],
        exp: [null, Validators.required],
        classe: [null, Validators.required],
        competence: [null, Validators.required],
      });
    }
  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      this._persoService.addPerso(data);
      console.log("data", data);
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }

  removPerso(persoId:string):void {
    this._persoService.removePerso(persoId)
  }

  updatePerso(Perso:Perso):void {
    this._persoService.updatePerso(Perso)
  }

  

}
