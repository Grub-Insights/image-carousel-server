import React from 'react';

const ImageCarouselEntry = ({picture}) => {
  const styles = {
    backgroundImage: `url(${picture})`,
    backgroundPosition: 'center',
    bakgroundSize: '300px 300px',
  };

  return (
    <img className="images" src={picture} alt="" />
  );
};

export default ImageCarouselEntry;
