import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';
import { ConversorPipe } from './pipes/conversor.pipe';
import { TesterDirective } from './tester.directive';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ToUppercasePipe, DatePipe, ConversorPipe, TesterDirective, HomeComponent],
})
export class AppComponent {
  title = "";
  dateNow = new Date();
  toUppercase = new ToUppercasePipe();
 
  ngOnInit(){
    this.title = this.toUppercase.transform("textooo");
  }
}
