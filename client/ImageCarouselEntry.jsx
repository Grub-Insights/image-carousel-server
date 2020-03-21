import React from 'react';

const ImageCarouselEntry = ({ url, showModal, imageIndex}) => (
  <img className="images" onClick={() => {
    console.log('IMAGEIDX IN ENTRY:', imageIndex);
    showModal(imageIndex);
  }} src={url} />
);

export default ImageCarouselEntry;
