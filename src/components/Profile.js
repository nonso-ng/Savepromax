import React from "react";
import { useContext } from "react";
import { userAuthContext } from "../Context/userAuthContext";

const Profile = () => {
  const { username } = useContext(userAuthContext);
  const { usermail } = useContext(userAuthContext);

  return (
    <div>
      <h1> User Profile</h1>
      <h2>Username: {username}</h2>
      <h2>Mail: {usermail}</h2>
    </div>
  );
};

export default Profile;
