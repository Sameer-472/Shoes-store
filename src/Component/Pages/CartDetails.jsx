import React from 'react';
import { useState , useEffect } from 'react';
import { Data } from '../../API/Api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import '../Pages/Cart.css';



// const { Cart } = Data;
const { Cart } = Data;




const CartDetails = () => {
    
    // console.log(sum);
    // condional rendering function 
    
    const Conditionalrender = () => {
        const cp = Cart.map(({collectivePrice})=>{
                return collectivePrice
        })
        if(cp.length > 0){
            var sum = cp.reduce((a ,b)=> a=a+b);
        }
        if (Cart.length === 0) {
            return (
                <div className="cart-empty">
                    <h1 className="Empty-title">No Products in your cart</h1>
                </div>
            )
        }
        else {
            return (
                <>
                   <div className="cart-container">
                   <table className="table">
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                        {Cart.map(({image, item, Price, state , size , collectivePrice})=>{
                            return(
                                <>
                                <tr style={{marginTop: 30}}>
                                    <td><img src={image} alt={item} style={{width: 200 , height:200}} /></td>
                                    <td> {item} </td>
                                    <td> {size} </td>
                                    <td> {collectivePrice}</td>
                                    <td> {state} </td>
                                </tr> <hr />
                                </>
                            )
                        })} 
                    </table>
                    <div className="total">
                        <Button style={{backgroundColor: "Black" , color: "white" , marginRight: 32}} varinat=""primary>Place Order</Button>
                        <h5>Total: {sum}$</h5>
                    </div>
                   </div>
                </>
            )
        }
    }

    return (
        <>
            {Conditionalrender()}
        </>
    )
}

export default CartDetails;
