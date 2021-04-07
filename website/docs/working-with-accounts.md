---
title: Working with ArcGIS Accounts
---

<!-- :::warning Needs media!
This page is ready for screenshots and/or gifs.
::: -->

<!-- :::note Intent of this page

**🏛️ This is a foundational topic.**

This topic should advise users on:

1. Signing in to an ArcGIS Online account
2. Signing in to an ArcGIS Enterprise account
3. Working with multiple accounts

::: -->

In order to use ArcGIS Assistant, you'll need to sign in to an ArcGIS account. In this guide, we'll assume you already have an account and know how to use it. If thats not the case, then you might want to learn how to [Get started with ArcGIS Online](https://doc.arcgis.com/en/arcgis-online/get-started/get-started.htm).

## Sign in to ArcGIS Online

If you use ArcGIS Online, you'll have a couple options to sign in. If you're not sure how to navigate the sign in window, check out these guides on how to [Sign in with an ArcGIS Login](https://doc.arcgis.com/en/arcgis-online/get-started/sign-in.htm#ESRI_SECTION1_045CC6FB2920447E85495F7127C9AA00) and how to [Sign in with an organization-specific login](https://doc.arcgis.com/en/arcgis-online/get-started/sign-in.htm#ESRI_SECTION1_5DEB4225DAE245B6A75AB24975D62F55).

## Sign in to ArcGIS Enterprise

For ArcGIS Enterprise users, the sign in process involves an extra step. Assistant already knows how to communicate with ArcGIS Online, but since your deployment of Enterprise could be anywhere, you'll need to tell Assistant where to find it (via the URL) and authorize it to act on your behalf (via an App ID).

If you don't have an App ID you can learn about the process to do that in the [Add items and Register your app](https://enterprise.arcgis.com/en/portal/latest/administer/windows/add-items.htm#ESRI_SECTION1_0D1B620254F745AE84F394289F8AF44B) sections of the Portal for ArcGIS docs.

Once you have registered your application with your ArcGIS Enterprise deployment and recorded the App ID that was provided, enter them into the "Sign in with ArcGIS Enterprise" modal and click Continue.

## Manage multiple accounts

One of the great features of ArcGIS Assistant is the ability to be signed in to multiple accounts simultaneously. After you've signed in for the first time, you'll see options to add accounts in the Account Drawer.

You can use this feature to add as many accounts as you'd like, and Assistant will do its best to remember them even after you leave the website.

:::note

ArcGIS Assistant stores your accounts in your web browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), so if you ever clear that out or switch browsers Assistant won't remember you.

:::

### Why sign in with more than one account?

There are a couple benefits to signing in with multiple accounts.

1. You can quickly switch between accounts without needing to refresh the page or go through the ArcGIS sign in dialog each time.
2. You can [copy content](working-with-items#copying-items) across multiple accounts with ease. When you copy an item, Assistant will present all your sign in accounts as possible destinations. This is really great when you need to copy content across two or more accounts.

### The active account

When you're signed in to more than one account, Assistant needs to treat one as the "active account". This account is what drives the ArcGIS Item Browser, allowing you to find content.

If you switch between two active accounts, you'll notice the items on the My Content and My Organization pages will be relevant to the account which is currently active.

#### Switching the active account

To change the active account, open the Account Drawer by clicking on your user in the navigation bar, then click on one of your recent accounts and select "Switch active account".

### Other considerations

#### Organization Administrator accounts

If the active account is an Organization Administrator, you will notice Assistant provides you with the ability to act on behalf of other users in that organization. You can currently use this feature in two ways:

1. To browse another user's content
2. To copy items into another user's account
