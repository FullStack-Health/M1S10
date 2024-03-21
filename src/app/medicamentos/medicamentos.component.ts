import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css',
})
export class MedicamentosComponent {
  medicamentos = [
    {
      id: 1,
      nome: 'Paracetamol',
      tipo: 'Analgésico',
      dosagem: '500mg',
      intervalo: '4-6 horas',
      efeitosColaterais: ['Náusea', 'Dor de cabeça'],
    },
    {
      id: 2,
      nome: 'Amoxicilina',
      tipo: 'Antibiótico',
      dosagem: '500mg',
      intervalo: '8 horas',
      efeitosColaterais: ['Diarreia', 'Náusea'],
    },
    {
      id: 3,
      nome: 'Loratadina',
      tipo: 'Antialérgico',
      dosagem: '10mg',
      intervalo: '24 horas',
      efeitosColaterais: ['Sonolência', 'Boca seca'],
    },
  ];

  constructor(){}

  redirectTo(){
    
  }
}
