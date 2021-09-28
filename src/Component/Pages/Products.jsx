// import axios from 'axios';
import React from 'react';
import { Data } from '../../API/Api';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link , Outlet } from 'react-router-dom';
// import { Box, grid } from '@mui/system';
// import Grid from '@mui/material/Grid';
import '../Pages/Products.css';
// import axios from 'axios';



const Products = () => {
    // const response = Data;
    const {Products} = Data;
    console.log(Products)
    // console.log(response);
    return (
        <div>
            <div className="container">
                {Products.map(({item , id , product_code , description , image , Price , gender} , index) => {
                    return (
                        <>
                            <Card sx={{ maxWidth: 380, margin: 3 }} md={10} >
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={image}
                                    alt="green iguana"
                                    style={{ height: 200 }}
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="div">
                                        
                                    </Typography> */}
                                    <Typography variant="body2" color="text.secondary">
                                        <h5><b>{item}</b></h5>
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ height: 30 }}>
                                    <Typography>
                                        <p style={{ color: "red", fontSize: 25 }}>{Price}</p>
                                    </Typography>
                                </CardActions>
                                <Link to={product_code}>
                                    <Button variant="contained" color="success" onClick={() => { console.log(index); console.log(id) }} style={{marginBottom: 0}}>Buy Now</Button>
                                </Link>
                        <Outlet/>
                            </Card>
                        </>
                    )
                })}
            </div>
        </div >
    )
}

export default Products

