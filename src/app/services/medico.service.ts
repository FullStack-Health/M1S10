import { Injectable } from '@angular/core';
import { Medico } from '../medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url:string = "";
  constructor() { }

  create(medico: Medico){

  }

  read(id: number){

  }

  update(medico: Medico){

  }

  delete(id: number){
    
  }
}
