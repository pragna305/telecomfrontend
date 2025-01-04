import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom'; // For navigation
import './HomePage.css'; // Custom CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <Box className="hero" sx={{ background: 'url("https://pointivo.com/wp-content/uploads/2023/06/Untitled-1000-%C3%97-600-px.jpg") center/cover no-repeat', color: 'white', textAlign: 'center', padding: '100px 20px' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Telecom Inventory Management
        </Typography>
        <Typography variant="h5" paragraph>
          Manage your telecom inventory with ease. Track products, suppliers, and orders efficiently.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/dashboard" sx={{ marginTop: '20px' }}>
          Go to Dashboard
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card" sx={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <Typography variant="h5" gutterBottom>
                Product Management
              </Typography>
              <Typography variant="body1">
                Easily add, edit, and monitor products in your inventory.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card" sx={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <Typography variant="h5" gutterBottom>
                Supplier Management
              </Typography>
              <Typography variant="body1">
                Manage your suppliers and track orders in real-time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card" sx={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <Typography variant="h5" gutterBottom>
                Order Tracking
              </Typography>
              <Typography variant="body1">
                Keep track of pending and completed orders with ease.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ backgroundColor: '#3f51b5', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to take control of your inventory?
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/login" sx={{ marginTop: '20px' }}>
          Login / Signup
        </Button>
      </Box>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
        <Typography variant="body2">&copy; Telecom Inventory Management. All Rights Reserved.</Typography>
      </Box>
    </div>
  );
};

export default HomePage;
