import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //Metodo para o exercício do slide 02 - pag 12
  constructor() { }

  somar(num1: number, num2: number){
    return num1+num2;
  }

  dividir(num1: number, num2: number){
    return num1/num2;
  }

  multiplicar(num1: number, num2: number){
    return num1*num2;
  }

  subtrair(num1: number, num2: number){
    return num1-num2;
  }
}
