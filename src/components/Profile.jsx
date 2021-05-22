import React from "react";

//redux
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userData);
  return <div className="profile">{user && <h1>{user.name}</h1>}</div>;
};

export default Profile;
