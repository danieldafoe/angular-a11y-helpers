# angular-a11y-helpers

## Usage

`npm install angular-a11y-helpers`

## Directives

### [FocusFirst]

**Type:** Attribute

**Description:** When using native routing capabilities in Angular, applying the `aahFocusFirst` directive to an element will ensure that that element becomes focused when that particular view is initialized.

Attaching this directive to an element that is already part of the tab order does not affect its initial tabindex.

#### Use

This is particularly useful when routing between full page views. Choosing an element that would give context to this new view is a good approach. This is useful for those using assistive technology to navigate the web. One of the first element's in the DOM (like a global nav) or the page's `<h1>` are good choices.

_Only one element should receive this directive per view._
