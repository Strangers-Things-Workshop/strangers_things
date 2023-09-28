import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

//api link
import { APIURL } from "../assets/api/index";

const DeletePost = () => {
  const navigate = useNavigate();
  const login = Cookies.get("loggedIn");
  const { id } = useParams();

  console.log(id);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${APIURL}/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${login}`,
        },
      });
      toast.success("Post successfully deleted!");
      navigate("/posts");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the post!");
    }
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-danger" onClick={handleDeletePost}>
        Confirm Delete
      </button>
    </div>
  );
};

export default DeletePost;
