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
      placeHolder: 0,
    };
  }

  render() {
    return (
      <ImageCarouselMain />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
