import React from 'react';

const ImageCarouselEntry = ({picture}) => {
  const styles = {
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div classsName="imageCarouselEntry" style={styles}></div>
  );
};

export default ImageCarouselEntry;
