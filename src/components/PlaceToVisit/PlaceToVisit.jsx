import React from 'react';
import { makeStyles } from '@material-ui/styles';

            //scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';

import compass from '../../assets/icons/compass.png';

const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: '100vh',
        position: 'relative',
        // marginBottom: '400px',
    },
    grid:{
        width: '100%',
        minHeight: '100vh',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '100px',
            gap: '100px',
          },
        },
        
        gridItem: {
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                justifyContent: 'center',
              },
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
        overflow: 'hidden',
        boxShadow: '0 0 20px 5px #111',

        [theme.breakpoints.down('xs')]: {
            width: '50%',
            zIndex: 50,
          },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            zIndex: 50,
          },
    },
    cardMedia:{
        height: '60%'
    },
    cardContent:{
        height: '40%',
    },
    body1: {
        fontSize: '.8rem',
    },
    Image: {
        height: '100%',
    }, 
    middleLine: {
        position: 'absolute',
        width: '40px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    
    compass: {
        width: '100%',
    }
    
}));


const PlaceToVisit = ({ pairIslands }) => {
    const classes = useStyles();
        
    AOS.init(
        {
            offset: 200, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        }

    ); //active animations
    
  return (
    <div className={classes.root} id="test">
        <Grid container className={classes.grid} justifyContent='space-evenly' alignItems='center'>
          
        {pairIslands.map((island, i)=>(
                <Grid key={i} item className={classes.gridItem} xs={12} sm={4} md={3} >
                    <Card data-aos="zoom-in" className={classes.card}>
                        <CardMedia className={classes.cardMedia}>
                            <img src={island.img} alt="" className={classes.Image} />
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography type="h2" gutterBottom fontSize='5rem' className={classes.CardTitle}> { island.name } </Typography>
                            <Typography type="body1" className={classes.body1}> { island.description } </Typography>
                        </CardContent>
                    </Card>  
                </Grid>          
        ))}

                <div className={classes.middleLine} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img className={classes.compass} src={compass} alt="" />    
                </div>

        </Grid>
    </div>
  )
}

export default PlaceToVisit