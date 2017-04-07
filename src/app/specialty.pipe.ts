import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialty'
})
export class SpecialtyPipe implements PipeTransform {

  transform(input: any[], specialty: string){
    if (input) {
      if (specialty === 'all') {
        return input;
      }
      let output: any[] = [];
      input.forEach(function(adventurer) {
        if (adventurer.specialty === specialty) {
          output.push(adventurer)
        }
      });
      return output;
    }
  }
}
