import React from 'react';

const ImageCarouselArrows = ({ direction, clickHandler, img }) => (
  <span className={direction} onClick={clickHandler}>
    {img}
  </span>
);

export default ImageCarouselArrows;
