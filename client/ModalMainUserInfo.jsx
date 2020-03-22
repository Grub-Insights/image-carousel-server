import React from 'react';
import styles from './styles/ModalMainUserInfo'

const ModalMainUserInfo = ({currentObject}) => {
  const {date_of, 
        descript, 
        elite_flag, 
        friend_count, 
        helpful_count, 
        name_user,
        profile_img,
        review_count,
        } = currentObject;

  return (
    <div className={styles.user_info}>
      <div className={styles.user_info_description}> {descript} </div>
      <div>
        <img className={styles.user_info_profile_picture} src={profile_img} alt="" />
        Friend Count= {friend_count} 
        Review Count= {review_count} 
      </div>
    </div>
  );
};

export default ModalMainUserInfo;
