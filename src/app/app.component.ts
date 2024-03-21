import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';
import { ConversorPipe } from './pipes/conversor.pipe';
import { TesterDirective } from './tester.directive';
import { HomeComponent } from './home/home.component';
import { CalculadoraService } from './services/calculadora.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
  ],
})
export class AppComponent {

  constructor(){}

}
