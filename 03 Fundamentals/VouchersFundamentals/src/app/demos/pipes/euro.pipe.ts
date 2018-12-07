import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "euro"
})
export class EuroPipe implements PipeTransform {
  transform(value: number, prepend: boolean = false): any {
    let x = "";

    if (prepend) x = `€ ${value}`;
    else x = `${value} €`;
    return x;
  }
}
