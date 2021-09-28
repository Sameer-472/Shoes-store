import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const navData = [
            
    {
        title: 'Home',
        cName: 'navText',
        path: '/',
        icon: <HomeIcon />
    },
    
    {
        title: 'Products',
        cName: 'navText',
        path: '/products',
        icon: <ShoppingBagIcon />
    },
    {
        title: 'Favourites',
        cName: 'navText',
        path: '*',
        icon: <FavoriteIcon />
    }
    // {
    //     title:  <ShoppingCartIcon />,
    //     cName: 'navText',
    //     path: '/cart',
    //     icon: <ShoppingCartIcon />
    // }
]
