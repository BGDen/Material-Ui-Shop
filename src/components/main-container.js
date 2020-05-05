import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {AppHeader} from './header';
import { brown } from '@material-ui/core/colors';
import {AddButton} from './small-component/MainContainer-AddButton';

import RenderCards from './render-card';


export const SimpleContainer = ()=> {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl' style={{padding: 0}}>

        <AppHeader />
        
        <Typography component="div" style={{ backgroundColor: brown[100], height: '' }}>
          <RenderCards />
          <AddButton />
        </Typography>

      </Container>
    </React.Fragment>
  );
}