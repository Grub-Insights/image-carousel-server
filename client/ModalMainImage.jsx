import React from 'react'

const ModalMainImage = ({current, show}) => {
  const picture = show ? `${current}` : 'example'
  return <img className="modal-image" src={picture} alt={current} />
};

export default ModalMainImage