import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserMenu from "../components/UserMenu";

export default function Home(){
    return (
        <>
            <Typography variant='h4' sx={{ mb: '20px'}}>Home</Typography>
            <Box sx={{display: 'flex', justifyContent: 'right', mb: '10px'}}>
                <UserMenu />
            </Box>
            <Grid container></Grid>
        </>
    );
} 