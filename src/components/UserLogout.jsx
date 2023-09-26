import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const UserLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("loggedIn");
    toast.success("Successfully signed out!");
    navigate("/");
    location.reload();
  };

  return (
    <>
      <div className="center">
        <button onClick={logout} type="button" className="btn btn-primary">
          Logout
        </button>
      </div>
    </>
  );
};

export default UserLogout;
