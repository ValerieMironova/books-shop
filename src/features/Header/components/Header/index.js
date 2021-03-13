import React from 'react';
import {useStyles} from "./style.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import Badge from "@material-ui/core/Badge";

const Header = ({cart}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.container_total}>
                    <div className={classes.container}>
                        <Box className={classes.header_top}>
                            <List className={classes.header_top_list}>
                                <ListItem button className={classes.header_top_li}>
                                    <ListItemText primary="Ваш город: Указать город" />
                                </ListItem>
                                <ListItem button className={classes.header_top_li}>
                                    <ListItemText primary="Адреса магазинов" />
                                </ListItem>
                                <ListItem button className={classes.header_top_li}>
                                    <ListItemText primary="Бонусная программа" />
                                </ListItem>
                            </List>
                            <Box className={classes.header_top_box}><AccountCircleIcon/>Войти</Box>
                        </Box>
                    </div>
                </div>

                <div className={classes.container}>
                    <div className={classes.header_bottom}>
                        <Link className={classes.logo} to="/">LOGO</Link>

                        <Badge className={classes.cart} color="secondary" badgeContent={cart.totalCount} showZero>
                            <Link to="/cart" className={classes.cartIcon}><AddShoppingCartIcon fontSize="large"/></Link>
                        </Badge>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Header;
