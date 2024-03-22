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

  // Toda vez em que eu tenho o entendimento de que irei fazer algo assim 
  // que o componente inicializar o ideal seria colocar sua implementação no método ngOnInit
  ngOnInit() { 
    //as 3 linhas seguintes servem para capturar o parametro chamado 'alimento' na rota 
    // e armazenar isso na variável alimento
    this.activatedRoute.params.subscribe((parametros) => {
      this.alimento = parametros['alimento'];
    });


    if (this.alimento != 0) {
      //Já o método subscribe serve para você executar, dependendo do retorno, uma determinada ação
      //ele se assemelha muito ao .then das promisses em javascript
      this.alimentosService.getById(this.alimento).subscribe({
        next: (response)=>{ //será executado a função next quando o retorno do this.httpClient der sucesso (status 200 ~ 299)
          console.log(response);
        },
        error: (err)=>{ //será executado a função next quando o retorno do this.httpClient der erro (status 400 ~ 500)
          console.error("Error", err);
        }
      })
    }
  }
}
