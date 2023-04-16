import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginData } from '../../model/LoginData';
import 'firebase/auth';
import AuthServiceFirebase from '../../service/AuthServiceFirabase';
import { Alert, Collapse, IconButton } from '@mui/material';
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { codeActions } from '../../redux/codeSlice';
import { useSelector } from 'react-redux';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.tel-ran.com/">
        Tel-Ran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
type Props = {
  submitFn: (loginData: LoginData) => void
}

export const LoginForm: React.FC<Props> = ({ submitFn }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState(true);
    if(googleAuth){
      submitFn({
        email: "GOOGLE",
        password: data.get('password') as string,
      });

    }else
    submitFn({
      email: data.get('email') as string,
      password: data.get('password') as string,
    });
  };
  let googleAuth=false;
  const [openWindow, setState] = useState(true);
  const message=useSelector<any,string>(state=>state.codeState.code);
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {message!="OK"&&<Box sx={{ width: '100%' }}>
              <Collapse in={openWindow}>
                <Alert severity='error'
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setState(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {message}
                </Alert>
              </Collapse>
            </Box>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography align='center'>Or</Typography>
            <Button
            onClick={()=>googleAuth=true}
            type='submit'
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              variant="outlined"
              style={{ border: "6 px solid black" }}
            ><img src="https://s4827.pcdn.co/wp-content/uploads/2018/04/Google-logo-2015-G-icon.png"
              style={{ maxHeight: "4vw" }} />
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}