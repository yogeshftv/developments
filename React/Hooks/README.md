### useState Hook
- In React you do not need to manually grap some HTML element to change or update the values in the web page.
- For example, You have an heading element like <h1>Hello World</h1> & you want to change the its value, normally with JavaScript you are going to grap the element using DOM traversal methods i.e. `document.querySelector("h1").textContent = "Some New Value";`, now although this works but when your application get complex it becomes quite difficult to manage and implement it.
- React created the idea of changing the state of the application and as you change the state of the application, the web page itself will get re-rendered automatically to show new values.
