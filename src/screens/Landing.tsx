import React, { useRef, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import WagerFeed from "../components/WagerFeed";
import { WagerData } from "../global/types";
import WagerDetailModal from "../components/WagerDetailModal";
import NewWagerModal from "../components/NewWagerModal";
import WagerDataContextProvider from "../components/hooks/WagerDataContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3)
    },
    paper: {
      margin: `${theme.spacing(5)}px auto`
    }
  })
);

const LandingPage = React.memo(() => {
  const [betDetailModalOpen, setBetDetailModalOpen] = useState(false);
  const selectedWager = useRef<WagerData>();
  const handleBetDetailOpen = (wagerData: WagerData) => {
    setBetDetailModalOpen(true);
    selectedWager.current = wagerData;
  };
  const handleBetDetailClose = () => setBetDetailModalOpen(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WagerDetailModal
        wagerData={selectedWager.current}
        modalOpen={betDetailModalOpen}
        handleClose={handleBetDetailClose}
      />
      <NewWagerModal />
      <WagerDataContextProvider>
        <Paper className={classes.paper} elevation={0}>
          <Grid container wrap="nowrap" spacing={2}>
            <WagerFeed handleOpen={handleBetDetailOpen} />
          </Grid>
        </Paper>
      </WagerDataContextProvider>
    </div>
  );
});

export default LandingPage;
