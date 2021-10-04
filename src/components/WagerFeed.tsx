import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import WagerCard from "./WagerCard";
import {WagerData} from "../globalTypes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '54ch',
            backgroundColor: theme.palette.background.paper,
        }
    }),
);

interface WagerFeedProps {
    wagers: WagerData[]
}

const WagerFeed = ({wagers}: WagerFeedProps) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {wagers.length > 0 && wagers.map((wager) =>
                <div key={wager.id}>
                    <WagerCard
                        createDate={wager.createDate}
                        completed={wager.completed}
                        description={wager.description}
                        id={wager.id}
                        maker={wager.maker}
                        odds={wager.odds}
                        taker={wager.taker}
                        title={wager.title}
                        value={wager.value}
                    />
                    <Divider variant="inset" component="li" />
                </div>
            )}
        </List>
    )
}

export default WagerFeed;

