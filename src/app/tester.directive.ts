import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTester]',
  standalone: true
})
export class TesterDirective {
  element: ElementRef | any;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('click')
  quandoClicar(){
    this.element.nativeElement.style.color = "red";
    navigator.clipboard.writeText(this.element.nativeElement.innerText);
    alert("Texto copiado para área de tranferência")
  }

}
