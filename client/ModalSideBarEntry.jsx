import React from 'react';
import styles from './styles/ModalSideBarEntry'

const ModalSideBarEntry = ({picture, index, updateMianImage, current} ) => {
  console.log('typeof current: ', typeof current)
  console.log('typeof index: ', typeof index)
  if (current === index) {
    return <img className={styles.sidebar_image_current} onClick={() => {updateMianImage(index)}} src={picture.img_url} alt={index} />
  }

  return <img className={styles.sidebar_image} onClick={() => {updateMianImage(index)}} src={picture.img_url} alt={index} />
};

export default ModalSideBarEntry;