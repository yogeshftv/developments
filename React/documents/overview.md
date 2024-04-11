### A Brief Introduction to React
React is a JavaScript library, not a framework, that simplifies the creation of User Interfaces (UIs) for web applications. It's all about building applications using components. These components are like building blocks, self-contained sections of code (often written in JSX) that you can reuse. Essentially, components are just regular JavaScript functions.

In simple terms, think of React components as Lego blocks. Each block represents a reusable section of JavaScript and HTML code, allowing you to construct complex structures effortlessly.

React utilizes JSX, a JavaScript XML syntax extension, which allows developers to write HTML directly into JavaScript.

One of React's standout features is its use of a Virtual DOM, a lightweight version of the real DOM of a webpage. By employing the Virtual DOM, React efficiently tracks changes made to the UI and updates only the necessary parts of the real DOM without needing to refresh the entire webpage. This approach minimizes rendering performance overhead, resulting in smoother user experiences.

### Setup React Project
Quickly sets up a new project using the Vite development server : `npm create vite@latest`

### What is Vite
Vite is a modern development server with built-in bundling capabilities, often seen as a replacement for create-react-app. It excels in providing a fast and efficient development experience, making it a popular choice for modern React projects.

Vite prioritizes a fast development experience with minimal configuration. It leverages on tools like Rollup for production builds but with a simpler default configuration. This can lead to slightly larger bundle sizes compared to a fully optimized CRA build.

You can customize the bundling process in Vite using plugins or a more advanced configuration, potentially achieving similar optimization levels as CRA. However, this requires more manual setup.

- Install Vite globally : `npm install -g vite`
- Project Creation : `npm create vite@latest project-name`
- To run Dev Server : `npm run dev`

### React Folder Structure
A well-organized React project typically follows a specific folder structure to promote code readability, maintainability, and collaboration. Below is a breakdown of a common React folder structure:

- node_modules : It contains external libraries & packages that our project relies on.
- public : It holds static assets like images, videos, fonts, icons, favicons & etc. The assets placed inside of the public folder are not bundled (processed by React) when the final output (build file) for the project is generated. All the static assets are directly accessible via the URL.
- src : This is the root directory for your React application code. All your source code goes here.
- src/assets : This folder can too contain static assets like images, videos & etc (but it not considered common practice). This folder is very similar to public folder but the files in the assets folder are bundled during the final output (build), this means they are not available via URL and in order to use them you need to first import them.
- src/styles : This folder houses all the CSS stylesheet files.
- src/Components : This folder serves as the home for all the reusable React components.
- main.js/index.js : This file acts as an entry point for your application.
<<<<<<< HEAD


































siddhant@ftv.ind.in
=======
>>>>>>> aea6cc819ff61fd3a2a581a1233492819d31af6c
