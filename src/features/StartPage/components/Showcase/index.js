import React from 'react';
import {useStyles} from "./style.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {NavLink} from "react-router-dom";
import {addItem} from "../../../../actions/cart";

const Index = (props) => {
    const classes = useStyles();

    const card = props.items.map(item => {
        return(
            <Card className={classes.showcase_card} key={item.id}>
                    <CardActionArea style={{display: "flex", flexDirection: "column", height: '100%'}}>
                        <NavLink to={"/product/" + item.id} style={{display: "flex", flexGrow: 1, width: '100%', flexDirection: "column", textDecoration: 'none'}}>
                            <CardMedia
                                className={classes.media}
                                image={"/img/" + item.img}
                            />

                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography className={classes.author} color="textSecondary">
                                    {item.author}
                                </Typography>
                                <Typography variant="h6">
                                    {item.price} р
                                </Typography>
                            </CardContent>
                        </NavLink>

                        <CardActions style={{width: '100%'}}>
                            <Button className={classes.card_button} style={{marginLeft: '5px'}} size="large"
                                    onClick={() => addToCart(item)}>Купить</Button>
                        </CardActions>
                    </CardActionArea>

            </Card>
        )
    });

    const addToCart = (item) => {
        props.dispatch(addItem(item))
    };

    return (
        <React.Fragment>
                <div className={classes.container}>
                    {card}
                </div>
        </React.Fragment>
    );

};

export default Index;
