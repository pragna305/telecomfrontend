import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SummaryCard = ({ title, value }) => {
  return (
    <Card className="summary-card">
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
