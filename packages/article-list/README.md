# Article List

This represents a paginated list of articles. These articles typically appear on
a page, associated to a particular author or topic. An article list is composed
of many other packages such as card, article summary and link. These components
are primarily used for the layout of the individual article items themselves.

## Infinite Scrolling

Whilst the web flavour of article list utilises the pagination package, the
native version contains its own brand of pagination in the form of infinite
scrolling. This utilises the react-native `FlatList` and the GraphQL `fetchMore`
method to show more articles when a user has scrolled to the bottom of the
article list.

## Error Handling

The error view package utilises the React `componentDidCatch` lifecycle event to
create an
[`ErrorBoundary`](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
which handles errors within the article list. This ensures any failing articles
do not show in the list, but the list will still show with the page count
unchanged.

## Lazy Loading

The `lazy-load` package is used to lazy load images to improve the feeling of a
fast page load. Low resolution images are first rendered and then high
resolution images are progressively layered on. On browsers that support
`IntersectionObserver` the higher resolution images will only be pulled in as
they come into the viewport saving bandwidth and mobile resources.


## Future

Inifinite scroll pagination is baked into this package for the native
experience. We are planning to fish this out into the pagination package in the
future.

A package like
[`react-virtualized`](https://github.com/bvaughn/react-virtualized) could be
utilised in the future for infinite scroll on mobweb.
