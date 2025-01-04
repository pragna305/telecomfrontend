import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <Typography variant="h6" gutterBottom>
        Quick Links
      </Typography>
      <Grid container spacing={2}>
        {/* Product Management Link */}
        <Grid item>
          <Button
            component={Link}
            to="/product-management" // Link to Product Management Page
            variant="contained"
            color="primary"
          >
            Product Management
          </Button>
        </Grid>
        {/* Supplier Management Link */}
        <Grid item>
          <Button
            component={Link}
            to="/supplier-management" // Link to Supplier Management Page
            variant="contained"
            color="primary"
          >
            Supplier Management
          </Button>
        </Grid>
        {/* Stock Overview Link */}
        <Grid item>
          <Button
            component={Link}
            to="/stock-overview" // Link to Stock Overview Page
            variant="contained"
            color="primary"
          >
            Stock Overview
          </Button>
        </Grid>
        {/* Order Management Link */}
        <Grid item>
          <Button
            component={Link}
            to="/order-management" // Link to Order Management Page
            variant="contained"
            color="primary"
          >
            Order Management
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuickLinks;
