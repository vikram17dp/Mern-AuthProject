import React, { useEffect, useState } from "react";
import { Link,useNavigate,} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../compnents/OAuth";

export default function Signin() {
  const [formdata,setFormdata] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error,currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Redirect to profile page if user is already signed in
    }
  }, [currentUser, navigate]);
  
  const handleChange= (e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value});
  };
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      });
      const data = await res.json();
     
      if(data.success === false){
        dispatch(signInFailure(data.error));
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/home')
      
    } catch (error) {
      
          dispatch(signInFailure(error.message));
    }
    
  } 
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-center my-7 font-semibold">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
        <input
          className="bg-slate-300 rounded-lg px-4 py-3 outline-none"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={formdata.email || ""}
        />
        <input
          className="bg-slate-300 rounded-lg px-4 py-3 outline-none"
          type="password"
          placeholder="Password"
          id="password"
          onChange ={handleChange}
          value={formdata.password || ""}
        />
        <button  type="submit" className="bg-slate-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100">
          {loading?'loading...':'Signin'}
        </button>
        <OAuth/>
      </form>
      <div className="gap-5 text-[18px] flex mt-3">
        <p className="text-black tracking-tighter">Dont Have an account</p>
        <Link to="/signup">
          <span className="text-blue-700 cursor-pointer">Sign Up</span>
        </Link>
      
      </div>
      <p className="text-red-700 mt-2">
      {error ? error:""}
      
      </p>
    </div>
  );
}
