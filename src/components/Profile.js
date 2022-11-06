import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { userAuthContext } from "../Context/userAuthContext";

const Profile = () => {
  const { username } = useContext(userAuthContext);
  const { usermail } = useContext(userAuthContext);

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Show user profile and details" />
        <link rel="canonical" href="/profile" />
      </Helmet>

      <div className="userprofile">
        <div>
          <img src="" alt="user-img" />
        </div>
        <div>
          <h1> User Profile</h1>
          <h2>Username: {username}</h2>
          <h2>Mail: {usermail}</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
