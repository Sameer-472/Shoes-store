import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './Main.css';





const Main = () => {
    return (
        <>
            <div className="main">
                <div className="content">
                    <h2>Shoespot youngs first choice</h2>
                    <p>ShoeSpot has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.</p>

                </div>
                <h2>Featured</h2>
                {itemData.map((item) => {
                    return (
                        <>
                            <Card sx={{ maxWidth: 500 , marginTop: 10 , marginLeft: 10 , marginRight: 10}} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.img}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Link to="/products"><Button size="small" variant="contained" sx={{backgroundColor: "brown"}} className="button" >
                                        {item.subtitle}
                                    </Button></Link>
                                </CardActions>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}

const itemData = [
    {
        img: "../../images/Main/1.jpg",
        subtitle: "Best collection for Men"

    },  
    {
        img: "../../images/Main/2.jpg",
        subtitle: "Best Collection for Women"
    },

]
export default Main
