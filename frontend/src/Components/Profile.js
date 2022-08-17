import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const client = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <h1>{client.email}</h1>
    </div>
  );
};

export default Profile;
