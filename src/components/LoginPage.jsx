import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { Box, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUserContext();

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({username});
        console.log('user: ', username);
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box component='form' 
      sx={{ width: '100%', height: '100%', textColor: 'rgba(64, 64, 64, 0.7)'}}> 

      <TextField id='username' value={username} label='Username'
        variant='filled' onChange={(e) => setUsername(e.target.value)}
        fullWidth
        />
      
      <TextField id='password' value={password} label='Password'
        variant='filled' onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? 'text' : 'password'}
        fullWidth 
        InputProps={{
            endAdornment:
              <InputAdornment position='end'>
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment> }} 
        />

        <Button variant='outlined' startIcon={<LoginRoundedIcon />} 
          onClick={handleLogin}>Login</Button>
    </Box>
  );
}

export default LoginPage;