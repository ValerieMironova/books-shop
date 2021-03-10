import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Box} from "@material-ui/core";
import {useStyles} from "./style.js";


const Categories = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [subMenuArr, setSubMenuArr] = React.useState([]);


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMouseEnter = (item, event) => {
        if(item.children){
            if(event && event.currentTarget) {
                setSubMenuArr(item.children);
                setAnchorEl(event.currentTarget);
            }
        } else{
            console.log('!!')
        }

    };


    const items = props.categories.map(item => {
        return (
            <ListItem key={item.id}  className={classes.menu_li} onMouseEnter={(event) => handleMouseEnter(item, event)}>
                <ListItemText primary={item.name} />
            </ListItem>
        )
    });


    return (
        <React.Fragment>
            <div className={classes.container_total}>
                <div className={classes.container}>
                    <Box className={classes.menu}>
                        <List className={classes.menu_list}>
                            {items}
                        </List>

                        <Menu open={Boolean(anchorEl)}
                              keepMounted
                              onClose={handleClose}
                              MenuListProps={{
                                  onMouseLeave: handleClose,
                              }}
                              anchorEl={anchorEl} >
                            {
                                subMenuArr.map(menuItem => <MenuItem key={menuItem.id}>{menuItem.name}</MenuItem>)
                            }
                        </Menu>

                    </Box>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Categories;
