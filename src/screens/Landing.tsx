import React, {useEffect, useRef, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WagerFeed from "../components/WagerFeed";
import {WagerData} from "../global/types";
import callGraphQL from "../api/wagerServiceClient";
import {ListBetsResponse} from "../api/API";
import {mapListBetsToWagerData, WagerQueries} from "../api/serviceUtils";
import WagerDetailModal from "../components/WagerDetailModal";
import NewWagerModal from "../components/NewWagerModal";
import {customWagerSort} from "../utils/wagerUtils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            margin: `${theme.spacing(5)}px auto`,
        },
    }),
);

interface LandngPageProps {
    newBetModalOpen: boolean
    toggleNewBetModalOpen: () => void
}

export default function LandingPage({newBetModalOpen, toggleNewBetModalOpen}: LandngPageProps) {
    const [wagers, setWagers] = useState<WagerData[]>([]);

    const [betDetailModalOpen, setBetDetailModalOpen] = useState(false);
    const handleBetDetailOpen = (wagerData: WagerData) => {
        setBetDetailModalOpen(true)
        selectedWager.current = wagerData;
    };
    const handleBetDetailClose = () => setBetDetailModalOpen(false);
    const selectedWager = useRef<WagerData>();

    const classes = useStyles();

    useEffect(() => {
        async function getData() {
            try {
                const betsData = await callGraphQL<ListBetsResponse>(WagerQueries.listBets);
                const wagersData = mapListBetsToWagerData(betsData);
                const sortedWagers = customWagerSort(wagersData);
                setWagers(sortedWagers);
            } catch (error) {
                console.error("Error fetching bets", error);
            }
        }
        getData();
    }, []);

    return (
        <div className={classes.root}>
            <WagerDetailModal wagerData={selectedWager.current} modalOpen={betDetailModalOpen} handleClose={handleBetDetailClose}/>
            <NewWagerModal modalOpen={newBetModalOpen} toggleModalOpen={toggleNewBetModalOpen}/>
            <Paper className={classes.paper} elevation={0}>
                <Grid container wrap="nowrap" spacing={2}>
                    <WagerFeed wagers={wagers} handleOpen={handleBetDetailOpen} />
                </Grid>
            </Paper>
        </div>
    )
}