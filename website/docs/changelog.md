---
title: Changelog
---

<!-- :::note Intent of this page

This page conveys changes made over time to ArcGIS Assistant to end users.

::: -->

This is the place to check out what's new with Assistant!

## 25 May 2021

### Fixed

- When browsing "ArcGIS Online" from the Content page, you may have seen slightly different results than if you went to the Online app and performed the same search. We've fixed this so you should get the same results now.

- We fixed a couple issues with the pagination controls on the Item Resources page. URLs were getting jumbled and pagination was wonky when there were 100+ pages. Should be all good now!

- There was a UI regression at some point that smooshed the item title and icon together on the Content page.

## 11 May 2021

### Added

- If your portal isn't reachable for any reason, Assistant will now display a more useful message. This is particularly handy when you forget to connect to VPN 😅

### Fixed

- The recent ArcGIS Online update introduced some great new capabilities to the ArcGIS REST API! Unfortunately it also broke Assistant's Item Copy workflow in a few different ways... but we've resolved those issues and item copying is back in business 🎉

- There was a bug where you couldn't upload an Item Resource with a `/` in the name. It's fixed 🙂

- Sometimes switching to the "My Organization" view wouldn't display any items (when it definitely should have).

## 30 April 2021

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
