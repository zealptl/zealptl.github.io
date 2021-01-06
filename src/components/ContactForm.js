import React from 'react';
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
  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomTextField
              id='firstName'
              label='First Name'
              required
              fullWidth
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
              label='Last Name'
              required
              fullWidth
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
              label='Email'
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              id='subject'
              label='Subject'
              required
              fullWidth
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
              label='Message'
              multiline
              rows={4}
              required
              fullWidth
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
