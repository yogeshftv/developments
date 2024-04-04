### createRoot()
- This method behind the scene creates DOM like structure similar to the Browser.
- It then compares the browser's DOM with its own DOM and only updates the changes that has been updated in the user interface.
- But the browser removes the entire DOM and repaints it again which is known as page reload.
- But in virtual DOM the changes are tracked and only those values are updated which are manipulated or updated instead of repainting the entire DOM.

- React uses React Fiber Algorithm to update the virtual DOM efficiently.

- In earlier versions of React, updates were synchronous and immediate. This meant that whenever there was a change in state or props, React would completely re-render the entire virtual DOM and then apply the necessary changes to the actual DOM. While this approach worked, it had limitations:
    - For large UIs with many components, this full reconciliation could be slow and lead to performance issues.
    - If multiple updates came in quickly (e.g., from multiple network requests), they would all trigger immediate re-renders, potentially causing unnecessary work and jankiness.

- key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates.
- Pausable, Abortable, and Reusable Work: If a new update arrives while React is still working on the previous one, Fiber can pause the ongoing work, prioritize the newer update, and potentially reuse some of the already completed work (if applicable) for the newer update. This prevents unnecessary re-renders and optimizes performance.
- Prioritization: Fiber allows you to assign priorities to different types of updates. For example, critical UI updates can be prioritized over less urgent background tasks. This ensures that the most important changes are reflected on the screen first.

- Reconciliation: It is an React algorithm that reconsiders what needs to be updated. The algorithm React uses to differentiate one tree (Virtual DOM) with another (Browser DOM) to determine which parts need to be changed.

- Reference Documents: https://github.com/acdlite/react-fiber-architecture



- 