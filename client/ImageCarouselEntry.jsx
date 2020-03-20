import React from 'react';

const ImageCarouselEntry = ({ picture, showModal, reference}) =>(
  <img className="images" onClick={showModal} src={picture} alt={JSON.stringify(reference)} />
);

export default ImageCarouselEntry;
