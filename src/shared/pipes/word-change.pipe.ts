import { Pipe, PipeTransform } from '@angular/core';
/*
 * change all a to z in string
 * change all b to y in string
 * Usage:
 *   value | changeLetter
 * Example:
 *   {{ aaaabbbbzzz | changeLetter:10 }}
 *   formats to: zzzzyyyzzz
*/
@Pipe({name: 'changeLetter'})
export class ChangeLetterPipe implements PipeTransform {
  transform(value: string): string {
    const changedString = value.replace(new RegExp('a', 'g'), 'z').replace(new RegExp('b', 'g'), 'y');
    return changedString;
  }
}