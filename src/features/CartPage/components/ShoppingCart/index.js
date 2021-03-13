import React from 'react';
import {useStyles} from "./style.js";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from '@material-ui/icons/Delete';
import * as cartActions from "../../../../actions/cart"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ShoppingCart = (props) => {
    const classes = useStyles();

    const tableRows = props.cart.items.map(item => {
        return (
            <TableRow className={classes.table_row} key={item.id}>
                <TableCell className={classes.table_td_name}>{item.name}</TableCell>
                <TableCell className={classes.table_td_price}>{item.price} р.</TableCell>
                <TableCell className={classes.table_td_count}>
                    <Button onClick={() => addQuantity(item)}><AddIcon/></Button>
                    {item.count} шт.
                    <Button onClick={() => removeQuantity(item)}><RemoveIcon/></Button>
                </TableCell>
                <TableCell className={classes.table_td_total}>{item.total} р.</TableCell>
                <TableCell className={classes.table_td_delete}>
                    <Button onClick={() =>deleteItem(item)}><DeleteIcon/></Button>
                </TableCell>
            </TableRow>
        )
    });

    const cartTable = <TableContainer>
        <Table className={classes.table}>
            <TableBody>
                <TableRow className={classes.table_row}>
                    <TableCell className={classes.table_th}>Название</TableCell>
                    <TableCell className={classes.table_th}>Цена</TableCell>
                    <TableCell className={classes.table_th}>Количество</TableCell>
                    <TableCell className={classes.table_th}>Итог</TableCell>
                    <TableCell className={classes.table_th}/>
                </TableRow>
                {tableRows}
            </TableBody>
        </Table>
    </TableContainer>;

    const emptyCart = <Typography color="textSecondary">Ваша корзина пуста</Typography>;

    const deleteItem = (item) => {
        props.dispatch(cartActions.deleteItem(item))
    };
    const addQuantity = (item) => {
        props.dispatch(cartActions.addQuantity(item))
    };
    const removeQuantity = (item) => {
        props.dispatch(cartActions.removeQuantity(item))
    };

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Box className={classes.cart_main}>
                    <Typography>Ваша корзина:</Typography>

                    <Card className={classes.cart_table}>
                        { props.cart.items.length ? cartTable : emptyCart }
                    </Card>

                </Box>
                <Card className={classes.cart_registration}>
                    <Typography className={classes.cart_totalPrice}>
                        <Box fontSize={20}>Итого:</Box>
                        <Box fontWeight={500} fontSize={32}>{props.cart.totalCost} р</Box>
                    </Typography>
                    <Button className={classes.registration_button} size="large">Оформить заказ</Button>
                </Card>
            </Box>
        </React.Fragment>
    )

};

export default ShoppingCart;

