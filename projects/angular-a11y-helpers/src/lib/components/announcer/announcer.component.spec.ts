import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AahAnnouncerService } from '../../services/announcer.service';
import { AahAnnouncerComponent, AnnouncerRole, AnnouncerType } from './announcer.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div id='aah-announcer'></div>
    <aah-announcer></aah-announcer>
  `
})
class TestHostComponent { }

describe('AnnouncerComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let announcerComponent: AahAnnouncerComponent;
  let announcerService: AahAnnouncerService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, AahAnnouncerComponent],
      providers: [AahAnnouncerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    announcerComponent = fixture.debugElement.query(By.directive(AahAnnouncerComponent)).componentInstance;
    announcerService = fixture.debugElement.injector.get(AahAnnouncerService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should subscribe to AahAnnouncerService requests', () => {
    fixture.detectChanges();
    expect(announcerComponent.requests$).toBeTruthy();
  });

  it('should subscribe to AahAnnouncerService role changes', () => {
    fixture.detectChanges();
    expect(announcerComponent.role$).toBeTruthy();
  });

  it('should subscribe to AahAnnouncerService type changes', () => {
    fixture.detectChanges();
    expect(announcerComponent.type$).toBeTruthy();
  });

  it('should create a portal host in the DOM', fakeAsync(() => {
    announcerComponent.ngAfterViewInit();
    announcerService.say('foo');
    fixture.detectChanges();
    tick();

    // Get the injected portal template
    const injectedPortal = fixture.debugElement.query(By.css('.sr-only'));
    expect(injectedPortal).toBeTruthy();
    tick(500);
  }));

  it('should detach the portal from the outlet after content has been updated', fakeAsync(() => {
    announcerComponent.ngOnInit();
    expect(announcerComponent.role).toEqual('status');

    announcerComponent.ngAfterViewInit();
    announcerService.setRole(AnnouncerRole.alert);
    fixture.detectChanges();
    expect(announcerComponent.role).toEqual('alert');

    // Trigger a new portal to be injected
    announcerService.say('role change');
    fixture.detectChanges();
    tick();

    // Get the injected portal template
    const announcement = fixture.debugElement.query(By.css('.sr-only'));
    const announcementRole = announcement.nativeElement.getAttribute('role');
    expect(announcementRole).toEqual('alert');
    tick(500);
  }));

  it('should use latest bound value in injected portal template when a new role is passed', fakeAsync(() => {
    announcerComponent.ngOnInit();
    expect(announcerComponent.role).toEqual('status');

    announcerComponent.ngAfterViewInit();
    announcerService.setRole(AnnouncerRole.alert);
    fixture.detectChanges();
    expect(announcerComponent.role).toEqual('alert');

    // Trigger a new portal to be injected
    announcerService.say('role change');
    fixture.detectChanges();
    tick();

    // Get the injected portal template
    const announcement = fixture.debugElement.query(By.css('.sr-only'));
    const announcementRole = announcement.nativeElement.getAttribute('role');
    expect(announcementRole).toEqual('alert');
    tick(500);
  }));

  it('should use latest bound value in injected portal template when a new type is passed', fakeAsync(() => {
    announcerComponent.ngOnInit();
    expect(announcerComponent.type).toEqual('polite');

    announcerComponent.ngAfterViewInit();
    announcerService.setType(AnnouncerType.assertive);
    fixture.detectChanges();
    expect(announcerComponent.type).toEqual('assertive');

    // Trigger a new portal to be injected
    announcerService.say('role change');
    fixture.detectChanges();
    tick();

    // Get the injected portal template
    const announcement = fixture.debugElement.query(By.css('.sr-only'));
    const announcementType = announcement.nativeElement.getAttribute('aria-live');
    expect(announcementType).toEqual('assertive');
    tick(500);
  }));

  it('should detach the portal from the portal host when the component is destroyed', () => {
    spyOn(announcerComponent, 'detachPortal');
    announcerComponent.ngOnDestroy();
    fixture.detectChanges();
    expect(announcerComponent.detachPortal).toHaveBeenCalled();
  });
});
