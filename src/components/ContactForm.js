import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  TextField,
  Button,
  makeStyles,
  withStyles,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: '#fff',
    fontSize: '18px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
  },
}));

const CustomTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff',
      color: '#fff',
    },
    '& .MuiInputBase-root': {
      color: '#fff',
    },
  },
})(TextField);

const ContactForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_tttmavr',
        'template_e6d0z59',
        {
          to_email: 'zealpatel@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'user_b3R2pRza2POSIG7iBB20q'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomTextField
              id='firstName'
              name='firstName'
              label='First Name'
              required
              fullWidth
              value={formData.firstName}
              onChange={onChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              value={formData.lastName}
              onChange={onChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              id='email'
              name='email'
              label='Email'
              required
              fullWidth
              value={formData.email}
              onChange={onChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              id='message'
              name='message'
              label='Message'
              multiline
              rows={4}
              required
              fullWidth
              value={formData.message}
              onChange={onChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='small'
          className={classes.submit}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
