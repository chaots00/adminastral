import { Injectable } from '@angular/core';
import { Perso } from './perso';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PersoService {
  private _key:string = "perso";
  private _perso: Perso[] = [{
    id:"test",nom :"test", niveau:10,pv_max:10, dega:10,exp:10,classe:"test",competence:"test"
  }]
  constructor() {this._initalizationPerso() }

  getAll(): Perso[] {
    return this._perso;
  }

  get(persoId:string): Perso|null{
    return this._perso.find(u => u.id === persoId) || null;
  }

  addPerso(Perso:Perso):void {
    Perso.id=uuidv4();
    this._perso.push(Perso);
    this._savePerso();
  }

  removePerso(persoId:string){
    const index = this._perso.findIndex(u => u.id == persoId );
    if(index !== -1){
      this._perso.splice(index,1);
    }
  }
  updatePerso(Perso:Perso){
    const index = this._perso.findIndex(u => u.id == Perso.id );
    if(index !== -1){
      this._perso[index] = Perso;
      this._savePerso();
    }
  }

  private _savePerso(){
    try{
  const perso = JSON.stringify(this._perso);
  localStorage.setItem(this._key,perso);
    }catch(e){
  console.error(e);
    }
  }

  private _initalizationPerso():void{
    const perso = localStorage.getItem(this._key);
    try{
      this._perso = perso !=null ? JSON.parse(perso):[];
    }catch(e){
      console.error(e);
    }
    }
}
