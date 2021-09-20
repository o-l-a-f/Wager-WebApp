import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {deepOrange} from "@material-ui/core/colors";
import LanguageIcon from '@material-ui/icons/Language';
import Typography from "@material-ui/core/Typography";
import {Transaction} from "../globalTypes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500]
        },
        inline: {
            display: 'inline',
        }
    })
);

const TransactionCard = ({
    completed,
    createTime,
    description,
    maker,
    odds,
    taker,
    title,
    value
}: Transaction) => {
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar className={classes.orange}>{maker.initials}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={`${maker.firstName} bet ${taker.firstName} - $${value}`}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {title}
                        </Typography>
                        <br/>
                        {createTime}{" "}<LanguageIcon fontSize="small"/>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

export default TransactionCard;
