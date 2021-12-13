import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { Box, Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <ThemeProvider>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            User Data
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <hr style={{ width: '100%' }} />
          {localStorage.getItem('Fname') && (
            <Typography className='name-style'>
              <b>First Name:</b> {localStorage.getItem('Fname')}
            </Typography>
          )}
          <hr />
          {localStorage.getItem('Lname') && (
            <Typography className='name-style'>
              <b>Last Name:</b> {localStorage.getItem('Lname')}
            </Typography>
          )}
          <hr />
          {localStorage.getItem('NpiNumber') && (
            <Typography className='name-style'>
              <b>Npi Number:</b> {localStorage.getItem('NpiNumber')}
            </Typography>
          )}
          <hr />
          {localStorage.getItem('busAddress') && (
            <Typography className='name-style'>
              <b>Business Address:</b> {localStorage.getItem('busAddress')}
            </Typography>
          )}
          <hr />
          {localStorage.getItem('phoneNumber') && (
            <Typography className='name-style'>
              <b>Telephone Number:</b> {localStorage.getItem('phoneNumber')}
            </Typography>
          )}
          <hr />
          {localStorage.getItem('emailAddress') && (
            <Typography className='name-style'>
              <b>Email Address:</b> {localStorage.getItem('emailAddress')}
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
