import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import {Transaction} from "../globalTypes";
import TransactionCard from "./TransactionCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '54ch',
            backgroundColor: theme.palette.background.paper,
        }
    }),
);

interface TransactionFeedProps {
    transactions: Transaction[]
}

const TransactionFeed = ({transactions}: TransactionFeedProps) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {transactions.length > 0 && transactions.map((transaction) =>
                <div key={transaction.id}>
                    <TransactionCard
                        createTime={transaction.createTime}
                        completed={transaction.completed}
                        description={transaction.description}
                        id={transaction.id}
                        maker={transaction.maker}
                        odds={transaction.odds}
                        taker={transaction.taker}
                        title={transaction.title}
                        value={transaction.value}
                    />
                    <Divider variant="inset" component="li" />
                </div>
            )}
        </List>
    )
}

export default TransactionFeed;

