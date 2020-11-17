# Inline Content

This component displays inline images, inline adverts and pull quotes.

Content is firstly parsed in `AritcleSkeleton`'s `body-utils`. Any inline ads, images and pull quotes are prepared by transforming the items including passing the content to inline alongside the item and changing the type to `inline-content`.

When an article is rendered, the `inline-content` items are processed by this component. Images (including captions) and pull quotes are measured to work out their heights. Ads don't reqiure this as they have a fixed height. The content to be inlined alongside an item is also measured, then split (if required) at the height of the item. Any remaining content is then rendered below.
