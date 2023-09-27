import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { APIURL } from "../assets/api/index";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const login = Cookies.get("loggedIn");

  const GetPosts = async () => {
    try {
      const response = await axios.get(`${APIURL}/posts`);
      setPosts(response.data.data.posts);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">All Posts</h3>
            {posts.map((post) => (
              <div key={post._id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    {post.title}
                    {login && (
                      <span>
                        (<Link to={`/update-post/${post._id}`}>Edit</Link>)
                      </span>
                    )}
                  </h5>
                  {/* <p className="card-text">{post.description}</p>
                  <p className="card-text">
                    <strong>Price: </strong>
                    {post.price}
                  </p>
                  <p className="card-text">
                    <strong>Location: </strong>
                    {post.location} */}
                  {/* </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
