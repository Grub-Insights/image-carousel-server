import React from 'react';

const ModalSideBarEntry = ({picture, index, updateMianImage} ) =>(
  <img className="sidebar-image" onClick={() => {updateMianImage(index)}} src={picture.img_url} alt={index} />
);

export default ModalSideBarEntry;