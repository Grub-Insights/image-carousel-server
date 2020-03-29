import React from 'react';
import styles from './styles/ImageCarouselArrows'

const ImageCarouselArrows = ({ direction, clickHandler, img }) => {
  if (direction === 'right') {
    return (
      <svg className={styles.right} onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
      // // <span className={styles.right} onClick={clickHandler}>
      //   {img}
      // </span>
    );
  }
  return (
    <svg className={styles.left} onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
  // <span className={styles.left} onClick={clickHandler}>
  // {img}
  // </span>
  );
  
};

export default ImageCarouselArrows;
