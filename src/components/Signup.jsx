import React from 'react'
import {Brandname, Googlebtn } from '../assets/assets';
import { useState } from "react";
import Button from './Button';


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or do something else with it
  };

  const handleRegisterWithGoogle = () => {
    // Handle registering with Google
  };

  return (
    <>
     <div className='flex flex-col items-center justify-center my-5 py-10'>
    <img src={Brandname} alt="" className='' /> 
    </div>
    <div className='mx-4'>
    <h3 className='font-extrabold font-poppins text-lg text-black'>Sign Up</h3>
    <p className='font-montserrat font-light text-base text-black'>Please fill your details to create account.</p>
    </div>
    <div className="container mx-auto px-4 py-8">
   
      <form onSubmit={handleSubmit} className='font-montserrat font-semibold'>
        <div className="mb-4">
          <label className="block -mb-1.5 text-black   " htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block -mb-1.5 text-black   " htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black  -mb-1.5"
            htmlFor="address"
          >
           Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black  -mb-1.5"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black font-bold"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-black text-sm font-light">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
        <div className="mb-4 text-center">
          <Button text='Continue'/>
          <p className='font-montserrat'>or</p>
          <button className='w-5/6  h-8'><img src={Googlebtn} alt="google" className='h-full w-full' /></button>
        </div>
        <div className="mb-4 text-center">
         <p className='font-light text-black '>Have an account? <a href="" className='text-gold font-semibold'>Log in </a></p>
        </div>
        </form>
        </div>
   </>
  )
}

export default Signup