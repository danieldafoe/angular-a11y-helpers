import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { AnnouncerRole, AnnouncerType } from '../components/announcer/announcer.component';

@Injectable({
  providedIn: 'root'
})
export class AahAnnouncerService {

  requests: Subject<string>;
  role: Subject<string>;
  type: Subject<string>;

  constructor() {
    this.requests = new Subject();
    this.role = new Subject();
    this.type = new Subject();
  }

  say(words: string): void {
    this.requests.next(words);
  }

  setRole(newRole: AnnouncerRole): void {
    this.role.next(newRole);
  }

  setType(newType: AnnouncerType): void {
    this.type.next(newType);
  }
}
