import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  AppBar,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { useNewBetModalContext } from "./hooks/NewBetModalContext";
import { useAuthenticator } from "@aws-amplify/ui-react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      alignItems: "stretch"
    },
    list: {
      width: 250
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
  const { signOut } = useAuthenticator((context) => [context.user]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { handleModalOpen } = useNewBetModalContext();
  const newBetOnClick = () => {
    handleModalOpen();
    toggleDrawerOpen();
  };

  const [expanderOpen, setExpanderOpen] = React.useState(false);
  const handleClick = () => {
    setExpanderOpen(!expanderOpen);
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
              <List
                sx={{ bgcolor: "background.paper" }}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Settings
                  </ListSubheader>
                }
              >
                <ListItem disablePadding>
                  <ListItemButton onClick={newBetOnClick}>
                    <ListItemIcon>
                      <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Wager" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Account" />
                    {expanderOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={expanderOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={signOut}>
                      <ListItemText primary="Sign out" />
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default AppNav;
