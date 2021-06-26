import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maj'
})
export class MajPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value[0].toUpperCase()+value.slice(1);
  }

}
