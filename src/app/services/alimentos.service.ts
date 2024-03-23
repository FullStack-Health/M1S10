import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentosService {
  //Acesse o link 
  //Na aba de sua conta acesse a sua api e coloque abaixo o valor da sua chave de API
  key = 'amLEpqWuWyW2MWPp2NEPKA==DCcK6XlfB3W0VFVZ';
  constructor(private httpClient: HttpClient) {}

  //Método usado para capturar o id (nesse caso é o nome do alimento) e retornar um objeto do alimento
  getById(alimento: any): Observable<any> { //o retorno do método (: Observable<any>) é opcional
    //Toda requisição possui partes fundamentais para a comunicação, são elas: url, cabeçalhos (headers) e o método HTTP (GET, POST, PUT e DELETE)

    //Padrão de inicialização do cabeçalho porem com a chave para o acesso 
    let headers = new HttpHeaders({ 'X-Api-Key': this.key }); 

    let url = 'https://api.api-ninjas.com/v1/nutrition?query='; //declaração da url
    return this.httpClient.get(url + alimento, { headers: headers }); //uso do metodo GET (this.httpClient.get) para montar a requisição e retornar a resposta dela
  }

  listAll(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //Padrão de inicialização do cabeçalho
    return this.httpClient.get("../../assets/alimentos.json", { headers: headers });
  }
}
