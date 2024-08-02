import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formdata,setFormdata] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleChange= (e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      });
      const data = await res.json();
      setLoading(false)
      if(data.success == false){
        setError(true)
        return;
      }
      setError(false)
    } catch (error) {
          setLoading(false);
          setError(true);
    }
    
  } 
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center my-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="bg-slate-300 rounded-lg px-4 py-3 outline-none"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="bg-slate-300 rounded-lg px-4 py-3 outline-none"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="bg-slate-300 rounded-lg px-4 py-3 outline-none"
          type="password"
          placeholder="Password"
          id="password"
          onChange ={handleChange}
        />
        <button  type="submit" className="bg-slate-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100">
          {loading?'loading...':'Sign-Up'}
        </button>
        <button  className="bg-red-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100">
          continue with Google
        </button>
      </form>
      <div className="gap-5 text-[18px] flex mt-3">
        <p className="text-black tracking-tighter">Have an account</p>
        <Link to="/sign-in">
          <span className="text-blue-700 cursor-pointer">Sign-in</span>
        </Link>
      
      </div>
      <p className="text-red-700 mt-2">{error ? "Something went wrong!" : ""}</p>
    </div>
  );
}
