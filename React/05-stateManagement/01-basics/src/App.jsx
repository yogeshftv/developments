function App() {

  const images = [
    "/assets/images/img1.png", 
    "/assets/images/img2.png", 
    "/assets/images/img3.png", 
    "/assets/images/img4.png", 
    "/assets/images/img5.png", 
    "/assets/images/img6.png", 
    "/assets/images/img7.png"
  ];
  
  // 3. local variable don't persist between renders, i.e. when React re-renders this component, it does it from the scratch meaning it doesn't consider any changes to the local variables. 
  let index = 0;

  function nextImg() {
    // 1. this function is trying to update the local variable
    index = index + 1;
  }

  function prevImg() {
    // 2. this function is too trying to update the local variable
    index = index - 1;
  }

  // 4. Also changes made to local variables won't trigger re-renders for the component with the new data.

  return (
    <>
      <button type="button" onClick={prevImg}>Prev</button>
      <img src={images[index]} alt={"images"+index} />
      <button type="button" onClick={nextImg}>Next</button>
    </>
  )
}

export default App
