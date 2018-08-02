import { AahFocusFirstDirective } from './aah-focus-first.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<h2 aahFocusFirst>Focus This First</h2>`
})
class TestComponent { }

@Component({
  template: `<button aahFocusFirst>Focus This Without Setting Tabindex</button>`
})
class ElementWithTabOrderComponent { }

let fixture;
let headingEl: HTMLElement;
let buttonEl: HTMLElement;

beforeEach(() => {

});

describe('AahFocusFirstDirective', () => {
  it('should set the tabindex of an element with no initial tabindex to -1', () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AahFocusFirstDirective, TestComponent]
    })
    .createComponent(TestComponent);

    headingEl = fixture.nativeElement.querySelector('h2');

    fixture.detectChanges();
    expect(headingEl.tabIndex).toEqual(-1);
  });

  it('should not set the tabindex of an element that already has one', () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AahFocusFirstDirective, ElementWithTabOrderComponent]
    })
    .createComponent(ElementWithTabOrderComponent);

    buttonEl = fixture.nativeElement.querySelector('button');
    const buttonElInitialTabindex = buttonEl.tabIndex;

    fixture.detectChanges();
    expect(buttonEl.tabIndex).toBe(buttonElInitialTabindex);
  });

  it('should focus the attached-to element after the view is initialized', () => {
    fixture = TestBed.configureTestingModule({
      declarations: [AahFocusFirstDirective, TestComponent]
    })
    .createComponent(TestComponent);

    headingEl = fixture.nativeElement.querySelector('h2');
    const focus = spyOn(headingEl, 'focus');

    fixture.detectChanges();
    expect(focus).toHaveBeenCalled();
  });
});
