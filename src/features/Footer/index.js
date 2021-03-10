import React from 'react';
import {useStyles} from "./style.js";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const Footer = () => {
    const classes = useStyles();
    const offlineList = ['Адреса магазинов','Услуги', 'Наши партнеры', 'О компании'];
    const onlineList = ['Доставка и оплата', 'Акции', 'Книги', 'Правила продажи'];

    const offline = offlineList.map(item => {
        return(
            <ListItem button key={item}>
                <ListItemText primary={item} />
            </ListItem>
        )
    });
    const online = onlineList.map(item => {
        return(
            <ListItem button key={item}>
                <ListItemText primary={item} />
            </ListItem>
        )
    });

    return (
        <React.Fragment>
            <div className={classes.footer}>
                <div  className={classes.container}>
                    <List className={classes.footer_offline}>
                        <Typography variant="h6">В наших магазинах</Typography>
                        {offline}
                    </List>
                    <List className={classes.footer_online}>
                        <Typography variant="h6">В интернет-магазине</Typography>
                        {online}
                    </List>
                    <List>
                        <Typography className={classes.footer_title} variant="h6">Подписка на новости</Typography>
                        <Typography>Будьте в курсе наших акций:</Typography>
                        <TextField className={classes.footer_field} id="outlined-basic" label="E-mail" variant="outlined"/>
                        <Button className={classes.footer_subscribe} size="large">Подписаться</Button>
                    </List>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Footer;
