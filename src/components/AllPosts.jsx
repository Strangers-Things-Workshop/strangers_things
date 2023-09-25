import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../assets/api/index";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const GetPosts = async () => {
      try {
        const response = await axios.get(`${APIURL}/posts`);
        setPosts(response.data.data.posts);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    GetPosts();
  }),
    [];

  return (
    <>
      <div>
        <h3>All Posts</h3>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.willDeliver}</p>

          </div>
        ))}
      </div>
    </>
  );
};

export default AllPosts;
