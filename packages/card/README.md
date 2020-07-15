# Card

The card component fades in and lays out content that typically consists of an
image and a collection of textual elements (although this content could be
anything). Card manages the layout of these elements, whilst providing a
consistent loading state for all of the content it is passed. Consumers of card
can also reorder the image and content by reversing the layout order,
effectively swapping over the image and text.

Rendering an image with the card component is optional. A `uri` can be given
with optional `lowResSize` and `highResSize` attributes which may be used to
provide a better experience under certain conditions determined by the `Image`
component.

