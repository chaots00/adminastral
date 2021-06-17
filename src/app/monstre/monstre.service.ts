import { Injectable } from '@angular/core';
import { Monstre } from './monstre';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MonstreService {
  private _key:string = "monstre";
  private _monstre:Monstre[] = [{
    id:"test",nom:"test",pv:10,gold:10,dega:10,exp:10,description:"test test"
  }]

  constructor() { this._initalizationMonstre()}

  getAll(): Monstre[] {
    return this._monstre;
  }
  get(monstreId:string): Monstre|null{
    return this._monstre.find(u => u.id === monstreId) || null;
  }
  addMonstre(Monstre:Monstre):void {
    Monstre.id=uuidv4();
    this._monstre.push(Monstre);
    this._saveMonstre();
  }
  removeMonstre(monstreId:string){
    const index = this._monstre.findIndex(u => u.id == monstreId );
    if(index !== -1){
      this._monstre.splice(index,1);
    }
  }
  updateMonstre(Monstre:Monstre){
    const index = this._monstre.findIndex(u => u.id == Monstre.id );
    if(index !== -1){
      this._monstre[index] = Monstre;
      this._saveMonstre();
    }
  }
 
  private _saveMonstre(){
    try{
  const monstre = JSON.stringify(this._monstre);
  localStorage.setItem(this._key,monstre);
    }catch(e){
  console.error(e);
    }
  }
  private _initalizationMonstre():void{
    const monstre = localStorage.getItem(this._key);
    try{
      this._monstre = monstre !=null ? JSON.parse(monstre):[];
    }catch(e){
      console.error(e);
    }
    }


}
