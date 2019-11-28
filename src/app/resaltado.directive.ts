import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el:ElementRef) {
   var element= el.nativeElement;

   element.style.background="blue";
   element.style.color="white";
   element. style.padding="20px";
   element. style.marginTop="10px";
   element.style.fontSize="30px";

   }

}
