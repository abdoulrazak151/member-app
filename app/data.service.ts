import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  membres=[
    {
    nom: 'Abdou',
    prenom: 'Mati',
    enforme:true
  },
  {
    nom: 'Nana',
    prenom: 'Moussa',
    enforme:false
  },
  {
    nom: 'Ibrahim',
    prenom: 'Abdoul',
    enforme:true
  },
  {
    nom: 'Adamou',
    prenom: 'Maiga',
    enforme:true
  }
  ,
  {
    nom: 'Abdou',
    prenom: 'Mati',
    enforme:true
  },
  {
    nom: 'Nana',
    prenom: 'Moussa',
    enforme:false
  },
  {
    nom: 'Ibrahim',
    prenom: 'Abdoul',
    enforme:true
  },
  {
    nom: 'Adamou',
    prenom: 'Maiga',
    enforme:true
  },
  {
    nom: 'Abdou',
    prenom: 'Mati',
    enforme:true
  },
  {
    nom: 'Nana',
    prenom: 'Moussa',
    enforme:false
  },
  {
    nom: 'Ibrahim',
    prenom: 'Abdoul',
    enforme:true
  },
  {
    nom: 'Adamou',
    prenom: 'Maiga',
    enforme:true
  }
];

setStatus(index:number){
  this.membres[index].enforme= !this.membres[index].enforme;
}

public getMembre(){
  return this.membres;
}
  constructor() { }


}
 