import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentosService {
  key = 'amLEpqWuWyW2MWPp2NEPKA==DCcK6XlfB3W0VFVZ';
  constructor(private httpClient: HttpClient) {}

  //Método usado para capturar o id (nesse caso é o nome do alimento) e retornar um objeto do alimento
  getById(alimento: any): Observable<any> { //o retorno do método (: Observable<any>) é opcional
    //Toda requisição possui partes fundamentais para a comunicação, são elas: url, cabeçalhos (headers) e o método HTTP (GET, POST, PUT e DELETE)

    let headers = new HttpHeaders({ 'X-Api-Key': this.key }); //Padrão de inicialização do cabeçalho

    let url = 'https://api.api-ninjas.com/v1/nutrition?query='; //declaração da url

    return this.httpClient.get(url + alimento, { headers: headers }); //uso do metodo GET (this.httpClient.get) para montar a requisição e retornar a resposta dela
  }
}
