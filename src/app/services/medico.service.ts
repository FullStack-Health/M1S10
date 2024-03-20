import { Injectable } from '@angular/core';
import { Medico } from '../medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor() { }

  //Normalmente é no service que você encontra os métodos de CRUD (Create, Read, Update e Delete)
  create(medico: Medico){

  }

  read(id: number){

  }

  update(medico: Medico){

  }

  delete(id: number){
    
  }
}
