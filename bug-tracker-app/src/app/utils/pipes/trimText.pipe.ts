import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {
    transform(value: string, maxLength : number = 30) : string {
        return value.length > maxLength ? value.slice(0, maxLength) + '...' : value;
    }
}