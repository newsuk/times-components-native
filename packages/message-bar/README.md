# MessageBar

A context to allow consumers to show a floating message over an article.

## Example Usage
```javascript
const TestConsumer = () => (
  <Context.Consumer>
    {({ showMessage }) => (
      <TouchableOpacity onPress={() => showMessage("foo")} />
    )}
  </Context.Consumer>
);

...

<MessageManager animate delay={3000} scale={scales.medium}>
    <TestConsumer />
</MessageManager>
```
