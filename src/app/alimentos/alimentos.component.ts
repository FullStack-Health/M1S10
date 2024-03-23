import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentosService } from '../services/alimentos.service';

@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css',
})
export class AlimentosComponent {
  alimentos:any = [];

  constructor(private alimentosService: AlimentosService, private router: Router){}

  ngOnInit(){
    this.alimentosService.listAll().subscribe({
      next: (response)=>{
        console.log(response);
        this.alimentos = response;
      },
      error: ()=>{

      }
    })
  }

  redirectTo(){
    
  }

  redirectToDetail(nome: string){
    //... Para capturar o nome e concatenar com a url e fazer a chamada detalhada
    this.router.navigate(["alimentos", nome]);
  }
}
