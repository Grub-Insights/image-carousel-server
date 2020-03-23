/* eslint-disable no-console */
import React from 'react';
import ImageCarouselEntry from './ImageCarouselEntry';
import ImageCarouselArrows from './ImageCarouselArrows';
import styles from './styles/CarouselMain'


class ImageCarouselMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.previousImages = this.previousImages.bind(this);
    this.nextImages = this.nextImages.bind(this);
  }


  previousImages() {
    window.scrollBy(-1600, 0);
  };

  nextImages() {
    window.scrollBy(1600, 0);
  };


  render() {
    return (
      <div className={styles.carousel}>
        <ImageCarouselArrows clickHandler={this.previousImages} direction="left" img="&#9664;" />
        {this.props.pictures.map((picture, index) => {
          return <ImageCarouselEntry showModal={this.props.showModal} key={index} imageIndex={index} url={picture.img_url} />;
        })}
        <ImageCarouselArrows clickHandler={this.nextImages} direction="right" img="&#9654;" />
      </div>
    );
  }
}

export default ImageCarouselMain;
