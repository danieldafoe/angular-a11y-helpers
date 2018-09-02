# angular-a11y-helpers

[![CircleCI](https://circleci.com/gh/danieldafoe/angular-a11y-helpers/tree/develop.svg?style=svg)](https://circleci.com/gh/danieldafoe/angular-a11y-helpers/tree/develop)

Each and every piece of the library contains unit tests which must achieve 100% before CircleCI will report a "PASSED" result.

## Usage

`npm install angular-a11y-helpers`

---

## Components

### AnnouncerComponent

_Requires use of [AahAnnouncerService](#announcer-service) to work._

Dynamically injects content sent to the `AahAnnouncerService` into the DOM so that messages are immediately read by assisstive technology. (The immediacy of the update can be configured.)

#### How to Use

Place `<div id='aah-announcer'></div>` in your application's app component template file. As a sibling of that element - or anywhere else you please - include the `<aah-announcer></aah-announcer>` component.

#### How it Works

The `AahAnnouncerComponent` component will dynamically inject content into the empty div element when you invoke the AahAnnouncerService's `say()` method.

#### Example

`app.component.html`
```html
<div id='aah-announcer'></div>
<aah-announcer></aah-announcer>
<main>
  <router-outlet></router-outlet>
</main>
```

---

## Directives

### [FocusFirst]

**Type:** Attribute

**Description:** When using native routing capabilities in Angular, applying the `aahFocusFirst` directive to an element will ensure that that element becomes focused when that particular view is initialized.

Attaching this directive to an element that is already part of the tab order does not affect its initial `tabindex` attribute, whether it was set programmatically or determined by the browser.

#### When to Use

This is particularly useful when routing between full page views. Choosing an element that would give context to this new view is a good approach. This is useful for those using assistive technology to navigate the web. One of the first elements in the DOM (like a global nav) or the page's `<h1>` are good choices.

_Only one element should receive this directive per view._

---

## Enums

### AnnouncerRole

`alert` - Updates to this container's content will be read immediately. See [ARIA alert role](https://www.w3.org/TR/wai-aria-1.1/#alert) for more information. 

`status` - Updates to this container's content will be read _at a convenient time_. See [ARIA status role](https://www.w3.org/TR/wai-aria-1.1/#status) for more information. 

### AnnouncerType

`assertive` - Updates to this container will be read immediately and interrupt whatever is currently being read by the screen reader.

`polite` - Updates to this container will be read _"at the next graceful opportunity"_.

See [aria-live information](https://www.w3.org/TR/wai-aria-1.1/#aria-live) for more information on the `AnnouncerType` values.

---

## Services

### AnnouncerService

_Requires use of [AahAnnouncerComponent](#announcer-component) to work._

Allows sending content to the `AahAnnouncerComponent` to be dynamically updated in the DOM so that assistive technology will read it aloud.

#### Methods

**`say(words)`**

`@accepts string` - Content to be read by a screen reader.

`@returns void`

**`setRole(newRole)`**

`@accepts ` [AnnouncerRole](#announcer-role) - New [ARIA role](https://www.w3.org/TR/wai-aria-1.1/#roles) to set on the content container the next time content is injected into a portal host.

`@returns void`

**`setType(newType)`**

`@accepts ` [AnnouncerType](#announcer-type) - New [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) value to set on the content container the next time content is injected into a portal host.

`@returns void`

#### Example

```js
export class PreviewAnnouncerServiceComponent {

  constructor(private announcer: AahAnnouncerService) { }

  sendWords(): void {
    this.announcer.say('Some words were said.');
  }
}
```

