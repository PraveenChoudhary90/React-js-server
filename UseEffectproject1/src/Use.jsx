import React, { useState } from 'react';
import img from "./assets/pic1.jpeg";
import img1 from "./assets/pic2.jpeg";
import img2 from "./assets/pic3.jpeg";
import img3 from "./assets/pic4.jpg";

const ImageSelector = () => {
  const [pic, setPic] = useState(''); // State to hold the background color
  const [showButton, setShowButton] = useState(false); // State to control button visibility

  const Datapic = () => {
    setPic('red'); // Change this to the desired color or value
    setShowButton(true); // Show the button when an image is clicked
  };

  const Datapic1 = () => {
    setPic('blue');
    setShowButton(true);
  };

  const Datapic2 = () => {
    setPic('green');
    setShowButton(true);
  };

  const Datapic3 = () => {
    setPic('yellow');
    setShowButton(true);
  };

  return (
    <div>
      <div style={{ width: "400px", height: "400px", backgroundColor: pic }}></div>
      
      <img onClick={Datapic} src={img} alt={img} style={{ cursor: 'pointer' }} />
      <img onClick={Datapic1} src={img1} alt={img1} style={{ cursor: 'pointer' }} />
      <img onClick={Datapic2} src={img2} alt={img2} style={{ cursor: 'pointer' }} />
      <img onClick={Datapic3} src={img3} alt={img3} style={{ cursor: 'pointer' }} />

      {showButton && <button onClick={() => alert('Button Clicked!')}>Show Button</button>}
    </div>
  );
};

export default ImageSelector;