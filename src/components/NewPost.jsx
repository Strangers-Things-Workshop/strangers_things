import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { APIURL } from "../assets/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  //use state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const createPost = async (e) => {
    e.preventDefault();

    const token = Cookies.get("loggedIn");
    if (!token) {
      toast.error("You need to login first");
      return;
    }

    try {
      const response = await axios.post(
        `${APIURL}/posts`,
        {
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Post created successfully!");
        navigate("/posts");
      }
    } catch (error) {
      toast.error("Failed to create post");
      console.error(error);
    }
  };

  return (
    // <div>
    //   <form onSubmit={createPost} className="registerForm">
    //     <div className="form-group">
    //       <label>
    //         Title:
    //         <input
    //           className="form-control"
    //           type="text"
    //           placeholder="Title"
    //           value={title}
    //           onChange={(e) => setTitle(e.target.value)}
    //           required
    //         />
    //       </label>
    //     </div>

    //     <div className="form-group">
    //       <label>
    //         Description:
    //         <textarea
    //           className="form-control"
    //           placeholder="Description"
    //           value={description}
    //           onChange={(e) => setDescription(e.target.value)}
    //           required
    //         />
    //       </label>
    //     </div>
    //     <div className="form-group">
    //       <label>
    //         Price:
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="Price"
    //           value={price}
    //           onChange={(e) => setPrice(e.target.value)}
    //           required
    //         />
    //       </label>
    //     </div>

    //     <div className="form-group">
    //       <label>
    //         Location:
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="Location"
    //           value={location}
    //           onChange={(e) => setLocation(e.target.value)}
    //         />
    //       </label>
    //     </div>

    //     <div className="form-group">
    //       <label>
    //         Will Deliver:
    //         <input
    //           type="checkbox"
    //           checked={willDeliver}
    //           onChange={(e) => setWillDeliver(e.target.checked)}
    //         />
    //       </label>
    //     </div>
    //     <di>
    //       <button className="btn btn-success" type="submit">
    //         Create Post
    //       </button>
    //     </di>
    //   </form>
    // </div>

    <div className="container mt-4">
      <h3>Create Post</h3>
      <form onSubmit={createPost} className="bg-light p-5 rounded">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            className="form-control"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="willDeliver"
            checked={willDeliver}
            onChange={(e) => setWillDeliver(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="willDeliver">
            Will Deliver
          </label>
        </div>

        <div>
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
