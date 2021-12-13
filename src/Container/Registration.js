import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import {  ThemeProvider } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import './style/Registration.css'

const Registration = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [npiNumber, setNpiNumber] = useState('');
  const [busAddress, setBusAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [error,setError]=useState('')

  const navigate = useNavigate();

  // btn click event
  const handleSubmit = (event) => {
      event.preventDefault();
      if (fname === '' || lname === '' || fname === '' || npiNumber === '' || busAddress === '' || phoneNumber === '' || emailAddress === '') {
        setError("Please fill field")
      }
      else {
        localStorage.setItem('Fname', fname);
          localStorage.setItem('Lname', lname);
          localStorage.setItem('NpiNumber', npiNumber);
          localStorage.setItem('busAddress', busAddress);
          localStorage.setItem('phoneNumber', phoneNumber);
          localStorage.setItem('emailAddress', emailAddress);
          navigate('/home');
      }
  };

  return (
    <ThemeProvider>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='npinumber'
                  label='NPI Number'
                  name='npinumber'
                  value={npiNumber}
                  onChange={(e) => setNpiNumber(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='businessaddress'
                  label='Business Address'
                  id='businessaddress'
                  value={busAddress}
                  onChange={(e) => setBusAddress(e.target.value)}
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='telephonenumber'
                  label='Telephone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id='telephonenumber'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  autoComplete='email'
                />
                          </Grid>
                          <label className="error-text">{error}</label>
              <Button
                onClick={handleSubmit}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                color={'primary'}
                style={{ marginTop: 20 }}
              >
                Sign Up
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Registration;
