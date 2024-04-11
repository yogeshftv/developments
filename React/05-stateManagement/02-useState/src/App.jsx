import { useState } from 'react';

function App() {

  // Here index is the state variable
  // & setIndex is the setter function
  const [index, setIndex] = useState(0);

  // You can also have as many state variables of as many types as you like in one component
  const [showMore, setShowMore] = useState(false);

  const images = [
    "/assets/images/img1.png", 
    "/assets/images/img2.png", 
    "/assets/images/img3.png", 
    "/assets/images/img4.png", 
    "/assets/images/img5.png", 
    "/assets/images/img6.png", 
    "/assets/images/img7.png"
  ];
  
  function nextImg() {
    setIndex((prevState) => {
      if (prevState < images.length - 1) {
        return prevState + 1;
      } else {
        return images.length - 1;
      }
    })
  }

  function prevImg() {
    setIndex((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    })
  }

  function handleShowMore() {
    setShowMore((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className='app'>  
      <img src={images[index]} alt={"images"+index} />
      <div className='btn-group'>
        <button type="button" onClick={prevImg}>Prev</button>
        <button type="button" onClick={nextImg}>Next</button>
      </div>
      <p>{ showMore && "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis iusto molestias necessitatibus. Doloremque voluptatibus qui molestiae aliquam minus dolores! Ipsum dicta impedit nemo aspernatur porro, possimus velit dolores perferendis ducimus est quidem in iure aliquam inventore a similique. Soluta deserunt, ratione suscipit possimus harum rem ducimus provident! Quas veniam fugiat iure velit id laborum doloremque dolor sed est modi! Fugiat ullam praesentium aspernatur inventore omnis debitis quaerat dolorem quidem, sit nostrum, amet aut voluptatum ratione distinctio fuga repudiandae sint alias repellat. Quasi aspernatur nihil cum sapiente praesentium rerum. Eum, temporibus animi, consectetur fuga illum repudiandae nihil, pariatur voluptatum sit atque mollitia iure quidem! Delectus, illo voluptas totam praesentium, ratione libero eligendi modi accusamus perferendis quidem repudiandae numquam." }</p>
      <button onClick={handleShowMore}>{ (showMore)?"Hide ":"Show " }details</button>
    </div>
  )
}

export default App

/*

1. To update a component with new data, two things need to happen:
  a. Retain the data between the renders.
  b. Trigger React to re-render the component with new data.

2. The useState Hook provides those two things:
  a. A state variable to retain the data between renders.
  b. A state setter function to update the variable and trigger React to re-render the component again.

3. When you call useState(), you are telling React that you want this component to remember something. In the above scenario you are telling it to remember index. 
    a. The only argument to useState() is the initial value of your state variable. In the above example, the index's initial value is set to 0.
    b. Every time your component renders, useState gives you an array containing two values:
       - The state variable (index) with the value you stored.
       - The state setter function (setIndex) which can update the state variable and trigger React to render the component again.

4. Its good idea to have multiple state variables if their state is unrelated like index and showMore. But if you find that you often change two state variables together, it might be easier to combine them into one. For example, if you have a form with many fields, it’s more convenient to have a single state variable that holds an object than state variable per field     
       
*/