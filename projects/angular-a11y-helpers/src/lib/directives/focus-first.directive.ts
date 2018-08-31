import { Directive, HostBinding, Renderer, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[aahFocusFirst]'
})
export class AahFocusFirstDirective implements AfterViewInit {

  @HostBinding('attr.tabindex') get tabindex() {
    if (this.elementHasTabindex()) {
      return this.currentTabindex;
    }
    return -1;
  }
  element: ElementRef;
  currentTabindex: number;

  constructor(el: ElementRef, private _renderer: Renderer) {
    this.element = el;
    this.currentTabindex = (<HTMLElement>this.element.nativeElement).tabIndex;
  }

  ngAfterViewInit() {
    this._renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }

  elementHasTabindex(): boolean {
    return this.currentTabindex >= -1 ? true : false;
  }
}
