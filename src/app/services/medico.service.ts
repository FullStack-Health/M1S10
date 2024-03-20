import { Injectable } from '@angular/core';
import { Medico } from '../medico.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url:string = "";
  constructor(private httpClient: HttpClient) { }

  create(medico: Medico){

  }

  read(id: number){

  }

  update(medico: Medico){

  }

  delete(id: number){
    
  }
}
