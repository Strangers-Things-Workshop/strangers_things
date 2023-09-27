import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { APIURL } from '../assets/api';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const login = Cookies.get("loggedIn");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${login}`,
          },
        });
        
        if(response.ok) {
          const result = await response.json();
          setUserData(result);
        } else {
          console.error('Failed to fetch user data');
        }
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
          {/* Render other user data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
