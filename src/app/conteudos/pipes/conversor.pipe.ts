import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor',
  standalone: true
})
export class ConversorPipe implements PipeTransform {

  //Pipe usado no exercício
  transform(value: number): string {
    let tempoEmSegundos = value/1000;
    return tempoEmSegundos + "s";
  }

}
