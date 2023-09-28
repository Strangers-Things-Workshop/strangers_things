import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

//api link
import { APIURL } from "../assets/api/index";

const DeletePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = Cookies.get("loggedIn");

  console.log(id);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${APIURL}/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Post successfully deleted!");
      navigate("/posts");
    } catch (error) {
      console.error("Failed to delete the post!", error);
      toast.error(`Failed to delete the post!`);

      //check if the post exist to delete
      if (error.response && error.response.status === 404) {
        toast.error("The post you are trying to delete does not exist!");
      } else {
        toast.error("Choose another post!");
      }
    }
  };

  return (
    <div className="container mt-4 center">
      <button className="btn btn-danger" onClick={handleDeletePost}>
        Confirm Delete
      </button>
    </div>
  );
};

export default DeletePost;
