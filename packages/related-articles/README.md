# Related Articles

Related articles sit at the bottom of the article, providing similar articles
for a user to navigate to should they be interested. The related articles
component uses three templates which are configured within the
[slice layout package](https://github.com/newsuk/times-components/tree/master/packages/slice-layout):

- `StandardSlice`
- `LeadAndTwoSlice`
- `OpinionAndTwoSlice`

## Standard template

This is the simplest template called `StandardSlice`, whereby all of the
returned related articles (`items`) are of equal importance, and come
pre-ordered (or sorted) from the API.

## Lead and Opinion templates

The `LeadAndTwoSlice` and `OpinionAndTwoSlice` templates each have a "main"
article, and two "supporting" articles (`support1` and `support2`). This package
takes the "main" (either `lead` or `opinion`, depending on the template)
article, and passes that as part of a render prop to the slice layout package. A
separate render prop handles the "supporting" articles (as an array). Each
article is iterated over and rendered as appropriate.
