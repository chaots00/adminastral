import { Injectable } from '@angular/core';
import { Quetes } from './quetes';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class QuetesService {
  private _key:string = "quetes";
private _quetes: Quetes[]=[]

  constructor() {this._initalizationQuete() }

  getAll(): Quetes[] {
    return this._quetes;
  }

  get(queteId:string): Quetes|null{
    return this._quetes.find(u => u.id === queteId) || null;
  }
  addQuete(Quetes:Quetes):void {
    Quetes.id=uuidv4();
    this._quetes.push(Quetes);
    this._saveQuete();
  }

  removeQuete(queteId:string){
    const index = this._quetes.findIndex(u => u.id == queteId );
    if(index !== -1){
      this._quetes.splice(index,1);
    }
  }
  updateQuetes(Quetes:Quetes){
    const index = this._quetes.findIndex(u => u.id == Quetes.id );
    if(index !== -1){
      this._quetes[index] = Quetes;
      this._saveQuete();
    }
  }
  private _saveQuete(){
    try{
  const quetes = JSON.stringify(this._quetes);
  localStorage.setItem(this._key,quetes);
    }catch(e){
  console.error(e);
    }
  }
  private _initalizationQuete():void{
    const quetes = localStorage.getItem(this._key);
    try{
      this._quetes = quetes !=null ? JSON.parse(quetes):[];
    }catch(e){
      console.error(e);
    }
    }
}



