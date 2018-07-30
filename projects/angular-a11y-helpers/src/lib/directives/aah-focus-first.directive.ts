import { Directive, HostBinding, Renderer, ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[aahFocusFirst]'
})
export class AahFocusFirstDirective implements AfterViewInit {

  @HostBinding('attr.tabindex') tabindex = '-1';
  element: ElementRef;

  constructor(el: ElementRef, private _renderer: Renderer) {
    this.element = el;
  }

  ngAfterViewInit() {
    this._renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }
}
