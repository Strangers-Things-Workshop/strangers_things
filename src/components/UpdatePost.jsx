import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

//api
import { APIURL } from "../assets/api";

const UpdatePost = () => {
  const navigate = useNavigate();
  const login = Cookies.get("loggedIn");
  const [post, setPost] = useState(null);
  const { id } = useParams();
  console.log(location.id);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(`${APIURL}/posts`);

      console.log("Response Data:", response.data);
      //   setPost(response.data.posts);

      if (response.data.success) {
        const foundPost = response.data.data.posts.find((p) => p._id === id);
        console.log("Found Post:", foundPost);
        setPost(foundPost);
      } else {
        console.error("Server responded with an error:", response.data.error);
      }
    } catch (error) {
      console.error("Error in getting the post:", error);

      //check if the post exist to delete
      if (error.response && error.response.status === undefined) {
        toast.error("The post you are trying to edit does not exist!");
      } else {
        toast.error("Edit another post!");
      }
    }
  };

  useEffect(() => {
    console.log("Post state:", post);
  }, [post]);

  const submitData = async (e) => {
    e.preventDefault();

    //creating obj to update
    const updatedPost = {
      post: {
        title: post.title,
        description: post.description,
        price: post.price,
        location: post.location,
      },
    };

    try {
      //send patch request
      await axios.patch(`${APIURL}/posts/${id}`, updatedPost, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${login}`,
        },
      });

      toast.success("successfully updated the post!");
      navigate("/posts");
      // window.location.reload();
    } catch (error) {
      console.log(error);
      console.log(id);

      toast.error("There was an error updating the post.");
    }
  };

  const onChange = (e) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {login && post && (
        <>
          <h3 id="form-padding">Update Post</h3>
          <form onSubmit={submitData} className="registerForm">
            <div className="form-group">
              <label>Post Title</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="title"
                name="title"
                value={post.title || ""}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="description"
                name="description"
                value={post.description || ""}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="price"
                name="price"
                value={post.price || ""}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="location"
                name="location"
                value={post.location || ""}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-5">
              Update
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdatePost;
