import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Objet } from './objet';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {
  private _key:string = "objet";
  private _objet: Objet[] = [{
    id:"test",nom :"test", dega:10,prix_vente:10,prix_achat:10,effect:"test"
  }]
  constructor() { this._initalizationObjet()}

  getAll(): Object[] {
    return this._objet;
  }

  get(objetId:string): Objet|null{
    return this._objet.find(u => u.id === objetId) || null;
  }
  addObjet(Objet:Objet):void {
    Objet.id=uuidv4();
    this._objet.push(Objet);
    this._saveObjet();
  }
  removeObjet(objetId:string){
    const index = this._objet.findIndex(u => u.id == objetId );
    if(index !== -1){
      this._objet.splice(index,1);
    }
  }
  updateObjet(Objet:Objet){
    const index = this._objet.findIndex(u => u.id == Objet.id );
    if(index !== -1){
      this._objet[index] = Objet;
      this._saveObjet();
    }
  }
  private _saveObjet(){
    try{
  const objet = JSON.stringify(this._objet);
  localStorage.setItem(this._key,objet);
    }catch(e){
  console.error(e);
    }
  }
  private _initalizationObjet():void{
    const objet = localStorage.getItem(this._key);
    try{
      this._objet = objet !=null ? JSON.parse(objet):[];
    }catch(e){
      console.error(e);
    }
    }
}
