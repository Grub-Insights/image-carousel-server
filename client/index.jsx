/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarouselEntry from './ImageCarouselEntry.jsx'
import ImageCarouselMain from './ImageCarouselMain.jsx';
import ModalMain from './ModalMain.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      images: [],
      imageIndex: 0,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.cycleNextImage = this.cycleNextImage.bind(this);
    this.cyclePreviousImage = this.cyclePreviousImage.bind(this);
  }

  componentDidMount() {
    fetch('/api/carousel/20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          images: Array.from(data),
        });
        console.log(Array.from(data));
      });
  }

  showModal(imageIndex) {
    this.setState({
      displayModal: true,
      imageIndex: imageIndex,
    });
    console.log("showModal in index.jsx! with imageIndex: ", imageIndex)
  }

  hideModal() {
    this.setState({
      displayModal: false,
    });
    console.log('x button clicked');
  }

  cycleNextImage() {
    const max = this.state.images.length - 1;
    if (this.state.imageIndex === max) {
      this.setState({
        imageIndex: max,
      });
    } else {
      const imageIndex = this.state.imageIndex + 1;
      this.setState({
        imageIndex: imageIndex,
      });
    }
  }

  cyclePreviousImage() {
    if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: 0,
      });
    } else {
      const imageIndex = this.state.imageIndex - 1;
      this.setState({
        imageIndex: imageIndex,
      });
    }
  }



  render() {
    const { images, imageIndex, displayModal } = this.state;
    return (
      <div>
        <ImageCarouselMain showModal={this.showModal} pictures={images} imageIndex={imageIndex} />
        { images[imageIndex] && <ModalMain cyclePreviousImage={this.cyclePreviousImage} cycleNextImage={this.cycleNextImage} displayModal={displayModal} pictures={images} hide={this.hideModal} current={imageIndex} /> }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
