import React from "react";
import { List } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import WagerCard from "./WagerCard";
import { WagerData } from "../global/types";
import { useModalContext } from "./hooks/ModalContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  })
);

interface WagerFeedProps {
  wagerData: WagerData[];
}

const WagerFeed = ({ wagerData }: WagerFeedProps) => {
  const classes = useStyles();
  const { openSelectedWagerModal } = useModalContext();

  return (
    <List className={classes.root}>
      {wagerData.length &&
        wagerData.map((wager) => (
          <div key={wager.id}>
            <WagerCard wagerData={wager} handleOpen={openSelectedWagerModal} />
          </div>
        ))}
    </List>
  );
};

export default WagerFeed;
