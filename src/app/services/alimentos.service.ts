import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentosService {
  key = "";
  constructor(private httpClient: HttpClient) { }

  getById(alimento: any): Observable<any>{
    let headers = new HttpHeaders({"X-Api-Key":this.key});

    let url = "https://api.api-ninjas.com/v1/nutrition?query="; 

    return this.httpClient.get(url+alimento, {headers: headers});
  }
}
