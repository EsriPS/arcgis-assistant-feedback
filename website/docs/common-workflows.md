---
title: Common Workflows
---

<!-- :::info WIP
This page is a work in progress.
::: -->

<!-- :::note Intent of this page

**👉 This is a reference topic.** It's likely that this topic will come up on other pages, we should point them to this page to provide more details.

Many users of Assistant find it after reading about it on a blog, forum post, chat, conference talk, or similar. Users who find Assistant for the first time in this way may be excited about what it can do, but have nothing to go on beyond what they heard about it in passing.

🛑 This page should describe some useful workflows that can only be achieved by Assistant (or are much easier to achieve with Assistant). We **should not** describe editing an item's tags or modifying the HTML in a Hub text card, for example (since those workflows are more appropriate via supported apps).

::: -->

## Copy a StoryMap [DRAFT]

It’s easy to copy a StoryMap with ArcGIS Assistant, but there are a few things to be aware of so you know what to expect.

### When should I use Assistant to copy a StoryMap?
The best and easiest way to create a copy of one of your stories is to use the **duplicate** option in the ArcGIS StoryMaps builder. Administrators can also use this method to copy _any story in their organization_.

Outside of the cases mentioned above, ArcGIS Assistant can be helpful in situations when you need to:

* Copy a story to a different organization
* Copy a story while preserving its unpublished changes [VERIFY THIS]
* Copy several stories at once
* Copy a story plus other content items at the same time
* Copy a story from an Enterprise portal to an Online organization

### What parts of the story get copied?
Everything stored in the StoryMap item gets copied. This includes all the _text, uploaded images, videos, and audio, express maps, and settings_.

References to _embeds_ and _linked media_ (Vimeo videos, Flickr images, etc) point to the same web resources as the original story.

### What if my story includes web maps/scenes?
If the story includes _web maps, web scenes, or hosted layers_ these content items are **not** duplicated with the story. The new story contains _references_ to these ArcGIS content items. Be sure to consider how these referenced items are shared and how that might affect their visibility in the new story.

If you are copying a story across organizations, you’ll need to plan to copy these content items separately and then edit the story data JSON to update their itemIDs. See below for information about how to succesfully edit story data.

If any maps or scenes contain premium/subscriber content, that content will need to be reauthorized by republishing the story.

### Anything else I should know?
* The newly created story will be published, but not shared.
* When copying a story that has unpublished changes, the unpublished changes will also be available in the copied story.
* While you may be able to copy a story from Enterprise to Online, it's not likely you'll have success copying from Online to Enterprise.

## What about copying classic story maps?
Copying classic stories is straightforward. All the advice about web maps/scenes above also applies to classic stories.

## Editing story data JSON

**WARNING: Editing a story's JSON can break the story. Only do this if you know what you are doing.**

* For ArcGIS StoryMaps stories, edits to the story JSON should be made to the `draft_xxxxxxxx.json` file. 
* For stories created using one of the classic story map templates, changes are made directly to the item data JSON.

## Copy a Web Experience

To do...

## Replace URLs in a web map

To do...

## TBD, input requested

To do...
