import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Tooltip } from '@mui/material';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../../components/Loader/Loader';

import { DevTool } from '@hookform/devtools';
import { Notify } from 'notiflix';

export default function Register() {
  const dispatch = useDispatch();

  const { isLoggedIn, isLoading } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const form = useForm();

  const {
    register: registerField,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data, event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // const credentials = Object.fromEntries(data.entries());

    // const credentials = { name, email, password };
    console.log(data);

    event.target.reset();

    dispatch(register(data));

    // event.currentTarget.reset();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

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
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, color: 'secondary' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                // required
                fullWidth
                id="name"
                {...registerField('name', {
                  required: { value: true, message: 'Name  is required' },
                })}
                label="User Name"
                autoFocus
                // onChange={handleChangeName}
              />
            </Grid>

            {errors.name?.message && Notify.warning(errors.name.message)}

            <Grid item xs={12}>
              <TextField
                // required
                fullWidth
                id="email"
                {...registerField('email', {
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
                // onChange={handleChangeEmail}
              />
            </Grid>

            {errors.email?.message && Notify.warning(errors.email.message)}

            <Grid item xs={12}>
              <TextField
                // required
                fullWidth
                name="password"
                label="Password"
                type={passwordShown ? 'text' : 'password'}
                id="password"
                {...registerField('password', {
                  required: { value: true, message: 'Password  is required' },
                })}
                autoComplete="new-password"
                // onChange={handleChangePassword}
              />
            </Grid>

            {errors.password?.message &&
              Notify.warning(errors.password.message)}

            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Show Password"
            checked={passwordShown}
            onChange={togglePassword}
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
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
              </span>
            </Tooltip>
          )}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2" sx={{ color: '#000' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <DevTool control={control} />
      </Box>
    </Container>
  );
}
