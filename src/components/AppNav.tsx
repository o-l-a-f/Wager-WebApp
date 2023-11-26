import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { useNewBetModalContext } from "./hooks/NewBetModalContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      alignItems: "stretch"
    },
    list: {
      width: 200
    },
    title: {
      flexGrow: 1,
      fontFamily: "Helvetica",
      fontWeight: "bold",
      marginLeft: theme.spacing(1)
    }
  })
);

const AppNav = React.memo(() => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { handleModalOpen } = useNewBetModalContext();

  const newBetOnClick = () => {
    handleModalOpen();
    toggleDrawerOpen();
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" elevation={1} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            _wager
          </Typography>
          <IconButton edge="start" color="inherit" onClick={toggleDrawerOpen}>
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawerOpen}>
            <div className={classes.list}>
              <List>
                <ListItemButton onClick={newBetOnClick}>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Wager" />
                </ListItemButton>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default AppNav;
