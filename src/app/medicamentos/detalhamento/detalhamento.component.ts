import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhamento',
  standalone: true,
  imports: [],
  templateUrl: './detalhamento.component.html',
  styleUrl: './detalhamento.component.css'
})
export class DetalhamentoComponent {
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
  
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe((parametros)=>{
      console.log(parametros)
    });
 
  }
}
