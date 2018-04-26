import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dog-to-match]'
})
export class DogToMatchDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
