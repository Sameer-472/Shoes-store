import React from 'react';
import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navData } from './navData';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// import HomeIcon from '@mui/icons-material/Home';


const MobNav = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // const usestyles = makeStyles({
    //     paper: {
    //         background: "black"
    //     }
    // });

    const list = (anchor) => (
        // const style = usestyles();
        <>
            {/* <div className="nav"> */}
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
                style={{ backgroundColor: "black", height: "100vh" }}
            >
                <List className="nav">
                    <img src="../../images/logo.png" style={{ width: 100, height: 90 }} alt="" srcset="" />

                    {navData.map((text, index) => (
                        <ListItem button key={text.title}>
                            <ListItemIcon style={{ color: "white" }}>
                                {text.icon}
                            </ListItemIcon>
                            <Link to={text.path} style={{ textDecoration: "none", color: "white" }}>
                                <ListItemText primary={text.title}/></Link>
                        </ListItem>
                    ))}
                     <ListItem button key="cart">
                            <ListItemIcon style={{ color: "white" }}>
                                 <ShoppingCartIcon />
                            </ListItemIcon>
                            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
                                <ListItemText primary="Cart"/></Link>
                        </ListItem>
                </List>
            </Box>
            {/* </div> */}
        </>
    );

    return (
        <div className="mobNav">
            <React.Fragment >
                <Button onClick={toggleDrawer("left", true)}>
                    {<MenuIcon fontSize="large" style={{ color: "white" }} />}
                </Button>
                    <Link to="/cart"><ShoppingCartIcon className="cartIcon" /></Link>
                <SwipeableDrawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}


export const Nav = () => {
    return (
        <>
            <MobNav />
            <div className="desktopNav">
                <nav>
                    <List>
                        <img src="../../images/logo.png" style={{ width: 130, height: 90 }} alt="" srcset="" />
                        {navData.map((text, index) => (
                            <ListItem button key={text.title}>
                                <Link to={text.path}>
                                    <ListItemText primary={text.title} /></Link>
                            </ListItem>
                ))}
                <ListItem button key="cart">
                                <Link to="/cart">
                                <ShoppingCartIcon /></Link>
                            </ListItem>
                </List>
                </nav>
            </div>
        </>
    )
}
