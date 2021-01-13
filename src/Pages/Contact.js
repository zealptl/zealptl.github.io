import React from 'react';
import { Grid } from '@material-ui/core';

import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      className='contact-page'
      id='contact'
    >
      <h1 className='contact-page-heading'>Contact</h1>
      <Grid item xs={7}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
