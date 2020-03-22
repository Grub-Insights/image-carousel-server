import React from 'react';
import styles from './styles/ModalMainImage'

const ModalMainImage = ({current, displayModal}) => {
  const picture = displayModal ? `${current}` : 'example';
  return <img className={styles.modal_image} src={picture} alt={current} />;
};

export default ModalMainImage;
