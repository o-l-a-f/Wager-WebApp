import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Transaction, User} from "../globalTypes";
import TransactionFeed from "../components/TransactionFeed";

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

const userPool:{ [index: string] : { user: User } } = {
    Mark: {
        user: {
            id: "u001",
            firstName: "Mark",
            lastName: "Meredith",
            initials: "MM",
            joined: "07/20/2021"
        }
    },
    Morgan: {
        user: {
            id: "u002",
            firstName: "Morgan",
            lastName: "Jones",
            initials: "MJ",
            joined: "07/20/2021"
        }
    },
    Olaf: {
        user: {
            id: "u003",
            firstName: "Olaf",
            lastName: "Schweinsberg",
            initials: "OS",
            joined: "07/20/2021"
        }
    }
}


const transactions: Transaction[] = [
    {
        createTime: new Date().toLocaleString(),
        completed: false,
        description: "Falling off is subjective, so it's a gentleman's bet",
        id: "t001",
        maker: userPool["Morgan"].user,
        odds: "1:1",
        taker: userPool["Olaf"].user,
        title: "Luka Doncic to fall off this year",
        value: 5.00
    },
    {
        createTime: new Date().toLocaleString(),
        completed: false,
        description: "Kaylee will take longer than 2hrs to get to the bar",
        id: "t001",
        maker: userPool["Mark"].user,
        odds: "1:1",
        taker: userPool["Morgan"].user,
        title: "Ol Mo arrives late",
        value: 5.00
    },
]

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <TransactionFeed transactions={transactions} />
                </Grid>
            </Paper>
        </div>
    )
}