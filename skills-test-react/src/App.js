import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ border: '1px solid red' }}>
      <AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>

      <Routes>
        <Route path="/" element={<div>Welcome home!</div>} />
        <Route path="/todo" element={<BasicForm />} />
      </Routes>
    </Container>
  );
}
