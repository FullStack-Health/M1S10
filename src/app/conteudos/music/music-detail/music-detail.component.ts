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
  paramValue: any = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    console.log(this.router.url);
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      this.paramValue = params["id"]; //params.id
    })
  }
}
