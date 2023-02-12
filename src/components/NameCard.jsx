import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";



function NameCard({ name, gender, position, linkedIn, id }) {

    //delete contact from database
    const deleteUser = async (id) => {
        const userDoc = doc(db, "contacts", id);
        await deleteDoc(userDoc);
    }


    return (
        <div>
            <div className="card-container">
                <Card className="card" sx={{ width: '300px', marginTop: '10px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Contact Card
                        </Typography>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {gender}
                        </Typography>
                        <Typography variant="body2">
                            {position}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={linkedIn} target='_blank'>LinkedIn</Button>
                    </CardActions>
                    <CardActions>
                        <Button variant="outlined" color="error"
                            onClick={() => {
                                deleteUser(id)
                            }}
                        >
                        
                            DELETE
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default NameCard