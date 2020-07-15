# Image

The image package maintains two distinct but related components called image and
modalImage. A loading Times placeholder is displayed until the relevant image
has been loaded. If the image never loads (i.e. it errors), the placeholder will
still be visible.

For native a modal can be displayed, which ships with a close button, some
gesture handling, and it also handles given `caption` / `credits` props by
wrapping the image in the caption package component.

The native image manages any malformed `uri` props by adding missing protocols
and managing the width of the image (according to the device width) in the final
query string.

## Android only

Supports offline image support for android only. Creates two image views on top of each other, one for the offline low-res image and another one for the network request with a higher res image.

## Issues

On Android, SVGs rendered using ART from React Native are disappearing after the
app is moved into the background, and then refocused. This is a known RN issue
which we intend to address shortly, perhaps by moving away from ART. Track the
issue on [JIRA](https://nidigitalsolutions.jira.com/browse/REPLAT-3385).
