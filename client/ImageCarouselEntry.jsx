import React from 'react';

const ImageCarouselEntry = ({ picture, showModal}) =>(
  <img className="images" onClick={showModal} src={picture} alt="" />
);

export default ImageCarouselEntry;
