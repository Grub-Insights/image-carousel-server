import React from 'react';
import ImageCarouselEntry from './ImageCarouselEntry.jsx';

class ImageCarouselMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <div className="carousel">
        {this.props.pictures.map((picture) => {
          return <ImageCarouselEntry picture={picture.img_url} />
        })}
      </div>
    );
  }
}

export default ImageCarouselMain;
