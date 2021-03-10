import React from 'react';
import {useStyles} from "./style.js";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {addItem} from "../../../../actions/cart";



const ProductMain = ({currentItem, dispatch}) => {
    const classes = useStyles();

    const addToCart = () => {
        dispatch(addItem(currentItem))
    };

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Box className={classes.main_part}>

                    <Box className={classes.media_part}>
                        <CardMedia
                            className={classes.media}
                            image={"/img/" + currentItem.img}
                        />
                    </Box>

                    <Box className={classes.description}>
                        <Typography variant="h5" component="h2">
                            {currentItem.name}
                        </Typography>
                        <Typography className={classes.author} color="textSecondary">
                            {currentItem.author}
                        </Typography>

                        <TableContainer>
                            <Table className={classes.table}>
                                <TableBody>
                                    <TableRow className={classes.table_row}>
                                        <TableCell className={classes.table_th}>Издательство</TableCell>
                                        <TableCell>{currentItem.publishing_house}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.table_th}>Год издания</TableCell>
                                        <TableCell>{currentItem.the_year_of_publishing}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.table_th}>Кол-во страниц</TableCell>
                                        <TableCell>{currentItem.pages}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.table_th}>Вес, кг</TableCell>
                                        <TableCell>{currentItem.weight}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.table_th}>Возрастные ограничения</TableCell>
                                        <TableCell>{currentItem.age}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box className={classes.purchase}>
                        <div className={classes.purchase_price}>
                            <Box>
                                <Typography className={classes.purchase_price}>
                                    {currentItem.price} р
                                </Typography>
                            </Box>
                        </div>
                        <Button className={classes.purchase_button} size="large"
                            onClick={() => addToCart()}>Купить</Button>
                    </Box>
                </Box>

                <Box className={classes.annotation}>
                    <Typography color="textSecondary">
                        Аннотация:
                    </Typography>
                    <Typography>{currentItem.annotation}</Typography>
                </Box>
            </Box>
        </React.Fragment>
    )

};

export default ProductMain;
