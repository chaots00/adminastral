import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Quetes } from '../quetes/quetes';
import { QuetesService } from '../quetes/quetes.service';

@Component({
  selector: 'app-ajout-que',
  templateUrl: './ajout-que.component.html',
  styleUrls: ['./ajout-que.component.scss'],
  providers: [MessageService]
})
export  class AjoutQueComponent implements OnInit {
  public quetes!: Quetes|null;
  contactForm!: FormGroup;
  

  constructor(private readonly _quetesServices: QuetesService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,) { }

  ngOnInit(): void {
    const { idquetes } = this._activedRoute.snapshot.params;
  console.log(idquetes, "idquetes");
  this.quetes = this._quetesServices.get(idquetes);
  console.log(this.quetes);
  this.contactForm = this._formBuilder.group({
    id: [this.quetes?.id, []],
    nom: [this.quetes?.nom , Validators.required],
    ennoncer: [this.quetes?.ennoncer, Validators.required],
    niveau: [this.quetes?.niveau, Validators.required],
    recompense: [this.quetes?.recompense, Validators.required],
    monstre: [this.quetes?.monstre, Validators.required],
    exp: [this.quetes?.exp, Validators.required],
  });

  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      if(data.id != null){
        this._quetesServices.updateQuetes(data);
      }else{
      this._quetesServices.addQuete(data);
      }
      this._router.navigateByUrl("quetes");
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }
}
