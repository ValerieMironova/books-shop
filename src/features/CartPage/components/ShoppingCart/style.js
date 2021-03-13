import { makeStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import lime from "@material-ui/core/colors/lime";


export const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        marginBottom: '50px',
    },
    registration_button: {
        backgroundColor: red['500'],
        height: '50px',
        width: '150px',
        color: 'white',
    },

    cart_table: {
        minHeight: '300px',
        minWidth: '700px',
        marginTop: '10px',
        backgroundColor: grey['300'],
    },
    cart_registration: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
    },

    cart_totalPrice: {
        marginRight: '20px'
    },
    table_row: {
        align: "center",
        //backgroundColor: lime['600'],
    },
    table_th: {
        textAlign: "center",
        backgroundColor: lime['300'],
        paddingLeft: 0,
    },
    /*
    table_td: {
        textAlign: "center",
        backgroundColor: lime['200'],
        paddingLeft: 0,
    },
     */

    table_td_name: {
        textAlign: "center",
        //backgroundColor: lime['200'],
        paddingLeft: 0,
        width: '40%',
    },
    table_td_delete: {
        textAlign: "center",
        //backgroundColor: lime['200'],
        paddingLeft: 0,
        width: '5%',
    }
}));
