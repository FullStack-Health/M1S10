import { Component } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TesterDirective } from '../tester.directive';
import { ConversorPipe } from '../pipes/conversor.pipe';
import { DatePipe } from '@angular/common';
import { ToUppercasePipe } from '../pipes/to-uppercase.pipe';
import { CalculadoraService } from '../services/calculadora.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToUppercasePipe,
    DatePipe,
    ConversorPipe,
    TesterDirective,
    FormsModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = '';
  dateNow = new Date();

  //Para utilizar o pipe no controller é necessário antes de tudo instanciar a classe do pipe
  toUppercase = new ToUppercasePipe();

  //Variáveis usadas no exercício
  resultSoma: number = 0;
  resultSub: number = 0;
  resultDiv: number = 0;
  resultMult: number = 0;
  numero1: number = 0;
  numero2: number = 0;

  //Injeção de dependêcia do service
  constructor(private calcService: CalculadoraService) {}

  ngOnInit() {
    //Exemplo de como chamar o pipe ToUppercasePipe no controller
    this.title = this.toUppercase.transform('textooo');
  }

  //Método ultilizado para a resolução do exercício
  calcular() {
    this.resultSoma = this.calcService.somar(this.numero1, this.numero2);
    this.resultSub = this.calcService.subtrair(this.numero1, this.numero2);
    this.resultDiv = this.calcService.dividir(this.numero1, this.numero2);
    this.resultMult = this.calcService.multiplicar(this.numero1, this.numero2);
  }
 
}
