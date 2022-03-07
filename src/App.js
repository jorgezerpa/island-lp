import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import bg from './assets/images/background.jpg';
import images from './constants/images';



import Header from './container/Header/Header';
import Places from './container/Places/Places';


import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
    },
});


const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
    }
}));



const FakeData = [
  {name: 'Bora Bora', img: images.image1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
  {name: 'SeaHorse Reef', img: images.image3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
  {name: 'White Tiger Island', img: images.image4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
  {name: 'KingFisher Shores', img: images.image2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
  {name: 'Little Crab Rock', img: images.image5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
  {name: 'Castawaw Place', img: images.image1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam.'},
];

   console.log(images)           

const App = () => {
  const classes = useStyles();

  const autoScroll = useRef(null);
  
    return (
      <ThemeProvider theme={theme}>
          <div className={classes.root}>
              <CssBaseline />
              <Header autoScroll={autoScroll} />
              <Places FakeData={FakeData} autoScroll={autoScroll} />

              <footer style={{width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,.6)', color:'#fff'}}>
                  zerpa Code
              </footer>
          </div>
      </ThemeProvider>


  )
}

export default App