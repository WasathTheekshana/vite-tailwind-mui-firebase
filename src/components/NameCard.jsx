import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function NameCard({ name, gender, position, linkedIn }) {
    return (
        <div>
            <Card sx={{ width: '300px', marginTop: '10px' }}>
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
            </Card>
        </div>
    )
}

export default NameCard