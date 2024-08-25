import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import { app } from '../firebase';
import { useDispatch } from 'react-redux';

import { signInSuccess } from '../redux/user/userSlice';
import { useState } from 'react';

function OAuth() {
    const dispatch = useDispatch();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const handleGoogleClick = async()=>{
      if (isAuthenticating) return; // Prevent multiple popups

      setIsAuthenticating(true); // Set loading state
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL
                })
            })
            const data = await res.json();
            dispatch(signInSuccess(data))
            
        } catch (error) {
            // console.log("could not login with google",error);
            
        }
    }
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100"
    >
      continue with Google
    </button>
  );
}

export default OAuth;
