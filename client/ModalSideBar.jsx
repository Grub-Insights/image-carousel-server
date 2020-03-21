import React from 'react';
import ModalSideBarEntry from './ModalSideBarEntry'

const ModalSideBar = ({pictures}) => (
  <div className="sidebar">
    {pictures.map((picture) => {
      return <ModalSideBarEntry picture={picture} />
    })}
  </div>

);

export default ModalSideBar