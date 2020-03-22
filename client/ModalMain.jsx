import React from 'react';
import ModalMainImage from './ModalMainImage';
import ModalSideBar from './ModalSideBar';
import ModalMainUserInfo from './ModalMainUserInfo';
import styles from './styles/ModalMain'

const ModalMain = ({displayModal, pictures, updateMianImage, cyclePreviousImage, cycleNextImage, hide, current }) => {
  // const showClassName = this.props.displayModal ? "modal display_block" : "modal display_none"
  if (displayModal) {
    return (
      <div className={[styles.modal, styles.display_block].join(' ')}>
      <div>
        <button onClick={hide}>X</button>
        <div className={styles.modal_main}>
          <button onClick={cyclePreviousImage} >{"\<=" }</button>
          <button onClick={cycleNextImage} >{"=\>" }</button>
          <ModalMainImage displayModal={displayModal} current={pictures[current].img_url} />
        </div>
        <ModalMainUserInfo currentObject={pictures[current]} />
        <div className={styles.modal_sidebar}>
          <ModalSideBar updateMianImage={updateMianImage} pictures={pictures}/>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className={[styles.modal, styles.display_none].join(' ')}>
      <div>
        <button onClick={hide}>X</button>
        <div className={styles.modal_main}>
          <button onClick={cyclePreviousImage} >{"\<=" }</button>
          <button onClick={cycleNextImage} >{"=\>" }</button>
          <ModalMainImage displayModal={displayModal} current={pictures[current].img_url} />
        </div>
        <ModalMainUserInfo currentObject={pictures[current]} />
        <div className={styles.modal_sidebar}>
          <ModalSideBar updateMianImage={updateMianImage} pictures={pictures} current={current} />
        </div>
      </div>
    </div>
  );
};


export default ModalMain;
