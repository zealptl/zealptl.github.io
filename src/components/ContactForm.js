import React from 'react';
import { TextField, Button, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    color: '#ffffff',
    marginTop: theme.spacing(3),
  },
  textField: {
    color: '#fff',
    '&$focusedLabel': {
      color: 'cyan',
    },
    borderColor: '#fff',
    fontSize: '10px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
  },
  cssLabel: {
    color: 'white',
    borderColor: '#fff',
    fontSize: '18px',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `white !important`,
    },
  },
  cssFocused: { color: 'white !important' },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important',
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <div>
      <form>
        <Grid container spacing={2} className={classes.form}>
          <Grid item xs={6}>
            <TextField
              id='firstName'
              label='First Name'
              className={classes.textField}
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='lastName'
              label='Last Name'
              className={classes.textField}
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              className={classes.textField}
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='subject'
              label='Subject'
              className={classes.textField}
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='message'
              label='Message'
              className={classes.textField}
              multiline
              rows={4}
              required
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
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
