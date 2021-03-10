import {makeStyles} from "@material-ui/core/styles";
import lime from "@material-ui/core/colors/lime";
import blue from "@material-ui/core/colors/blue";


export const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px'
    },
    showcase_card: {
        width: '300px',
        minHeight: '500px',
        marginBottom: '30px',
    },
    media: {
        height: '350px',
        marginBottom: '20px',
        backgroundColor: lime['300'],
    },
    card_button: {
        backgroundColor: blue['300'],
    },
    card_top: {

    },

}));
