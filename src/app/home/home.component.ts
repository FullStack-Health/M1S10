import { Component } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = {
    name: "John",
    age: 30,
    email: "",
  }
  constructor(private medicoService: MedicoService){
    
  }

  ngOnInit(){
    
  }

}
