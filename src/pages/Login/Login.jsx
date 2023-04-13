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
import { Tooltip } from '@mui/material';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../../components/Loader/Loader';
import { DevTool } from '@hookform/devtools';
import { Notify } from 'notiflix';
// import { Password } from '@mui/icons-material';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isLoading } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data, event) => {
    event.preventDefault();

    event.target.reset();

    dispatch(logIn(data));
  };

  // console.log(errors);

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const data = new FormData(event.currentTarget);
  //   const credentials = Object.fromEntries(data.entries());

  //   // const credentials = { name, email, password };
  //   // console.log(credentials);

  //   dispatch(logIn(credentials));

  //   event.currentTarget.reset();
  // };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
      return;
    }
  }, [isLoggedIn, navigate]);

  return (
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
        <Avatar sx={{ m: 1, bgcolor: '#1de9b6', color: '#000' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            // required
            fullWidth
            id="email"
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email format',
              },
              validate: {
                notBlackListed: fieldValue => {
                  return (
                    !fieldValue.endsWith('ru') ||
                    'Mordor domain is not supported'
                  );
                },
              },
            })}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          {errors.email?.message && Notify.warning(errors.email.message)}

          <TextField
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type={passwordShown ? 'text' : 'password'}
            id="password"
            {...register('password', {
              required: { value: true, message: 'Password  is required' },
            })}
            autoComplete="current-password"
          />

          {errors.password?.message && Notify.warning(errors.password.message)}

          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Show Password"
            checked={passwordShown}
            onChange={togglePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
            sx={{ ml: 4 }}
          />
          {isLoading ? (
            <Loader color="#1de9b6"></Loader>
          ) : (
            <Tooltip title="Please fill all fields above" followCursor>
              <span>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isValid}
                  sx={{ mt: 3, mb: 2, bgcolor: '#1de9b6', color: '#000' }}
                >
                  Log In
                </Button>
              </span>
            </Tooltip>
          )}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ color: '#000' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="register" variant="body2" sx={{ color: '#000' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <DevTool control={control} />
      </Box>
    </Container>
  );
}
