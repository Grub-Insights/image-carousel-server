import React from 'react';
import styles from './styles/ImageCarouselEntry'

const ImageCarouselEntry = ({ url, showModal, imageIndex}) => (
  <img className={styles.images} onClick={() => {showModal(imageIndex);}} src={url} alt="" />
);

export default ImageCarouselEntry;
