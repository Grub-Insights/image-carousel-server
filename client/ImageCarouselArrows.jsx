import React from 'react';
import styles from './styles/ImageCarouselArrows'

const ImageCarouselArrows = ({ direction, clickHandler, img }) => {
  if (direction === 'right') {
    return (
      <span className={styles.right} onClick={clickHandler}>
        {img}
      </span>
    );
  }
  return (
  <span className={styles.left} onClick={clickHandler}>
  {img}
  </span>
  );
  
};

export default ImageCarouselArrows;
