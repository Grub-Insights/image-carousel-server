import React from 'react';
import styles from './styles/ModalSideBarEntry'

const ModalSideBarEntry = ({picture, index, updateMianImage, current} ) => {
  // if (current === index) {
  //   return <img className={styles.sidebar_image_current} onClick={() => {updateMianImage(index)}} src={picture.img_url} alt={index} />
  // }

  return (
    <div className={styles.sidebar_image_container}>
      <img className={styles.sidebar_image} onClick={() => {updateMianImage(index)}} src={picture.img_url} alt={index} />
    </div>
  )
};

export default ModalSideBarEntry;