import React from "react";
import { Paper } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import WagerDetailModal from "../components/WagerDetailModal";
import NewWagerModal from "../components/NewWagerModal";
import WagerDataContextProvider from "../components/hooks/WagerDataContext";
import CommunityHome from "./CommunityHome";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(1, 0)
    },
    paper: {
      bgcolor: "#FFFFFF"
    }
  })
);

const LandingPage = React.memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WagerDetailModal />
      <NewWagerModal />
      <WagerDataContextProvider>
        <Paper className={classes.paper} elevation={0}>
          <CommunityHome />
        </Paper>
      </WagerDataContextProvider>
    </div>
  );
});

export default LandingPage;
