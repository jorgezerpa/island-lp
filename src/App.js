import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import bg from './assets/images/background.jpg';
import image from './assets/images/test.jpg';


import Header from './container/Header/Header';
import PlaceToVisit from './container/PlaceToVisit/PlaceToVisit';



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
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
  {name: 'islandName', img: image, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?'},
];

              //organize data in pairs ->mapping for create pairs arr -> filter for eliminate 'false'
let dataInPairs = FakeData.map((item, i)=>i%2===0 && [FakeData[i], FakeData[i+1]]).filter(item=> item && item);


const App = () => {
  const classes = useStyles();

  const autoScroll = useRef(null);
  
    return (
      <ThemeProvider theme={theme}>
          <div className={classes.root}>
              <CssBaseline />
              <Header />
              {dataInPairs.map((pairIslands,i)=>{
                  return(
                    <PlaceToVisit key={i}  pairIslands = {pairIslands} />
                  )
              })}

          </div>
      </ThemeProvider>


  )
}

export default App