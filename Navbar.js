import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left-aligned links */}
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
          </Box>

          {/* Right-aligned login/signup */}
          <Box>
            <Button color="inherit" component={Link} to="/login">Login/Signup</Button>
          </Box>

        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
