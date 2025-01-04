import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import './About.css';

const AboutUs = () => {
  return (
    <Container className="about-us-container" maxWidth="lg">
      <Box className="about-us-header" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" component="h1" className="about-us-title">
          About Us
        </Typography>
        <Typography variant="h6" className="about-us-subtitle">
        we are committed to simplifying telecom inventory management for businesses of all sizes. We understand the challenges of keeping track of diverse products, monitoring suppliers, and managing orders in the fast-paced telecom industry. That’s why we’ve created a powerful, user-friendly platform designed to streamline your operations and boost your efficiency.

Our mission is to empower telecom companies to focus on what they do best—providing exceptional service to their customers—while we take care of their inventory needs. With real-time tracking, detailed analytics, and seamless integrations, managing your inventory has never been easier.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className="about-us-card" elevation={3}>
            <Typography variant="h5" className="section-title">Our Mission</Typography>
            <Typography variant="body1">
            Our mission is to provide innovative and reliable telecom solutions that enhance connectivity and communication worldwide. We are dedicated to empowering businesses and individuals with cutting-edge technologies that bridge gaps, foster collaboration, and drive progress. By delivering state-of-the-art tools and services, we aim to simplify complex telecom operations, ensuring seamless and efficient communication in every corner of the globe.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="about-us-card" elevation={3}>
            <Typography variant="h5" className="section-title">Our Values</Typography>
            <Typography variant="body1">
            Integrity, Innovation, and Customer Satisfaction form the cornerstone of our values. We are committed to conducting business with transparency and honesty, fostering trust with our clients and partners. Our drive for innovation ensures that we stay ahead in delivering cutting-edge solutions tailored to evolving needs.With these values, we aim to build lasting relationships and make a meaningful impact in the telecom industry.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-us-card" elevation={3}>
            <Typography variant="h5" className="section-title">Our Team</Typography>
            <Typography variant="body1">
              We have a dedicated team of experts who are passionate about telecom technologies and committed to making a positive impact in the industry.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
