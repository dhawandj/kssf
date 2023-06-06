import React, { useEffect, useState } from 'react';

const ImageSlider = ({ images ,time}) => {
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
    <div className="image-slider cardbox card" style={{backgroundImage:`url(${images[currentImage]})`}} >
      {/* <button id='leftA' onClick={handlePrevious}>&lt;</button> */}
      {/* <img className='slidImg'    src={images[currentImage]} alt={`Image ${currentImage + 1}`} /> */}
      {/* <button id='rightA' onClick={handleNext}>&gt;</button> */}
    </div>
  );
};

  export const images = [
        "src/assets/imgs/award.jpeg",
        "https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1607490703747-0519d2e398a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1512614521719-2806f69d406b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      ];

export default ImageSlider;
