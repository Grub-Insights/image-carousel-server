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
  const star = <svg id="star" className={styles.star} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 18 18"><path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path></svg>
  return (
    <div id="outer most user info div" className={styles.user_info}>
      <div id="description of food" className={styles.user_info_description}> {descript} <div className={styles.date}>{date_of}</div></div>
      <div id="div with profile picture #friend #review" >
        <img className={styles.user_info_profile_picture} src={profile_img} alt="" />
        <div id="user name" className={styles.user_name} > {name_user} </div>
        <div className={styles.user_info_stats} >
          {friends} {friends2} <div className={styles.friend_count}>{friend_count}</div>
          {star} <div className={styles.review_count}> {review_count} </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMainUserInfo;
