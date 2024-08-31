import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import app from '../firebase.js'
import { updateUserStart,updateUserSuccess,updateUserFailure, deleteUserFailure, deleteUserStart, deleteUserSuccess } from "../redux/user/userSlice";

export default function Profile() {
  const fileref = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const { currentUser ,loading,error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [UpdateSuccess,setUpdateSuccess] = useState(false);

  
  useEffect(()=>{
    if(image){
      handleFileUpload(image);
    }
  },[image]);
const handleFileUpload = async (image)=>{
      const storage = getStorage(app);
      const filename = new Date().getTime() + image.name;
      const storageRef = ref(storage,filename);
      const uploadTask = uploadBytesResumable(storageRef,image);
      
      uploadTask.on('state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
       setImagePercent(Math.round(progress));

      },
      (error)=>{
        setImageError(true);
      },
     () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profileImage: downloadURL })

        );
      }
    )
}
const handleChanges = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
}
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method:'POST',
        headers:{
         'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
        dispatch(updateUserFailure(data));
        setUpdateSuccess(false);
      }else {
        dispatch(updateUserSuccess(data)); 
        setUpdateSuccess(true);
    }
    } catch (error) {
      dispatch(updateUserFailure(error))
    }
}

const handledeleteAccount = async (e)=>{
  try {
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`,
        {
          method:"DELETE"
        }

      )
      const data = await res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data))
        return
      }
      dispatch(deleteUserSuccess(data))

    } catch (error) {
      dispatch(deleteUserFailure(error))
    }

}

  return (
    <div className="p-3 max-w-lg mx-auto gap-4">
      <h1 className="text-3xl text-center my-7 font-semibold">Profile</h1>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <input type="file" ref={fileref} hidden accept="image/*"
          onChange={(e)=>setImage(e.target.files[0])}
        />
        <img
          src={ formData.profileImage||currentUser.profileImage}
          className="h-24 w-24 self-center rounded-[50%] cursor-pointer "
          alt=""
   
          onClick={() => fileref.current.click()}
        />
          <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>Error uploading image (file size must be less than 2 MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChanges}
          className="p-3 bg-slate-300  mt-3 rounded-lg cursor-pointer"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChanges}
          className="bg-slate-300 p-3 mt-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChanges}
          className="bg-slate-300 p-3 rounded-lg mt-3"
        />
        <button className="bg-slate-700 text-white uppercase mt-3 p-3 rounded-lg opacity-95 hover:opacity-80">
        {loading ? 'Loading...':'Update'}
        </button>
      </form>
        <div className="justify-between flex mt-3">
          <span className="text-red-700 cursor-pointer" onClick={handledeleteAccount}>Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign Out</span>
        </div>
        <p className="text-red-700 mt-5">{error && 'something went wrong!'}</p>
        <p className="text-green-700 mt-5">{UpdateSuccess && 'User Updated Successfully!'}</p>
    </div>
  );
}
