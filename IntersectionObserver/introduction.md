### Intersection Observer 
- Tells whether an element in the DOM is visible to the end user. If the element is intersecting based on it we can animate the element. 

- Provides a modern and efficient way to monitor element visibility using JavaScript.

- It triggers actions based on an element's position in relation to the viewport or a container.

- It is useful for lazy loading, infinite scrolling, sticky element behaviour, and more.


### How it works?
- You define the logic for monitoring visibility using the `IntersectionObserver` constructor.

- This constructor function takes two arguments: A Callback Function & Options Object.

    - The Callback function is called when an element that you are observing intersects:
        1. Element Enters the Viewport: When the observed element becomes visible for the first time (scrolling down reveals it).
        2. Element Exits the Viewport: When the observed element scrolls out of view completely (scrolling up hides it).
        3. Visibility Changes Within the Viewport: When the percentage of the element visible within the viewport changes (e.g., scrolling reveals more or hides more of the element).

    - This callbackFunction accepts entries as arguments which are an array of IntersectionObserverEntry objects.

    - Each IntersectionObserverEntry object represents the intersection details of an element being observed. It contains information about the element's visibility in relation to the defined root element (viewport or container).  

    - The callbackFunction is triggered anytime the visibility of one of the observed elements changes. It is capable of handling multiple entries (elements).

    - Some important details to know are:  
        
        - boundingClientRect (Actual shape of the expected element).
        - intersectionRatio (Percentage of object visible on screen 1 representing 100%). 
        - intersectionRect (Amount of space that is visible on the screen of the target element)
        - rootBounds (The Bounds of screen)

        - **isIntersecting (boolean value that specifies whether the value is intersecting/visible on screen).
        - **target (The actual element that is intersecting/visible).

    - observe(): Takes target elements has argument and monitors for visibility changes.

    