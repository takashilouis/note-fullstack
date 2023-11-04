import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Container } from '@mui/system';
import './firebase/config';
import '@fontsource/roboto/300.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '5px' }}>
    <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
)
