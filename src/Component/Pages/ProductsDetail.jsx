import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Data } from '../../API/Api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../Pages/ProductDescription.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import { useReducer } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import { Data } from '../../API/Api';



const ProductsDetail = () => {

    const reducer = (state, action) => {

        // switch (action) {
        if (action === "add" && state >=1 ) {
            return state + 1;
        }
        if (action === "subtract" && state >1) {
            return state - 1;
        }
        else{
            return state
        }
        
    }
    const [state, dispatch] = useReducer(reducer, 1)
    const { product_code } = useParams();

    const [size, setSize] = React.useState('small');

    const handleChange = (event, newAlignment) => {
        event.preventDefault();
        setSize(newAlignment);
    };

    const { Products } = Data;
    const { Cart } = Data;


    const product = Products.filter((products, index) => (
        products.product_code === product_code
    ));

    if (!product) {
        return (
            <h3>not found</h3>
        )
    }
    const AddCart = () => {
        const item = product[0].item
        const image = product[0].image
        const Price = product[0].Price;
        const intPrice = parseInt(Price.slice(0 , -1));
        // console.log(typeof(intPrice));
        // console.log(intPrice);
        const collectivePrice = intPrice * state;
        Cart.push({ size, state, item, image, Price, collectivePrice });
        // alert("Item has been added into the card");
    }

    return (
        <div className="details">
            {product.map(({ item, id, product_code, description, image, Price, gender }) => {
                return (
                    <>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea >
                                <CardMedia
                                style={{height: 300}}
                                    component="img"
                                    height="100"
                                    image={image}
                                    alt="green iguana"
                                />
                                <h5 style={{color: "red" , textAlign:"center"}}>{Price}</h5>
                            </CardActionArea>
                        </Card>
                        <CardContent className="Cardcontent">
                            <Typography gutterBottom variant="h5" component="div">
                                <h2 className="title">{item}</h2>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p className="desc">{description}</p>
                            </Typography>
                            <Typography className="size quantity">
                                <Typography className="SizeBtn"><p>Size</p>
                                    <ToggleButtonGroup
                                        variant="primary"
                                        color="success"
                                        value={size}
                                        exclusive
                                        onChange={handleChange}
                                    >
                                        <ToggleButton value="small">"S"</ToggleButton>
                                        <ToggleButton value="meduim">"M"</ToggleButton>
                                        <ToggleButton value="large">"L"</ToggleButton>
                                    </ToggleButtonGroup>
                                </Typography>
                                <Typography className="QuantityBtn">
                                    <p>Quantity</p>
                                    <ToggleButtonGroup>
                                        <ToggleButton  onClick={() => dispatch("subtract")}><RemoveIcon /></ToggleButton>
                                        <ToggleButton ><input style={{ width: 40 }} type="text" value={state} /></ToggleButton>
                                        <ToggleButton  onClick={() => dispatch("add")}><AddIcon /> </ToggleButton>
                                    </ToggleButtonGroup>

                                </Typography>
                            </Typography>

                            <Button variant="contained" style={{ backgroundColor: "black",  marginTop: 30 }} className="button" onClick={AddCart} >Add to Cart</Button>
                        </CardContent>

                    </>
                )
            })}

        </div>
    )
}

export default ProductsDetail
