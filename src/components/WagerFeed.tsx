import React from "react";
import { List } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import WagerCard from "./WagerCard";
import { WagerData } from "../global/types";
import { useWagerDataContext } from "./hooks/WagerDataContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  })
);

interface WagerFeedProps {
  handleOpen: (selected: WagerData) => void;
}

const WagerFeed = ({ handleOpen }: WagerFeedProps) => {
  const { wagerData } = useWagerDataContext();
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {wagerData.length &&
        wagerData.map((wager) => (
          <div key={wager.id}>
            <WagerCard wagerData={wager} handleOpen={handleOpen} />
          </div>
        ))}
    </List>
  );
};

export default WagerFeed;
