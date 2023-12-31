import { Card, CardContent, List, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'
import { Box } from "@mui/system";

export default function FolderList({folders}){
    return (
        <List sx={{width: '100%', bgcolor: '#7099DC', height:'100%', padding: '10px', 
                    textAlign: 'left', overflowY: 'auto'}}
              subheader={<Box><Typography sx={{ fontWeight: 'bold', color: 'white'}}>Folders</Typography></Box>}>
            {
                folders.map(({id,name}) => {
                    return (
                        <Link key={id} to={`folders/${id}`} style={{textDecoration: 'none'}}>
                            <Card sx={{mb: '5px'}}>
                                <CardContent sx={{ '&:last-child': { pb: '10px' }, padding: '10px'}}>
                                    <Typography>{name}</Typography>
                                </CardContent></Card>
                        </Link>
                    )
                })
            }
        </List>
    )
}