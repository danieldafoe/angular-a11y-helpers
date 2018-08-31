import { Component } from '@angular/core';
import { AahAnnouncerService, AnnouncerType } from 'angular-a11y-helpers';
import { AnnouncerRole } from 'projects/angular-a11y-helpers/src/public_api';

@Component({
  selector: 'preview-announcer-service',
  templateUrl: './preview-announcer-service.component.html',
  styleUrls: ['./preview-announcer-service.component.scss']
})
export class PreviewAnnouncerServiceComponent {

  constructor(private announcer: AahAnnouncerService) { }

  changeRole(role: AnnouncerRole): void {
    this.announcer.setRole(role);
  }

  changeType(type: AnnouncerType): void {
    this.announcer.setType(type);
  }

  sendWords(): void {
    this.announcer.say('Some words were said.');
  }

  sendMoreWords(): void {
    this.announcer.say('Some more words were said.');
  }
}
