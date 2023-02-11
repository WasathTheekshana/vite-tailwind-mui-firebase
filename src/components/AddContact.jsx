import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function AddContact() {

    const nameCollectionRef = collection(db, "contacts");

    const [newName, setNewName] = useState("");
    const [newGender, setNewGender] = useState("");
    const [newPosition, setNewPosition] = useState("");

    const addUser = async () => {
        await addDoc(nameCollectionRef, { name: newName, gender: newGender, position: newPosition });
    };

    return (
        <div>
            <div>
                <br /><br />
                <br /><br />
                <h1>Add Contact Details</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate="true"
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                        onChange={(event) => {
                            setNewName(event.target.value)
                        }}
                    /> <br />
                    <TextField id="outlined-basic" label="Gender" variant="outlined"
                        onChange={(event) => {
                            setNewGender(event.target.value)
                        }}
                    /> <br />
                    <TextField id="outlined-basic" label="Position" variant="outlined"
                        onChange={(event) => {
                            setNewPosition(event.target.value)
                        }}
                    /> <br />
                    <Button variant="contained" onClick={addUser}>Add User</Button>
                </Box>
            </div>

        </div>
    )
}

export default AddContact