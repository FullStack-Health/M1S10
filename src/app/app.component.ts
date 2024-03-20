import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';
import { ConversorPipe } from './pipes/conversor.pipe';
import { TesterDirective } from './tester.directive';
import { HomeComponent } from './home/home.component';
import { CalculadoraService } from './services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ToUppercasePipe, DatePipe, ConversorPipe, TesterDirective, HomeComponent, FormsModule],
})
export class AppComponent {
  title = "";
  dateNow = new Date();
  toUppercase = new ToUppercasePipe();
  resultSoma: number = 0;
  resultSub: number = 0;
  resultDiv: number = 0;
  resultMult: number = 0;
  numero1: number = 0;
  numero2: number = 0;
  user: any = {};
 
  constructor(private calcService: CalculadoraService){}

  ngOnInit(){
    this.title = this.toUppercase.transform("textooo");
  }
  
  calcular(){
    this.resultSoma = this.calcService.somar(this.numero1, this.numero2);
    this.resultSub = this.calcService.subtrair(this.numero1, this.numero2);
    this.resultDiv = this.calcService.dividir(this.numero1, this.numero2);
    this.resultMult = this.calcService.multiplicar(this.numero1, this.numero2);
  }

}
