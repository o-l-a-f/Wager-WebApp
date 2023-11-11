import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            alignItems: "stretch"
        },
        list: {
            width: 200,
        },
        title: {
            flexGrow: 1,
            fontFamily: "Helvetica",
            fontWeight: "bold",
            marginLeft: theme.spacing(1)
        }
    }),
);

interface AppNavProps {
    toggleNewBetModalOpen: () => void
}

const AppNav = ({toggleNewBetModalOpen}: AppNavProps) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen)
    };

    const newBetOnClick = () => {
        toggleNewBetModalOpen()
        toggleDrawerOpen()
    }

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}
                color="primary"
                elevation={1}
                position="static"
            >
                <Toolbar>
                    <Typography className={classes.title} variant="h5" noWrap>
                        _wager
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawerOpen}
                    >
                        <MenuIcon fontSize="medium" />
                    </IconButton>
                    <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawerOpen}>
                        <div className={classes.list}>
                            <List>
                                <ListItem button={true} onClick={newBetOnClick}>
                                    <ListItemIcon><PostAddSharpIcon/></ListItemIcon>
                                    <ListItemText primary="New Wager"/>
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppNav;
