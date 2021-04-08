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

## Copy a StoryMap

It’s easy to copy a StoryMap with ArcGIS Assistant, but there are a few things to be aware of so you get the result you are expecting.

### When should I use Assistant to copy a StoryMap?
The best and easiest way to copy of a single story for your own use is to use the duplicate option in the ArcGIS StoryMaps builder. Administrators can copy any story in the organization using this duplicate tool, and non-admins can also copy any story owned by someone else if you have edit permissions through a shared update group.

Beyond the cases mentioned above, ArcGIS Assistant can be helpful in situations where you need to:

* Copy/transfer a story to a different organization
* Copy a story while preserving its unpublished changes [VERIFY THIS]
* Copy a large number of stories at once
* Copy a story plus other content items at the same time

### What parts of the story get copied?
Everything that’s stored in the StoryMap item gets copied to the new StoryMap item.

Copying a story with Assistant creates a new StoryMap item that contains all the text and uploaded images, videos, and audio in the original story. Express maps are also copied directly with the story.

References to embeds or linked media (e.g., a Vimeo video, a Flickr image) in the new story point to the same web resources as the original story.

### What if my story has web maps/scenes?
If the story includes web maps, web scenes, or hosted layers these content items are not duplicated with the story. The new story contains references to these ArcGIS content items. Be sure to consider whether the items are public or private and how that might affect their visibility in the new story.

If you are copying a story across organizations, you’ll need to plan to copy these content items separated and then edit the story JSON to update their itemIDs.

If any maps and scenes contain premium/subscriber content, that content will need to be reauthorized when the duplicated story is published. [VERIFY THIS]

### Anything else I should know?
A new story will be published, but not shared.

When copying a story that has unpublished changes, the unpublished changes will also be available in the copied story. [VERIFY THIS]

## Copy a classic Story Map

To do...

## Copy a Web Experience

To do...

## Replace URLs in a web map

To do...

## TBD, input requested

To do...
