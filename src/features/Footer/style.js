import { makeStyles } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";


export const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        backgroundColor: blue['300'],
    },
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '30px',
        color: 'white',
    },
    footer_subscribe: {
        backgroundColor: blue['700'],
        marginLeft: '10px',
        marginTop: '15px',
    },
    footer_field: {
        width: '300px',
        marginTop: '10px',
    },
    footer_title: {
        marginBottom: '10px',
    },

}));
