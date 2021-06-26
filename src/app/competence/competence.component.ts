import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Competence } from './competence';
import { CompetenceService } from './competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss'],
  providers: [MessageService]
})
export class CompetenceComponent implements OnInit {
  public competence:Competence[] = [];   
 contactForm!: FormGroup;

  constructor(private readonly _competenceService: CompetenceService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router:Router,
    private readonly _activedRoute: ActivatedRoute,
    private readonly _messageService:MessageService,) { }

  ngOnInit(): void {
    const {  } = this._activedRoute.snapshot.params;
    this.competence = this._competenceService.getAll();
    this.contactForm = this._formBuilder.group({
      id: [null, []],
      nom: [null, Validators.required],
      niv_obt: [null, Validators.required],
      classe: [null, Validators.required],
    });
  }

  save() :void { const valid = this.contactForm.valid;
    console.log(this.contactForm);
    if (valid) {
      const data = this.contactForm.getRawValue();
      this._competenceService.addCompetence(data);
      console.log("data", data);
    } else {
      this._messageService.add({ severity:'error', summary: 'error', detail: 'formulaire incomplet'});
      
      console.log('ko');
      
    }
  }
  removcompetence(competenceId:string):void {
    this._competenceService.removeCompetence(competenceId)
  }


  updatecompetence(competence:Competence):void {
    console.log("ok");
    this._competenceService.updateCompetence(competence)
  }

}
