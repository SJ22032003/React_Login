import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleSubmit = async () => {
        console.log(data);
        if (data.email === 'test' && data.password === 'test') {
            localStorage.setItem("name", "harsh");
            localStorage.setItem("token", "123456");

            window.location.href = '/';
        }
        else {
            alert('Invalud Value');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-[500px] p-4 bg-blue-400 rounded-md flex flex-col justify-center items-center'>
                <input
                    type="text"
                    className='inputBox'
                    placeholder='Email'
                    value={data.email}
                    name='email'
                    onChange={handleChange} />
                <input
                    type="text"
                    className='inputBox'
                    placeholder='Password'
                    value={data.password}
                    name='password'
                    onChange={handleChange} />
                <button
                    className='w-1/3 bg-white p-3 my-4 rounded-md border-2 border-black'
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}
