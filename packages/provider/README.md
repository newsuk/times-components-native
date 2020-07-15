# Provider

The provider package manages the connections to [GraphQL](https://graphql.org/)
(GQL). At a fundamental level, the package simply exports providers that take
GQL queries (from the provider queries package), and use
[React Apollo](https://github.com/apollographql/react-apollo) to fetch data from
the GQL server. These providers can be configured to take a `debounceTimeMs`
prop which adds debounce functionality to the provider calls to ensure better
performance and user experience.

This package is where we intend to add all future functionalities and features
that fix any issues, or fill any gaps, we find in the React Apollo API.

## Future

We currently use an older version of the React Apollo API. We are planning on
updating our usage of this package to use the newer
[`Query` component](https://www.apollographql.com/docs/react/essentials/queries.html#basic).
[See this issue](https://github.com/newsuk/times-components/issues/1225).
