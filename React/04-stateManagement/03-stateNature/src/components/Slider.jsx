import { useState } from 'react';

function Slider() {
    
    const [index, setIndex] = useState(0);

    const images = [
        "/images/img1.png", 
        "/images/img2.png", 
        "/images/img3.png", 
        "/images/img4.png", 
        "/images/img5.png", 
        "/images/img6.png", 
        "/images/img7.png"
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

    return (
        <div className="slider">
            <img src={images[index]} alt={"images"+index} />
            <div className='btn-group'>
                <button type="button" onClick={prevImg}>Prev</button>
                <button type="button" onClick={nextImg}>Next</button>
            </div>
        </div>
    )
}

export default Slider;