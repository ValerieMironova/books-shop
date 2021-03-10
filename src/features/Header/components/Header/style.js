import { fade, makeStyles } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },


    header_top: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
    },
    container_total: {
        borderBottom: '1px solid white',
    },
    header_top_list: {
        display: 'flex',
        justifyContent: 'center',
    },
    header_top_box: {
      marginRight: '40px',
      marginTop: '10px',
    },
    header_top_li: {
        marginRight: '50px !important',
        padding: '0',
        width: '250px !important'
    },
    header: {
        width: '100%',
        backgroundColor: blue['300']
    },
    header_bottom: {
        margin: '0',
        backgroundColor: blue['200'],
        minHeight: '150px',
        display: 'flex',
        justifyContent: "space-between",
        padding: '0 30px',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    logo: {
        textDecoration: 'none !important',
        fontSize: '40px',
        color: 'white',
        '&:hover': {
            color: 'red'
        }
    },

    cartIcon: {
        textDecoration: 'none !important',
        fontSize: '40px',
        color: 'white',
        '&:hover': {
            color: 'red'
        }
    }
}));
