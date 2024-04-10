import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  standalone: false
})
export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    return [];
  }

}
