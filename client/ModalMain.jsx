import React from 'react';

class ModalMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeHolder: 0,
    };
  }
  
  render() {
    const showClassName = this.props.show ? "modal display-block" : "modal display-none"
    return (
      <div className={showClassName}>
        <div>test</div>
        <div>fake data</div>
        <button onClick={this.props.hide}>X</button>
      </div>
    );
  }
}


export default ModalMain;
