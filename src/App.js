import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import bg from './assets/images/background.jpg';

import Header from './container/Header/Header';
import PlaceToVisit from './container/PlaceToVisit/PlaceToVisit';

const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
    }
}));

const App = () => {
  const classes = useStyles();
  
    return (
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
    </div>
  )
}

export default App