import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dragonSlayer'
})
export class DragonSlayerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
