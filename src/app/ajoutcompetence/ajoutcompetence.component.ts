import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Competence } from '../competence/competence';
import { CompetenceService } from '../competence/competence.service';

@Component({
  selector: 'app-ajoutcompetence',
  templateUrl: './ajoutcompetence.component.html',
  styleUrls: ['./ajoutcompetence.component.scss'],
  providers: [MessageService]
})
export class AjoutcompetenceComponent implements OnInit {
  public competence!: Competence|null;
  contactForm!: FormGroup;

  constructor(private readonly _competenceServices: CompetenceService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,) { }

  ngOnInit(): void {
    const { idcompetence } = this._activedRoute.snapshot.params;
    console.log(idcompetence, "idcompetence");
    this.competence = this._competenceServices.get(idcompetence);
    console.log(this.competence);
    this.contactForm = this._formBuilder.group({
      id: [this.competence?.id, []],
      nom: [this.competence?.nom , Validators.required],
      niv_obt: [this.competence?.niv_obt, Validators.required],
      classe: [this.competence?.classe, Validators.required],
    });
  }
  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      if(data.id != null){
        this._competenceServices.updateCompetence(data);
      }else{
      this._competenceServices.addCompetence(data);
      }
      this._router.navigateByUrl("quetes");
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }


}
