import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  alimentoForm: any = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.alimentoForm = this.formBuilder.group({
      name: ['', Validators.required],
      calorias: ['', Validators.required],
      proteinas: ['', Validators.required],
      potassio: ['', Validators.required],
      colesterol: ['', Validators.required],
      gordura: ['', Validators.required],
      imagem: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.alimentoForm.valid) {
      // Implementar a lógica para salvar os dados
      console.log(this.alimentoForm.value);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
