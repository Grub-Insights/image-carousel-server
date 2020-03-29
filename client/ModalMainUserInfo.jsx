/* eslint-disable camelcase */
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
  const friends = <svg id="friend1" className={styles.friends} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>></svg>
  const friends2 = <svg id="friend2" className={styles.friends2} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>></svg>

  return (
    <div id="outer most user info div" className={styles.user_info}>
      <div id="description of food" className={styles.user_info_description}> {descript} {date_of}</div>
      <div id="div with profile picture #friend #review" >
        <img className={styles.user_info_profile_picture} src={profile_img} alt="" />
        <div id="user name" className={styles.user_name} > {name_user} </div>
        <div className={styles.user_info_stats} >
          {friends} {friends2} <div className={styles.friend_count}>{friend_count}</div>
          {/* Review Count= {review_count}  */}
        </div>
      </div>
    </div>
  );
};

export default ModalMainUserInfo;
