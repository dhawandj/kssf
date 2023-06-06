import React, { useEffect, useState } from 'react';

const ProtrateSlider = ({ images ,time}) => {
  const [currentImage, setCurrentImage] = useState(0);


        useEffect(()=>{
              const imgId =   setInterval(()=>{
                        setCurrentImage((prevImg)=> prevImg === images.length - 1 ? 0:prevImg+1);
                },time)//for time intrval

                return  ()=>{
                    clearInterval(imgId);     
                }
                
               
                
        },[])

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const handlePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="protrate-slider image-slider1" style={{backgroundImage:`url(${images[currentImage]})`}} >
      {/* <button id='leftA' onClick={handlePrevious}>&lt;</button> */}
      {/* <img className='slidImg'    src={images[currentImage]} alt={`Image ${currentImage + 1}`} /> */}
      {/* <button id='rightA' onClick={handleNext}>&gt;</button> */}
    </div>
  );
};


export default ProtrateSlider;
