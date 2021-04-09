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

ArcGIS Assistant can be a helpful tool for copying StoryMaps. However, StoryMaps are a complex item type, so there are cases where Assistant may produce unexpected results. The information below will help you decide when Assistant is the right tool for your copying needs.

### When should I use Assistant to copy a StoryMap?
The best and easiest way to create a copy of one of your stories is to use the [**duplicate** option](https://doc.arcgis.com/en/arcgis-storymaps/get-started/faq.htm#anchor13) in the ArcGIS StoryMaps builder. Administrators can also use this method to copy _any story in their organization_.

Outside of the cases mentioned above, ArcGIS Assistant can be helpful in situations when you need to:

* Copy a story to a different organization
* Copy a story while preserving its unpublished changes
* Copy several stories at once
* Copy a story plus other content items at the same time
* Copy a story from one Enterprise portal to another
* Copy a story from an Enterprise portal to an Online organization

### What parts of the story get copied?
Everything stored in the StoryMap item gets copied. This includes all the _text; uploaded images, videos, and audio; express maps; and settings_.

References to _embeds_ and _linked media_ (Vimeo videos, Flickr images, etc) are preserved and point to the same web resources as the original story.

### What if my story includes web maps/scenes?
_Web maps, web scenes, and/or hosted layers_ (including a map tour built from a feature service) are **not** duplicated when you copy a story using the Assistant. The new story will contain _references_ to those ArcGIS content items from the original story. Be sure to consider how these referenced items are shared and how that might affect their visibility in the new story.

If you are copying a story across organizations, you’ll need to plan to copy these content items separately and then edit the story data JSON to update their itemIDs. See below for information about how to succesfully edit story data.

If any maps or scenes contain premium/subscriber content, that content will need to be reauthorized by republishing the story.

### Anything else I should know about copying StoryMaps?
* The copy will be private (not shared), even if the original story was shared.
* The copy will be in the same state as the original story (draft, published, or unpublished changes).
* When copying a story that has unpublished changes, the published version and the unpublished changes will be available in the copy.
* Copying between Enterprise portals should generally work when the portals are the same version or if the destination portal's version is later than the origin's.
* While you may have success coping a story from Enterprise to Online, copying from Online to Enterprise is not likely to work.

### What about copying classic story maps?
The information above about what's copied and how web maps/scenes need to be handled also applies to classic stories. Classic stories do not have a draft/published state to consider.

## Editing story data JSON

**WARNING: Editing a story's JSON can break the story. Only do this if you know what you are doing.**

* For ArcGIS StoryMaps stories, edits to the story JSON should be made to the `draft_xxxxxxxx.json` file and then published using the builder.
* For stories created using one of the classic templates, changes are made directly to the item data JSON.

## Copy a Web Experience

To do...

## Replace URLs in a web map

To do...

## TBD, input requested

To do...
