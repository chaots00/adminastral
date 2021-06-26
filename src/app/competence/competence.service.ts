import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Competence } from './competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private _key:string = "competence";
private _competence: Competence[]=[]

  constructor() {this._initalizationCompetence() }


  getAll(): Competence[] {
    return this._competence;
  }

  get(competenceId:string): Competence|null{
    return this._competence.find(u => u.id === competenceId) || null;
  }
  addCompetence(Competence:Competence):void {
    Competence.id=uuidv4();
    this._competence.push(Competence);
    this._saveCompetence();
  }

  removeCompetence(competenceId:string){
    const index = this._competence.findIndex(u => u.id == competenceId );
    if(index !== -1){
      this._competence.splice(index,1);
    }
  }
  updateCompetence(Competence:Competence){
    const index = this._competence.findIndex(u => u.id == Competence.id );
    if(index !== -1){
      this._competence[index] = Competence;
      this._saveCompetence();
    }
  }
  private _saveCompetence(){
    try{
  const competence = JSON.stringify(this._competence);
  localStorage.setItem(this._key,competence);
    }catch(e){
  console.error(e);
    }
  }
  private _initalizationCompetence():void{
    const competence = localStorage.getItem(this._key);
    try{
      this._competence = competence !=null ? JSON.parse(competence):[];
    }catch(e){
      console.error(e);
    }
    }




}
