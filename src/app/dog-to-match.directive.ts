import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[DogToMatch]'
})
export class DogToMatchDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
