import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercase',
  standalone: true
})
export class ToUppercasePipe implements PipeTransform {

  //Pipe criado apenas para demonstração
  transform(value: string): string {
    return value.toUpperCase();
  }

}
