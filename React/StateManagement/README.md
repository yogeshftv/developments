# State Management
- State management is a crucial aspect of React applications,
- A React applications have two main aspects: The presentation layer, managed by JSX (a syntax extension for JavaScript that looks like HTML), which determines how your UI is formatted and structured & the data layer, managed by state, which represents the dynamic information in your application.
- State management is fundamental to React because `A React App only re-renders when State or Props change`. This is a key principle of React's efficiency.
- For example, when you add an item to a cart or remove an item from the cart, you're changing the state. This state change triggers React to re-render the necessary components, updating the UI to reflect the new state.
- In React, we don't manually manipulate the DOM to update values on the web page. Instead, we use a concept called "state" to manage changing data within a component.

# State
- State is a JavaScript object that holds data that can change over time in React application. 
- It's essentially a way to store and manage data within a component. 
- It represents the current condition or status of a component.
- It is a mutable data that affects a component's rendering and behavior.
- Each component can have its own state & are typically defined using useState() hook in functional component.
- When state changes, it causes the component to re-render, updating the UI to reflect the new data.
- Unlike props, which are passed down from parent components and are read-only, state is managed within the component and can be changed by the component itself.
- React provides the `useState` hook to create and manage state in functional components.

**Some of the examples of state are** 
    a. Form inputs:
        - Text in an input field
        - Selected option in a dropdown
        - Checked status of checkboxes or radio buttons
    
    b. User authentication status:
        - Whether a user is logged in or not

    c. Shopping cart:
        - Items in the cart
        - Total price

    d. UI state:
        - Whether a modal is open or closed
        - Current tab in a tabbed interface
        - Expanded/collapsed state of an accordion

    e. Data fetching:
        - Loading status
        - Fetched data
        - Error state

    f. Pagination:
        - Current page number
        - Items per page

    g. Theme or appearance:
        - Dark mode vs. light mode

    h. Current page in a multi-page application, 


# State vs Props
*1. Props:*
   - Are inputs to React component that are passed from parent to child components, similar to function parameters.
   - Are read-only and should not be modified by the component receiving them.
   - Determine how a component should render or behave based on the data received from its parent.
   - Used to pass data and callbacks to child components.

*2. State:*
   - A JavaScript object that holds data that may change over time within a component. 
   - Is managed & controlled by a component itself.
   - Is mutable & can be updated by the component itself using the setter function provided by useState.
   - When state changes, it triggers a re-render of the component.
   - Used to handle dynamic data within a component.