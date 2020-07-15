# Error View

The error view package is a React
[Error Boundary](https://reactjs.org/docs/error-boundaries.html). From the React
documentation itself:

> Error boundaries are React components that catch JavaScript errors anywhere in
> their child component tree, log those errors, and display a fallback UI
> instead of the component tree that crashed. Error boundaries catch errors
> during rendering, in lifecycle methods, and in constructors of the whole tree
> below them.

This package provides an `ErrorView` wrapper component that takes a render prop
as a direct child of the component. This function returns three possible values
which can be used to handle the enclosed child components:

- `error` - the error that was returned
- `hasError` - boolean, did the component error
- `onError` - a function that handles errors and triggers the error view
  components error handling

