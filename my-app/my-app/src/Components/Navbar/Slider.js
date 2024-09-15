import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Ensure you import the styles for the slider

const AwesomeSliderInstance = () => (
  <AwesomeSlider>
     <div data-src="file1.avif" />
    <div data-src="file2.jpg" />
    <div data-src="image.png" />
    {/* <div src="/images/image4.jpg" /> */}
  </AwesomeSlider>
);

export default AwesomeSliderInstance;

