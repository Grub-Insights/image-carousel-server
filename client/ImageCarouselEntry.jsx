import React from 'react';

const ImageCarouselEntry = ({ picture, clickHandler}) =>(
  <img className="images" onClick={clickHandler} src={picture} alt="" />
);

export default ImageCarouselEntry;
