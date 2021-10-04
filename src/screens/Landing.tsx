import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WagerFeed from "../components/WagerFeed";
import {WagerData} from "../globalTypes";
import callGraphQL from "../api/wagerServiceClient";
import {ListBetsResponse} from "../api/API";
import {mapListBetsToWagerData, WagerQueries} from "../api/serviceUtils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }),
);


export default function LandingPage() {
    const classes = useStyles();
    const [wagers, setWagers] = useState<WagerData[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const betsData = await callGraphQL<ListBetsResponse>(WagerQueries.listBets);
                const wagersData = mapListBetsToWagerData(betsData);
                setWagers(wagersData);
            } catch (error) {
                console.error("Error fetching bets", error);
            }
        }
        getData();
    }, []);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <WagerFeed wagers={wagers} />
                </Grid>
            </Paper>
        </div>
    )
}