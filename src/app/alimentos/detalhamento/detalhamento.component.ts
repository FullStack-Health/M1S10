import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhamento',
  standalone: true,
  imports: [],
  templateUrl: './detalhamento.component.html',
  styleUrl: './detalhamento.component.css',
})
export class DetalhamentoComponent {
  alimentos = [
    {
      id: 1,
      nome: 'Maçã',
      calorias: 52,
      proteinas: 0.3,
      gorduras: 0.2,
      carboidratos: 14,
      fibra: 2.4,
    },
    {
      id: 2,
      nome: 'Banana',
      calorias: 89,
      proteinas: 1.3,
      gorduras: 0.3,
      carboidratos: 23,
      fibra: 2.6,
    },
    {
      id: 3,
      nome: 'Cenoura',
      calorias: 41,
      proteinas: 0.9,
      gorduras: 0.2,
      carboidratos: 10,
      fibra: 2.8,
    },
    {
      id: 4,
      nome: 'Espinafre',
      calorias: 23,
      proteinas: 2.9,
      gorduras: 0.4,
      carboidratos: 3.6,
      fibra: 2.2,
    },
    {
      id: 5,
      nome: 'Quinoa',
      calorias: 120,
      proteinas: 4.4,
      gorduras: 1.9,
      carboidratos: 21,
      fibra: 2.8,
    },
  ];
  alimento: number = 0;
  alimentoObj: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private alimentosService: AlimentosService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe((parametros) => {
      this.alimento = parametros['alimento'];
    });

    if (this.alimento != 0) {
      this.alimentosService.getById(this.alimento).subscribe({
        next: (response)=>{
          console.log(response);
        },
        error: (err)=>{
          console.error("Error", err);
        }
      })
    }
  }
}
