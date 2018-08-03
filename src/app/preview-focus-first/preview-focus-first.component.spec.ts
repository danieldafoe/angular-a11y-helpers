import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFocusFirstComponent } from './preview-focus-first.component';

describe('PreviewFocusFirstComponent', () => {
  let component: PreviewFocusFirstComponent;
  let fixture: ComponentFixture<PreviewFocusFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFocusFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFocusFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
