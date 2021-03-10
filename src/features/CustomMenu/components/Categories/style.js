import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },


    menu: {
        margin: '0',
    },
    menu_list: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    menu_li: {
        padding: '0',
        color: 'black',
        fontWeight: 'bold !important',

    },
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    container_total: {
        borderBottom: '1px solid grey',
    },
}));
