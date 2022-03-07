import React from 'react';
import { makeStyles } from '@material-ui/styles';

            //scroll animation
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();


import { Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';

import image from '../../assets/images/test.jpg';
import compass from '../../assets/icons/compass.svg';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: '100vh',
        position: 'relative',
    },
    grid:{
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    gridItem: {

    },
    card:{
        position: 'relative',
        height: '400px',
        width: '100%',
        color: '#fff',
        background: 'rgba(0,0,0,.8)',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    cardMedia:{
        height: '65%'
    },
    cardContent:{
        height: '35%',
    },
    Image: {
      height: '100%',
    }, 
    middleLine: {
        position: 'absolute',
        width: '40px',
        height: '40px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',

        '&::before':{
            content: "''",
            position: 'absolute',
            top: '-260px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            height: '200px',
            width: '9px',
        },
        '&::after':{
            content: "''",
            position: 'absolute',
            top: '140%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            height: '200px',
            width: '9px',
        }
    },

    compass: {
        width: '100%',
    }
    
}));


const PlaceToVisit = () => {
    const classes = useStyles();
    
  return (
    <div className={classes.root} id="test">
        <Grid container className={classes.grid} justifyContent='space-evenly' alignItems='center'>
          
              <Grid item className={classes.gridItem} xs={12} sm={5} md={3} >
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                        <img src={image} alt="" className={classes.Image} />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography type="h2">Nombre del lugar</Typography>
                        <Typography type="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?</Typography>
                    </CardContent>
                </Card>  
              </Grid>
        
                <div className={classes.middleLine} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={compass} alt="" />    
                </div>

              <Grid  item className={classes.gridItem} xs={12} sm={5} md={3} >
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                        <img className={classes.compass} src={image} alt="" className={classes.Image} />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography type="h2">Nombre del lugar</Typography>
                        <Typography type="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque natus nulla necessitatibus laboriosam explicabo porro, corrupti, optio expedita quam placeat officia consectetur asperiores. Earum modi magnam repellat ut doloremque?</Typography>
                    </CardContent>
                </Card>  
              </Grid>
              
        </Grid>
    </div>
  )
}

export default PlaceToVisit