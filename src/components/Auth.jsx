import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { auth } from "../firebase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { async } from "@firebase/util";


function Auth() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //Check if user is logged in
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, []);

    //Register User
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    //Login User
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    //Logout User
    const logout = async() => {
        await signOut(auth);
    }

    return (
        <div>
            <br /><br />

            <h1>User Register</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    onChange={(event) => {
                        setRegisterEmail(event.target.value)
                    }}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value)
                    }}
                />
                <Button variant="outlined" onClick={register}>Register</Button>
            </Box>

            <h1>User Login</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    onChange={(event) => {
                        setLoginEmail(event.target.value)
                    }}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => {
                        setLoginPassword(event.target.value)
                    }}
                />
                <Button variant="outlined" onClick={login}>Login</Button>
            </Box>
            {user ? user.email : "No user logged in"}
            <Button variant="text" onClick={logout}>Logout</Button>
        </div>
    )
}

export default Auth;