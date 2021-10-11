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

# Copy a StoryMap
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

### Can I copy a story from one organization to another?
Yes, but you must:
1. Be either the _owner_ of the story or an _administrator_ in the organization where the story currently resides, and
1. Have an account in the organization to which you want to copy the story.

Be sure to initiate the copy using the owner/admin account. If you don't, the duplicate story will not be editable.

### Can I create a copy of someone else's story?
Yes, but if you are not an administrator in the organization where the original story resides, you won't be able to edit the copy. In general, making unauthorized copies of other people's stories is discouraged.

### Can I copy stories between Online and Enterprise?
While you may have success coping a story from Enterprise to Online, copying from Online to Enterprise is not likely to work.

### Can I copy stories between Enterprise portals?
Copying between Enterprise portals should generally work when the portals are the same version or if the destination's version is later than the origin's.

### Anything else I should know about copying StoryMaps?
- The duplicate story will be private (not shared), even if the original story was shared.
- The duplicate story will be in the same state as the original story (draft, published, or unpublished changes).
- When copying a story that has unpublished changes, the published version and the unpublished changes will be available in the duplicate story.
- When copying a story between accounts (even accounts in the same organization), be sure to initiate the copy from the account that owns the story (or is an admin in the organization). If you try to copy a story owned by another account, the duplicate story will not be editable.
- If any maps or scenes contain premium/subscriber content, that content may need to be reauthorized by republishing the story.
- Most of the information in this section about copying stories also applies to collections and themes.

### What about copying classic story maps?
Classic stories do not have a draft/published state to consider, and they don't have express maps. Otherwise, most of the information above about what's copied vs. referenced, and how web maps/scenes need to be handled, also applies to classic stories.

# Editing StoryMap data
ArcGIS Assistant can be a helpful tool for making changes to StoryMaps outside the story builder. However, StoryMaps are a complex item type, and making changes using Assistant can produce unexpected results. The information below will help you decide when Assistant is the right tool for your needs and what precautions you can take to help avoid issues. If you have questions, you can post them to the [ArcGIS StoryMaps community site](https://community.esri.com/t5/arcgis-storymaps/ct-p/arcgis-storymaps).

⚠️ _WARNING: Editing a story's data file can irreparably break your story. Only do this if you know what you are doing._

### Before you begin...
It's always a good idea to take the following precautions before editing story data:
- **Test your desired changes** on a copy of the original story to make sure A) you don't break your original story and B) you know what you're doing. Testing is also a good way to determine if the changes you are planning will give you the results you expect. The best way to duplicate a story for your own use is from the `...` menu in the story builder.
- **Create a backup** of the story JSON. Just copy the entire contents of the draft JSON file to a separate text file so you can retrieve them if anything goes wrong. If you break your story, you can use the original contents of the JSON file to restore your story.

Follow the instructions below, depending on the type of story you are editing.

### ArcGIS StoryMaps stories
Edits to the story data should be made to the `draft_xxxxxxxx.json` resource.
- After you've edited the draft JSON file, open the story in the story builder to review the changes.
- Once you verify the results, publish the changes using the story builder so they can be seen in the published story.


### Classic Esri Story Maps templates
⚠️ _WARNING: As of September 2021, the classic templates are in Extended Support ([more info](https://www.esri.com/arcgis-blog/products/arcgis-storymaps/announcements/transition-timeline-for-classic-story-maps-august-2021/)). ArcGIS StoryMaps should be used for all new projects. The information below is provided for use with any existing classic stories you might have a need to edit._

For information on editing story data for classic stories, see [this article on the classic Story Maps Developers' Corner](https://medium.com/story-maps-developers-corner/editing-the-configuration-of-a-story-map-7b984560b7c2).

# Share your workflows!
Click "Edit this page" below to add to this guide page.
