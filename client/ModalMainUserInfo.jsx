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
    <div id="outer most user info div" className={styles.user_info}>
      <div id="description of food" className={styles.user_info_description}> {descript} </div>
      <div id="div wiht profile picture #friend #review" >
        <img className={styles.user_info_profile_picture} src={profile_img} alt="" />
        <div id="user name" className={styles.user_name} > {name_user} </div>
        <div className={styles.user_info_stats} >
          Friend Count= {friend_count} 
          Review Count= {review_count} 
        </div>
      </div>
    </div>
  );
};

export default ModalMainUserInfo;
