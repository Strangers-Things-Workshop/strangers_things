import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { APIURL } from "../assets/api";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

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
    <div className="container mt-4">
      <h2>{userData.username}'s Profile</h2>

      <h4 className="mt-5">My Posts</h4>
      <div className="row">
        {userData.posts.map((post) => (
          <div key={post._id} className="col-md-6 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tilte: {post.title}</h5>
                <p className="card-text">Description: {post.description}</p>
                <p className="card-text">Price: {post.price}</p>
                <p className="card-text">Location: {post.location}</p>
                <p className="card-text">Created: {post.createdAt}</p>
                <p className="card-text">Updated: {post.updatedAt}</p>

                <button
                  onClick={() => navigate(`/delete-post/${post._id}`)}
                  className="btn btn-link"
                >
                  Delete
                </button>

                <Link to={`/update-post/${post._id}`} className="btn btn-link">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-3">Messages</h2>
      <div className="row">
        {userData.messages.map((message) => (
          <div key={message._id} className="col-md-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{message.post.title}</h5>
                <p className="card-text">
                  {message.content} - from {message.fromUser.username}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
