import React from 'react';

const ModalMainImage = ({current, displayModal}) => {
  const picture = displayModal ? `${current}` : 'example';
  return <img className="modal-image" src={picture} alt={current} />;
};

export default ModalMainImage;
