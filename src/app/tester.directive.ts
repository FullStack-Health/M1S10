import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTester]',
  standalone: true
})
export class TesterDirective {

  // O construtor recebe um parâmetro element do tipo ElementRef, que é usado para acessar o elemento DOM associado ao componente.
  constructor(private element: ElementRef) {}

  // Define um ouvinte de eventos que será acionado quando o elemento hospedeiro receber um evento de clique.
  @HostListener('click')
  quandoClicar(){ // Método chamado quando o evento de clique é acionado no elemento hospedeiro.

    // Muda a cor do texto do elemento hospedeiro para vermelho.
    this.element.nativeElement.style.color = "red";
    // Copia o texto do elemento hospedeiro para a área de transferência do sistema.
    navigator.clipboard.writeText(this.element.nativeElement.innerText);

    alert("Texto copiado para área de tranferência");
  }

}
