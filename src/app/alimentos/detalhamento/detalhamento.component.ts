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
  nomeAlimento: string = "";
  alimento: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private alimentosService: AlimentosService
  ) {}

  // Toda vez em que eu tenho o entendimento de que irei fazer algo assim 
  // que o componente inicializar o ideal seria colocar sua implementação no método ngOnInit
  ngOnInit() { 
    //as 3 linhas seguintes servem para capturar o parametro chamado 'alimento' na rota 
    // e armazenar isso na variável nomeAlimento
    this.activatedRoute.params.subscribe((parametros) => {
      this.nomeAlimento = parametros['alimento'];
    });


    if (this.nomeAlimento != "") {
      //Já o método subscribe serve para você executar, dependendo do retorno, uma determinada ação
      //ele se assemelha muito ao .then das promisses em javascript
      this.alimentosService.getById(this.nomeAlimento).subscribe({
        next: (response)=>{ //será executado a função next quando o retorno do this.httpClient der sucesso (status 200 ~ 299)
          this.alimento = response[0]; //Eu armazeno a posição 0 pois irei receber um array com um objeto
        },
        error: (err)=>{ //será executado a função next quando o retorno do this.httpClient der erro (status 400 ~ 500)
          console.error("Error", err);
        }
      })
    }
  }
}
