import React from 'react';
import ModalMainImage from './ModalMainImage';
import ModalSideBar from './ModalSideBar';
import ModalMainUserInfo from './ModalMainUserInfo';
import styles from './styles/ModalMain'

const ModalMain = ({displayModal, pictures, updateMianImage, cyclePreviousImage, cycleNextImage, hide, current }) => {
  // const showClassName = this.props.displayModal ? "modal display_block" : "modal display_none"
  if (displayModal) {
    return (
      <div id="outer most div" className={[styles.modal, styles.display_block].join(' ')}>
        <div id="intermediate div (no class)" >
          <button className={styles.btn_x} onClick={hide}>Close X</button>
          <div id="inner div has ModalMainImage inside" className={styles.modal_main}>
            <ModalMainImage displayModal={displayModal} current={pictures[current].img_url} />
            <button className={styles.btn_left} onClick={cyclePreviousImage} >&#9664;</button>
            <button className={styles.btn_right} onClick={cycleNextImage} >&#9654;</button>
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
          <button onClick={cyclePreviousImage} >{"/<"}</button>
          <button onClick={cycleNextImage} >"{">/"}</button>
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
