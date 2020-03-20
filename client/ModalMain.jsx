import React from 'react';
import ModalMainImage from './ModalMainImage';
import ModalSideBar from './ModalSideBar';

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
        <div>
          <button onClick={this.props.hide}>X</button>
          <div className="modal-main">
            <ModalMainImage show ={this.props.show} current={this.props.current.img_url} />
          </div>
          <div className="modal-sidebar" >
            <ModalSideBar pictures={this.props.images}/>
          </div>
        </div>
      </div>
    );
  }
}


export default ModalMain;
