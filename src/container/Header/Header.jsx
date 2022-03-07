import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import   SortIcon   from '@material-ui/icons/Sort';
import   ExpandMoreIcon   from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '100vh',
    },
    appBar: {
        background: 'none',
        fontFamily: 'nunito',
    },    
    appBarTitle: {
        flexGrow: '1',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    Icon: {
        color:'#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: "#5aff3d"
    },
    titleContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        textAlign: 'center'
    },
    goDown:{
        color: '#5aff3d',
        fontSize: '4rem',
    }

}))


const Header = () => {
    const classes = useStyles();
    const [animate, setAnimate] = useState(false);

    useEffect(()=>{
        setAnimate(true);
    }, [])

  return (
    <div className={classes.root}>
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}>My <span className={classes.colorText}>Island.</span></h1>
                <IconButton />
                <SortIcon classes={classes.icon} />
            </Toolbar>
        </AppBar>


        <Collapse 
            in={animate}
             {...(animate ? { timeout: 2000 } : {})}
            >

            <div className={classes.titleContainer}>
                <h1 className={classes.title}>
                    Welcome to <br /> 
                    <span className={classes.colorText}>My Island</span>
                </h1>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
            </div>
        </Collapse>
    </div>
  )
}

export default Header