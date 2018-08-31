import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomPortalHost, PortalHost, TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

import { AahAnnouncerService } from '../../services/announcer.service';

export enum AnnouncerRole {
  alert = 'alert',
  status = 'status'
}

export enum AnnouncerType {
  assertive = 'assertive',
  polite = 'polite'
}

@Component({
  selector: 'aah-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.scss']
})
export class AahAnnouncerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('aahAnnouncerPortalHost') portalHostRef;
  private portal;
  private portalHost: PortalHost;
  announcer: string;
  requests$: Subscription;
  role$: Subscription;
  type$: Subscription;
  atomic = true;
  role: AnnouncerRole = AnnouncerRole.status;
  type: AnnouncerType = AnnouncerType.polite;

  constructor(
    private announcerService: AahAnnouncerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.requests$ = this.announcerService.requests.subscribe((phrase) => {
      this.createPortalHost();

      if (!this.portalHost.hasAttached()) {
        this.createPortal();
        this.attachPortal();
      }

      if (this.portalHost.hasAttached()) {
        this.announcer = phrase;

        setTimeout(() => {
          this.detachPortal();
        }, 500);
      }
    });

    this.role$ = this.announcerService.role.subscribe((role: AnnouncerRole) => {
      this.role = role;
    });

    this.type$ = this.announcerService.type.subscribe((type: AnnouncerType) => {
      this.type = type;
    });
  }

  ngOnDestroy() {
    this.detachPortal();
  }

  attachPortal(): void {
    this.portalHost.attach(this.portal);
  }

  createPortal(): void {
    this.portal = new TemplatePortal(
      this.portalHostRef,
      this.viewContainerRef
    );
  }

  createPortalHost(): void {
    this.portalHost = new DomPortalHost(
      document.querySelector('#aah-announcer'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
  }

  detachPortal(): void {
    this.portalHost.detach();
  }

}
