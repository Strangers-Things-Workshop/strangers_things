import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { APIURL } from "../assets/api/index";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const login = Cookies.get("loggedIn");
  const navigate = useNavigate();

  const GetPosts = async () => {
    try {
      const response = await axios.get(`${APIURL}/posts`);
      setPosts(response.data.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPosts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <>
      <div>
        <h3>All Posts</h3>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            {login && (
              <button
                onClick={() => handleEdit(post._id)}
                type="button"
                className="btn btn-link"
              >
                Edit Post
              </button>
            )}
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPosts;
