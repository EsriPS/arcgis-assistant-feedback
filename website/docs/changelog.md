---
title: Changelog
---

<!-- :::note Intent of this page

This page conveys changes made over time to ArcGIS Assistant to end users.

::: -->

This is the place to check out what's new with Assistant!

## 19 April 2021

### Added

- You can now create a new folder right from the Copy Item workflow

### Fixed

#### Enterprise accounts

- Enterprise accounts could see ArcGIS Online items, but not view their Item JSON or Resources. You can now fully interact with Online items from your Enterprise account 🕺🏼

- It wasn't possible to sign in to multiple accounts from the same Enterprise Portal because Assistant was a little too eager to use existing sessions

- We squashed a bug preventing you from copying Online items into Enterprise accounts

- Clicking the My Organization tab on the content page sometimes incorrectly displayed no items.

- When signing in to an Enterprise account, there's have a handy tooltip with the URL you need to add as your registered app's Redirect URI... this is now the correct URL 😅 ([#4](https://github.com/EsriPS/arcgis-assistant-feedback/issues/4))

#### Item Resources

- There was a bug when overwriting Item Resources in nested folders (with a `/` in the name)

- When deleting an Item Resource, the confirmation dialog would ask: _Are you sure you want to delete "undefined"?_... we figured _undefined_ wasn't very useful so we swapped it out for the actual resource name 😄
