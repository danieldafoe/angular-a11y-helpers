import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAnnouncerServiceComponent } from './preview-announcer-service.component';

describe('PreviewAnnouncerServiceComponent', () => {
  let component: PreviewAnnouncerServiceComponent;
  let fixture: ComponentFixture<PreviewAnnouncerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAnnouncerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAnnouncerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
