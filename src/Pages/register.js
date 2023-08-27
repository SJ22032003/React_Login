import React, { useState } from 'react'

export default function Register() {
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
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-[500px] p-4 bg-blue-400 rounded-md flex flex-col justify-center items-center'>
                <input
                    type="text"
                    className='inputBox'
                    placeholder='Name'
                    name='name' // Add the 'name' attribute
                    value={data.name}
                    onChange={handleChange}
                />
                <input
                    type="email" // Change the type to 'email'
                    className='inputBox'
                    placeholder='Email'
                    name='email' // Add the 'name' attribute
                    value={data.email}
                    onChange={handleChange}
                />
                <input
                    type="text" // Change the type to 'password'
                    className='inputBox'
                    placeholder='Password'
                    name='password' // Add the 'name' attribute
                    value={data.password}
                    onChange={handleChange}
                />
                <button
                    className='w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black'
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>

        </div>
    )
}
