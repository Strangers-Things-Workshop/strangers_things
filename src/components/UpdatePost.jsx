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
  const [post, setPost] = useState({});
  const location = useParams();
  console.log(location.id);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const url = `${APIURL}/posts/${location.id}`;
    console.log('URL:', url);
    console.log('ID:', location.id);

    try {
      const response = await axios.get(url);
      console.log('Response:', response);
        setPost(response.data.data);
      //     console.log(response.data[0]);
      //   setPost(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    
    //creating obj to update
    
    const data = new FormData(e.target);
    const updatedPost = Object.fromEntries(data);
    try {
      await axios.patch(`${APIURL}/posts/${location.id}`, updatedPost, {
        headers: {
          Authorization: login,
        },
      });

      toast.success("successfully updated the post!");
      navigate("/posts");
      location.reload();
    } catch (error) {
      console.log(error);
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
              <label>Message</label>
              <input
                type="text"
                className="form-control"
                placeholder="message"
                name="message"
                value={post.location || ""}
                onChange={onChange}
                required
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
