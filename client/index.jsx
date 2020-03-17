/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarouselEntry from './ImageCarouselEntry.jsx'
import ImageCarouselMain from './ImageCarouselMain.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
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
        console.log(this.state.images);
      });
  }

  render() {
    return (
      <div className="carousel"> 
        {this.state.images.map((picture) => {
          return <ImageCarouselEntry picture={picture.img_url} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
