import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" height="50vh">
      <Box textAlign="center" sx={{ maxWidth: 500 }}>
        <Typography variant="h2" color="primary" mb={4}>
          Oops!
        </Typography>
        <Typography variant="h5" mb={4}>
          We couldn't find the page you're looking for.
        </Typography>
        <Button variant="contained" component={Link} to="/" color="primary">
          Go Back Home
        </Button>
      </Box>
    </Grid>
  );
};

export default NotFoundPage;
