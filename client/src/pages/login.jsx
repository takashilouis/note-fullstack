import React from 'react'
import { Typography, Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export default function Login(){
    const auth = getAuth();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleLoginWithGoogle = async() => {
        const provider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth,provider);
        console.log({res})

        
    };
    if(user?.uid){
        navigate('/')
        return;
    }else{
    return (
        <>
            <Typography variant='h5' sx={{ marginBottom: '10px'}}> Welcome to Note App</Typography>
            <Button variant='outlined' onClick={handleLoginWithGoogle}> 
                LOGIN with GG !
            </Button>
        </>
    );
    }
}