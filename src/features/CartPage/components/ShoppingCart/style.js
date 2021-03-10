import { makeStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";


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
    cart_main: {
        width: '40%',
    },
    cart_table: {
        minHeight: '300px',
        marginTop: '10px',
        backgroundColor: grey['300'],
    },
    cart_registration: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cart_totalPrice: {
        marginRight: '20px'
    }
}));
