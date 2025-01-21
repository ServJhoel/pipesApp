import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyPipe',
  standalone: false,
})
export class canFlyPipe implements PipeTransform {
  transform(value: any, vuela: boolean = false): 'Vuela' | 'No vuela' {
    return vuela ? 'Vuela' : 'No vuela';
  }
}
