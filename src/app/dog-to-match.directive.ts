import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDogToMatch]'
})
export class DogToMatchDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
