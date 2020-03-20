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
      showModal: false,
      images: [],
      modalImage: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  showModal(event) {
    this.setState({
      showModal: true,
      modalImage: JSON.parse(event.target.alt),
    });
    console.log(event.target.alt)
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
    console.log('x button clicked');
  }

  render() {
    return (
      <div>
        <ImageCarouselMain showModal={this.showModal} pictures={this.state.images}/>
        <ModalMain show={this.state.showModal} pictures={this.state.images} current={this.state.modalImage} hide={this.hideModal} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
