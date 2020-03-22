import React from 'react';

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
    <div className="user-info">
      <div className="user-info-description"> {descript} </div>
      <div> 
        <img className="user-info-profile-picture" src={profile_img} alt="" />
        Friend Count:{friend_count} Review Count={review_count} </div>
    </div>
  );
};

export default ModalMainUserInfo;
