import React from 'react';
import ModalSideBarEntry from './ModalSideBarEntry'

const ModalSideBar = ({pictures, updateMianImage}) => (
  <div className="sidebar">
    {pictures.map((picture, index) => {
      return <ModalSideBarEntry updateMianImage={updateMianImage} picture={picture} index={index} />
    })}
  </div>

);

export default ModalSideBar