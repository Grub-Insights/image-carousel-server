/* eslint-disable no-console */
import React from 'react';
import ImageCarouselEntry from './ImageCarouselEntry.jsx';
import ImageCarouselArrows from './ImageCarouselArrows.jsx';


class ImageCarouselMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      indexMax: 0,
    };

    this.previousImages = this.previousImages.bind(this);
    this.nextImages = this.nextImages.bind(this);
    this.focusDiv = React.createRef();
  }

  componentDidMount() {
    fetch('/api/carousel/20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          images: Array.from(data),
          indexMax: Array.from(data).length
        });
        console.log(this.state.images);
      });
  }

  previousImages() {
    console.log(this.focusDiv.current)
    this.focusDiv.current.scrollLeft -= 200;
  }

  nextImages() {
    console.log(this.focusDiv.current)
    // this.focusDiv.current.scrollLeft += 20;
    this.focusDiv.current.scroll({
      right: 300,
      behavior: 'smooth',
    });
  }


  render() {
    return (
      <div ref={this.focusDiv} className="carousel">
        <ImageCarouselArrows clickHandler={this.previousImages} direction="left" img="&#9664;" />
        {this.state.images.map((picture) => {
          return <ImageCarouselEntry clickHandler={this.props.clickHandler} picture={picture.img_url} />;
        })}
        <ImageCarouselArrows clickHandler={this.nextImages} direction="right" img="&#9654;" />
      </div>
    );
  }
}

export default ImageCarouselMain;
