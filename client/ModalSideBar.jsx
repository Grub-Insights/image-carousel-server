import React from 'react';
import ModalSideBarEntry from './ModalSideBarEntry'
import styles from './styles/ModalSideBar'

const ModalSideBar = ({pictures, updateMianImage, current}) => (
  <div className={styles.sidebar}>
    {pictures.map((picture, index) => {
      return <ModalSideBarEntry updateMianImage={updateMianImage} picture={picture} index={index} current={current} />
    })}
  </div>

);

export default ModalSideBar