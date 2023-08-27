import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUserData] = useState({});

  useEffect(() => {
    const { name, email, token } = (JSON.parse(localStorage.getItem("current_user")) || {});
    if (!token) {
      navigate("/login");
    }
    setUserData({ name, email });
  }, []);

  const logOut = () => {
    localStorage.removeItem("current_user");
    navigate("/login");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <h1>Welcome to the Home Page</h1>
        <h2>Hello {user.name}, how are you?</h2>
        <h2>Your email is {user.email}</h2>
        <button
          className="w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
