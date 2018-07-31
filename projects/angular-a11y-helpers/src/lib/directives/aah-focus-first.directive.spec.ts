import { AahFocusFirstDirective } from './aah-focus-first.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<h2 aahFocusFirst>Focus This First</h2>`
})
class TestComponent { }

describe('AahFocusFirstDirective', () => {
  it('should focus the attached-to element after the view is initialized', () => {
    // Setup
    const fixture = TestBed.configureTestingModule({
      declarations: [AahFocusFirstDirective, TestComponent]
    })
    .createComponent(TestComponent);

    const headingEl: HTMLElement = fixture.nativeElement.querySelector('h2');
    const focus = spyOn(headingEl, 'focus');

    // Detect
    fixture.detectChanges();

    // Expect
    expect(focus).toHaveBeenCalled();
  });
});
