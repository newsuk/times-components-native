# Pagination

The pagination package provides a pagination user interface (UI) and pagination
state Higher Order Component (HOC). These two exports are both required for
pagination to work. This package is currently only used by article list pages
(author profile and topics) for the web.

## UI

The `<Pagination />` component provides a pagination UI for web. The user can
see what page they are on, and can navigate to other pages with the next and
previous buttons. This UI component ships with its own tracking handling.

## State management with a HOC

`withPageState` is a HOC pagination helper that manages the state of the
pagination. It maintains what page the user is currently on. Typically this is
passed a component that consumes the `Pagination` component itself.

### Usage

```
withPageState(authorProfileTrackingContext(AuthorProfile));
```

