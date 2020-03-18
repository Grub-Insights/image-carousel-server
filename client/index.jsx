/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarouselEntry from './ImageCarouselEntry.jsx'
import ImageCarouselMain from './ImageCarouselMain.jsx';
import ModalMain from './ModalMain.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      clicked: true,
    });
    console.log('clicked');
  }

  render() {
    const hasClicked = this.state.clicked
    let display
    if (!hasClicked) {
      display = <ImageCarouselMain clickHandler={this.clickHandler} />
    } else {
      display = <ModalMain />
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
