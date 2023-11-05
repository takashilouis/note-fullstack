import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserMenu from "../components/UserMenu";
import FolderList from '../components/FolderList';

export default function Home(){
    return (
        <>
            <Typography variant='h4' sx={{ mb: '20px'}}>Home</Typography>
            <Box sx={{display: 'flex', justifyContent: 'right', mb: '10px'}}>
                <UserMenu />
            </Box>
            <Grid container sx={{height: '50%', boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)"}}>
                <Grid item xs={3} sx={{height: '100%'}}>
                    <FolderList folders={[ {id: '1', name: 'Plan for Xmas'},
                                           {id: '2', name: 'Plan for 2024'}
                                        ]} />    
                </Grid>
                <Grid item xs={9} sx={{height: '100%'}}>
                    <p> Note List </p>
                </Grid>
            </Grid>
        </>
    );
} 