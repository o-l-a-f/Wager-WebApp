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

export default function LandingPage() {
    const [wagers, setWagers] = useState<WagerData[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = (wagerData: WagerData) => {
        setModalOpen(true)
        selectedWager.current = wagerData;
    };
    const handleClose = () => setModalOpen(false);
    const selectedWager = useRef<WagerData>();
    const classes = useStyles();

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
            <WagerDetailModal wagerData={selectedWager.current} modalOpen={modalOpen} handleClose={handleClose}/>
            <Paper className={classes.paper} elevation={0}>
                <Grid container wrap="nowrap" spacing={2}>
                    <WagerFeed wagers={wagers} handleOpen={handleOpen} />
                </Grid>
            </Paper>
        </div>
    )
}