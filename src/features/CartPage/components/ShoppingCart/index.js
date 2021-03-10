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

const ShoppingCart = (props) => {
    const classes = useStyles();

    const tableRows = props.cart.items.map(item => {
        return (
            <TableRow className={classes.table_row} key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price} р.</TableCell>
                <TableCell>{item.count} шт.</TableCell>
                <TableCell>{item.total} р.</TableCell>
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
                </TableRow>
                {tableRows}
            </TableBody>
        </Table>
    </TableContainer>;

    const emptyCart = <Typography color="textSecondary">Ваша корзина пуста</Typography>;

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

