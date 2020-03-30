import React from 'react';
import ModalMainImage from './ModalMainImage';
import ModalSideBar from './ModalSideBar';
import ModalMainUserInfo from './ModalMainUserInfo';
import styles from './styles/ModalMain'

const ModalMain = ({restaurantName, displayModal, pictures, updateMianImage, cyclePreviousImage, cycleNextImage, hide, current }) => {
  const rightArrow = <svg className={styles.btn_right} onClick={cycleNextImage} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M18.586 42.008a2.518 2.518 0 0 1-1.614-.588c-1.115-.925-1.296-2.613-.404-3.77L27.098 24l-10.53-13.65c-.892-1.156-.71-2.844.404-3.77 1.116-.924 2.743-.737 3.635.42L32.43 22.325a2.76 2.76 0 0 1 0 3.35L20.606 41.002a2.548 2.548 0 0 1-2.02 1.008z"></path></svg>
  const leftArrow = <svg className={styles.btn_left} onClick={cyclePreviousImage} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M29.414 5.992c.566 0 1.137.192 1.614.588 1.115.925 1.296 2.613.404 3.77L20.902 24l10.53 13.65c.892 1.156.71 2.844-.404 3.77-1.116.924-2.743.737-3.635-.42L15.57 25.675a2.76 2.76 0 0 1 0-3.35L27.394 6.998a2.548 2.548 0 0 1 2.02-1.008z"></path></svg>
  if (displayModal) {
    return (
      <div id="outer most div" className={[styles.modal, styles.display_block].join(' ')}>
        <div id="intermediate div (no class)" >
          <button className={styles.btn_x} onClick={hide}>Close X</button>
          <div id="inner div has ModalMainImage inside" className={styles.modal_main}>
            <ModalMainImage displayModal={displayModal} current={pictures[current].img_url} />
            {leftArrow}
            {rightArrow}
            {/* <button className={styles.btn_left} onClick={cyclePreviousImage} >&#9664;</button> */}
            {/* <button className={styles.btn_right} onClick={cycleNextImage} >&#9654;</button> */}
          </div>
          <ModalMainUserInfo currentObject={pictures[current]} />
          <div className={styles.modal_sidebar}>
            <div className={styles.restaurant_name}> {restaurantName} </div>
            <ModalSideBar updateMianImage={updateMianImage} pictures={pictures} restaurantName={restaurantName} />
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
