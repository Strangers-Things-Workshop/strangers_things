import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { APIURL } from "../assets/api/index";

const AllPosts = () => {
  //set state for posts and search
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //get loggedIn
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

  //filter from all posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">All Posts</h3>

            {/* search bar */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="form-control mb-4"
            />

            {filteredPosts.length === 0 && (
              <p>No posts found{searchTerm}</p>
            )}

            {filteredPosts.map((post) => (
              <div key={post._id} className="card mb-3">
                <div className="card-body">
                  <Link to={`/post/${post._id}`}>
                    <h5 className="post-title">{post.title}</h5>
                  </Link>
                  <p>
                    <strong>Author:</strong> {post.author.username}
                  </p>

                  <Link to={`/post/${post._id}`} className="btn btn-info">
                    View
                  </Link>
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
