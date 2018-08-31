import { Subscription } from 'rxjs';
import { AahAnnouncerService } from './announcer.service';
import { AnnouncerRole, AnnouncerType } from '../components/announcer/announcer.component';

describe('AnnouncerServiceService', () => {
  let announcerService: AahAnnouncerService;

  beforeEach(() => {
    announcerService = new AahAnnouncerService();
  });

  it('should emit the value passed to say()', () => {
    const sayAlert = 'Alert';

    // Subscribe to the requests Subject
    const sub: Subscription = announcerService.requests.subscribe((val) => {
      expect(val).toEqual('Alert');
    });

    // Make the service emit a value
    announcerService.say(sayAlert);
    announcerService.requests.complete();
  });

  it('should emit the value passed to setRole()', () => {
    const setToAlert = AnnouncerRole.alert;

    // Subscribe to the requests Subject
    const sub: Subscription = announcerService.role.subscribe((val) => {
      expect(val).toEqual('alert');
    });

    // Make the service emit a value
    announcerService.setRole(setToAlert);
    announcerService.role.complete();
  });

  it('should emit the value passed to setType()', () => {
    const setToPolite = AnnouncerType.polite;

    // Subscribe to the type Subject
    const sub: Subscription = announcerService.role.subscribe((val) => {
      expect(val).toEqual('polite');
    });

    // Make the service emit a value
    announcerService.setType(setToPolite);
    announcerService.type.complete();
  });


});
