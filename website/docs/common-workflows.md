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

ArcGIS Assistant can be a helpful tool for copying StoryMaps. However, StoryMaps are a complex item type, so there are cases where Assistant may produce unexpected results. The information below will help you decide when Assistant is the right tool for your copying needs. If you have questions, you can post them to the [ArcGIS StoryMaps community site](https://community.esri.com/t5/arcgis-storymaps/ct-p/arcgis-storymaps).

### When should I use Assistant to copy a StoryMap?

The best and easiest way to create a copy of one of your stories is to use the [**duplicate** option](https://doc.arcgis.com/en/arcgis-storymaps/get-started/faq.htm#anchor13) in the ArcGIS StoryMaps builder. Administrators can also use this method to copy _any story in their organization_.

Outside of the cases mentioned above, ArcGIS Assistant can be helpful in situations when you need to:

- Copy a story to a different organization
- Copy a story while preserving its unpublished changes
- Copy several stories at once
- Copy a story plus other content items at the same time
- Copy a story from one Enterprise portal to another
- Copy a story from an Enterprise portal to an Online organization

### Which parts of the original story get _copied_ to the new story?

Everything stored in the StoryMap item gets copied. This includes the _story text; uploaded images, videos, and audio; express maps; and settings_.

### Which parts of the original story get _referenced_ in the new story?

_Embeds_ and _linked media_ (Vimeo videos, Flickr images, etc) are always stored as references. These links are transferred to the new story and point to the same web resources as the original story.

_Web maps, web scenes, and/or hosted layers_ (including a map tour built from a feature layer) are always stored as references (via their itemIDs). These content items are also referenced in the new story. Be sure to consider how these referenced items are shared and how that might affect their visibility in the new story. If you are copying a story across organizations or portals, you’ll need to plan to copy these content items separately and then edit the story data JSON to update their itemIDs. See below for information about how to successfully edit story data.

### Anything else I should know about copying StoryMaps?

- The new story will be private (not shared), even if the original story was shared.
- The new story will be in the same state as the original story (draft, published, or unpublished changes).
- When copying a story that has unpublished changes, the published version and the unpublished changes will be available in the new story.
- When copying a story between accounts, be sure to initiate the copy from the account that owns the story. If you try to copy a story owned by another account, the duplicate story will not be editable.
- If any maps or scenes contain premium/subscriber content, that content may need to be reauthorized by republishing the story.
- While you may have success coping a story from Enterprise to Online, copying from Online to Enterprise is not likely to work.
- Copying between Enterprise portals should generally work when the portals are the same version or if the destination's version is later than the origin's.
- Most of the information on this page about copying stories also applies to collections and themes.

### What about copying classic story maps?

Classic stories do not have a draft/published state to consider, and they don't have express maps. Otherwise, most of the information above about what's copied vs. referenced, and how web maps/scenes need to be handled, also applies to classic stories.

## Editing story data JSON

**WARNING: Editing a story's JSON can break the story. Only do this if you know what you are doing.**

- For ArcGIS StoryMaps stories, edits to the story JSON should typically be made to the `draft_xxxxxxxx.json` resource and then published using the builder.
- For stories created using one of the classic templates, changes are made directly to the item data JSON.

# Share your workflows!

Click "Edit this page" below to add to this guide page.
