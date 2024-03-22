import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [],
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.css'
})
export class MusicDetailComponent {
  //Código usado no exercício do slide 03 - pag 16
  paramValue: any = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    console.log(this.router.url);
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params); // { id: [número colocado na rota] }
      this.paramValue = params["id"]; //params["id"] é como se fosse params.id
    })
  }
}
