import React from 'react';
import ModalMainImage from './ModalMainImage';
import ModalSideBar from './ModalSideBar';

class ModalMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 0,
    }
  }


  render() {
    const showClassName = this.props.displayModal ? "modal display-block" : "modal display-none"
    return (
      <div className={showClassName}>
        <div>
          <button onClick={this.props.hide}>X</button>
          <div className="modal-main">
            <button onClick={this.props.cyclePreviousImage} >{"\<=" }</button>
            <button onClick={this.props.cycleNextImage} >{"=\>" }</button>
            <ModalMainImage displayModal ={this.props.displayModal} current={this.props.pictures[this.props.current].img_url} />
          </div>
          <div className="modal-sidebar" >
            <ModalSideBar pictures={this.props.pictures}/>
          </div>
        </div>
      </div>
    );
  }
}


export default ModalMain;
