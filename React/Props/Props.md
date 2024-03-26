### Summary
- Props are the custom properties that are passed from the parent component to the children component.
- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props you can either use dot notation or you can destructure them in the children component's param itself.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props from one component to another using {...props} syntax.
- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.

- Props are read-only snapshots in time: every render receives a new version of props.
- Props can be either static or dynamic.
- Props are immutable/unchangeable.
- When a component needs to change its props (for example, in response to a user interaction or new data), it will have to ask its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
- You can’t change props. When you need interactivity, you’ll need to set state.