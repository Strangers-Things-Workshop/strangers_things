// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { APIURL } from "../assets/api";

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);

//   const login = Cookies.get("loggedIn");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${APIURL}/users/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${login}`,
//           },
//         });
//           setUserData(response);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>{userData.username}'s Profile</h2>
//           <p>Posts: {userData.posts}</p>
//           <p>Messages: {userData.messages}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { APIURL } from "../assets/api";

// const Profile = () => {
//   const [userData, setUserData] = useState({
//     posts: [],
//     messages: [],
//     username: "",
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = Cookies.get("loggedIn");
//       try {
//         const response = await axios.get(`${APIURL}/users/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log(response.data); // Log to check the structure

//         // Modify based on the actual structure of response.data
//         setUserData({
//           posts: response.data.posts || [],
//           messages: response.data.messages || [],
//           username: response.data.username || "",
//         });
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <h1>{userData.username}'s Profile</h1>
//       <h2>Posts</h2>
//       <ul>
//         {userData.posts.map((post) => (
//           <li key={post._id}>
//             {post.title}: {post.description}
//           </li>
//         ))}
//       </ul>
//       <h2>Messages</h2>
//       <ul>
//         {userData.messages.map((message) => (
//           <li key={message._id}>
//             {message.content} - from {message.fromUser.username} on post{" "}
//             {message.post.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { APIURL } from "../assets/api";

const Profile = () => {
  const [userData, setUserData] = useState({
    posts: [],
    messages: [],
    username: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get("loggedIn");
      try {
        const response = await axios.get(`${APIURL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data); // Log to check the structure

        // Modify based on the actual structure of response.data
        setUserData({
          posts: response.data.data.posts || [],
          messages: response.data.data.messages || [],
          username: response.data.data.username || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>{userData.username}'s Profile</h1>
      <h2>Posts</h2>
      <ul>
        {userData.posts.map((post) => (
          <li key={post._id}>
            {post.title}: {post.description}
          </li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {userData.messages.map((message) => (
          <li key={message._id}>
            {message.content} - from {message.fromUser.username} on post{" "}
            {message.post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
