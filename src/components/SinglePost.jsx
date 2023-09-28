import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//api link
import { APIURL } from "../assets/api/index";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const login = Cookies.get("loggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`${APIURL}/posts`);
        if (response.data.success) {
          const allPosts = response.data.data.posts;
          const singlePost = allPosts.find((post) => post._id === id);

          if (singlePost) {
            setPost(singlePost);
          } else {
            console.error("Post with that id exist.");
          }
        } else {
          console.error("fail to fetch the posts");
        }
      } catch (error) {
        console.error("Error in fetching the post", error);
      }
    };

    getPost();
  }, [id]);

  return (
    <div className="container mt-4">
      {post ? (
        <>
          <h3>Title: {post.title}</h3>
          <p>
            <strong>Description:</strong> {post.description}
          </p>
          <p>
            <strong>Price:</strong> {post.price}
          </p>
          <p>
            <strong>Location:</strong> {post.location}
          </p>

          {post.willDeliver && (
            <p>
              <strong>Delivery: </strong> This item can be delivered.
            </p>
          )}
          <p>
            <strong>Author ID:</strong> {post.author._id}
          </p>

          <p>
            <strong>Author Username:</strong> {post.author.username}
          </p>

          {/* Check if user is logged in to delete and edit the post*/}
          {login && (
            <>
              <button
                onClick={() => navigate(`/delete-post/${post._id}`)}
                className="btn btn-danger"
              >
                Delete
              </button>

              <Link to={`/update-post/${post._id}`} className="btn btn-primary">
                Edit
              </Link>
            </>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SinglePost;
