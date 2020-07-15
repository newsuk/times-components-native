# Topic

This topic package contains the data provider that fetches the articles for the
article list component to show articles associated with a particular topic. This
is distinct from the concept of a topic page in the pages package which contains
the data provider for the topic itself.

Topic makes use of the article list package which does most of the heavy lifting
in terms of pagination, error handling, layouts and lazy loading. This package
sets out what the article list page header should look like, and manages its own
tracking.

## Future

There is a consideration to move all providers to the provider package. This is
currently under advisement.

A lot of event handling is currently passed down through numerous components. We
intend to utilise the context package (using
[React Context API](https://reactjs.org/docs/context.html)) to manage these
events.
