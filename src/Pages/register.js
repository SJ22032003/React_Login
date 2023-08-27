import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, password } = data;
    if (!email || !password || !name) {
      alert("Please fill all the fields");
      return;
    }

    const user = doesUserAlreadyExist(email);
    if (user) {
      alert("User already exists, Please login");
      return;
    }

    // AS WE DON'T HAVE DATABASE TO STORE THESE CREDENTIALS SO I WILL STORE THEM IN LOCAL STORAGE AND CREATE CURRENT USER
    setUserToLocalDataBase(data);

    // AFTER SUCCESSFULLY REGISTERING USER REDIRECT TO HOME PAGE
    createCurrentUser(data);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[500px] p-4 bg-blue-400 rounded-md flex flex-col justify-center items-center">
        <input
          type="text"
          className="inputBox"
          placeholder="Name"
          name="name" // Add the 'name' attribute
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email" // Change the type to 'email'
          className="inputBox"
          placeholder="Email"
          name="email" // Add the 'name' attribute
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password" // Change the type to 'password'
          className="inputBox"
          placeholder="Password"
          name="password" // Add the 'name' attribute
          value={data.password}
          onChange={handleChange}
        />
        <button
          className="w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <hr className="w-full" />
        <h1 className="text-white">Already Have an account?</h1>
        <button
          className="w-1/3 bg-black p-2 my-2 rounded-md border-2 border-white text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

// HELPER FUNCTION

//TO CHECK IF USER ALREADY EXISTS
export const doesUserAlreadyExist = (email) => {
  return JSON.parse(localStorage.getItem("database"))?.find(
    (user) => user.email === email
  );
};

// TO STORE USER TO LOCAL STORAGE
const setUserToLocalDataBase = (data) => {
  // SET USER TO DB
  const users = JSON.parse(localStorage.getItem("database")) || [];
  localStorage.setItem("database", JSON.stringify([...users, data]));
};

// TO CREATE CURRENT USER
export const createCurrentUser = (data) => {
  // SET CURRENT USER WITH TOKEN
  delete data.password;
  localStorage.setItem(
    "current_user",
    JSON.stringify({ ...data, token: "123456" })
  );
};
