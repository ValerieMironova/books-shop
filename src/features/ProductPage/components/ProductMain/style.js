import { makeStyles } from '@material-ui/core/styles';
import lime from "@material-ui/core/colors/lime";
import blue from "@material-ui/core/colors/blue";


export const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        display: 'block',
        //justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        marginBottom: '50px',
        //backgroundColor: lime['100'],

    },
    main_part: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '50px',
    },
    media_part: {
        minHeight: '400px',
        minWidth: '400px',
        backgroundColor: lime['200'],
    },
    media: {
        width: '100%',
        height: '100%'
    },

    purchase: {
      height: '200px',
      width: '300px',
      backgroundColor: blue['100'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    purchase_price: {
        fontSize: '38px',
    },
    purchase_button: {
        backgroundColor: blue['200'],
        height: '50px',
        width: '250px',
    },
    table_th: {
        padding: '0',
        color: 'gray',
    },
    table_row: {
        border: 'none',
    },

}));
