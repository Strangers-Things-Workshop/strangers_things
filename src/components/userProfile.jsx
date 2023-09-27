import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { APIURL } from "../assets/api";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const login = Cookies.get("loggedIn");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${login}`,
          },
        });
          setUserData(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>{userData.username}'s Profile</h2>
          <p>Posts: {userData.posts}</p>
          <p>Messages: {userData.messages}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
