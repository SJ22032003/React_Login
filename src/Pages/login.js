import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCurrentUser, doesUserAlreadyExist } from "./register";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    const { email, password } = data;
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    const user = doesUserAlreadyExist(email);
    if (!user) {
      alert("User does not exist, Please register");
      return;
    }

    if (user.password !== password) {
      alert("Password is incorrect");
      return;
    }

    // AFTER SUCCESSFULLY LOGGING IN REDIRECT TO HOME PAGE
    createCurrentUser(user);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[500px] p-4 bg-blue-400 rounded-md flex flex-col justify-center items-center">
        <input
          type="email"
          className="inputBox"
          placeholder="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="inputBox"
          placeholder="Password"
          value={data.password}
          name="password"
          onChange={handleChange}
        />
        <button
          className="w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <hr className="w-full" />
        <h1 className="text-white">Don't have an account?</h1>
        <button
          className="w-1/3 bg-black p-2 my-2 rounded-md border-2 border-white text-white"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

// HELPER FUNCTION TO CHECK IF USER EXISTS IN LOCAL DB
const userInDb = (email) => {
  return JSON.parse(localStorage.getItem("database"))?.find(
    (user) => user.email === email
  );
};
