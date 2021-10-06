import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import WagerCard from "./WagerCard";
import {WagerData} from "../globalTypes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: "100ch",
            backgroundColor: theme.palette.background.paper,
        }
    }),
);

interface WagerFeedProps {
    wagers: WagerData[]
    handleOpen: (selected: WagerData) => void
}

const WagerFeed = ({wagers, handleOpen}: WagerFeedProps) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {wagers.length > 0 && wagers.map((wager) =>
                <div key={wager.id}>
                    <WagerCard wagerData={wager} handleOpen={handleOpen}/>
                    <Divider variant="inset" component="li" />
                </div>
            )}
        </List>
    )
}

export default WagerFeed;

