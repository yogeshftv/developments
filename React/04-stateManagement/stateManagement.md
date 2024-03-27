### Summary
- Component specific memory is called state.
- Use a state variable when a component needs to “remember” some information between renders.
- State variables are declared by calling the useState Hook.
- Hooks are special functions that start with use. They let you “hook into” React features like state.

- Hooks might remind you of imports: they need to be called unconditionally (not inside of if-else statement),  functions, or any loops. 
- Calling Hooks, including useState, is only valid at the top level of a component or another Hook.

- The useState Hook returns an array containing two elements: 
    a. The current state
    b. The function to update the state.
- You can have more than one state variable. Internally, React matches them up by their order.
- State is private to the component. If you render it in two places, each copy gets its own state.

### Working of useState()
1. Initial Renders:
- When a component mounts (renders for the first time), useState() is called.
- If you provide a direct value for example, useState(4), its used as the initial state.
- If you provide a callback function for example, useState(() => return expensiveCalculation()), the function is executed only once to determine the initial state.
- React stores the initial state value internally for this component instance.
- If you have multiple copy of same components then React provides each component instance their own private & independent state.

2. Subsequent Renders:
- On subsequent renders, useState() itself is called again. However, it doesn't re-evaluate the initial value (direct or callback).
- The previously stored state is used for the current render.

3. Updating State:
- The setter function returned by useState() is used to update the state.
- When you call the setter function for example, setCount(newValue), React schedules a re-render for the component.
- During the re-render, React retrieves the updated state value and uses it to generate the new UI.

4. Important Concepts:
- State updates are asynchronous meaning the setter function doesn't immediately change the state value. React schedules a re-render, and the update happens before the next render.
- React might also batch multiple state updates within a single render to optimize performance.
- For complex updates that rely on the previous state value, you can use a function update form for the setter for example, setCount(prevState => prevState + 1).

5. State updates are asynchronous:
- The fact that React schedules updates and they don't happen immediately might seem counterintuitive at first, especially since you see the UI update instantly in most cases. Here's how to reconcile this:

    a. Visually Instantaneous: From a user's perspective, clicking a button and seeing the count update appears to happen instantly. This is because React is very efficient and the re-rendering process is usually very fast.
    b. Scheduled, not Immediate: Behind the scenes, React schedules the update when you call the state setter function (e.g., setCount(count + 1) using the + button). The state value itself isn't immediately modified.

- The Steps Involved (Simplified):

    a. Button Click: You click the + button, triggering an event handler function in your component.
    b. State Update: Inside the event handler, you call the setter function to update the count state (e.g., setCount(count + 1)).
    c. Scheduling Re-render: React schedules a re-render of the component because the state has changed.
    d. State Update (Actual): Before the re-render happens, React updates the state value internally with the new count (e.g., count becomes count + 1).
    e. Re-render with Updated State: React re-renders the component, using the new state value (the increased count) to generate the updated UI.