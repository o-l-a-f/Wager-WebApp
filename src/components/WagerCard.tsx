import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PublicIcon from "@material-ui/icons/Public";
import Typography from "@material-ui/core/Typography";
import {WagerData} from "../globalTypes";
import {stringToColor} from "../utils/stringUtils";

const useStyles = (color: string) => {
    return makeStyles((theme: Theme) => createStyles({
        avatar: {
            color: theme.palette.getContrastText(color),
            backgroundColor: color
        },
        inline: {
            display: 'inline'
        }
    }))()
};

const WagerCard = ({
    completed,
    createDate,
    description,
    maker,
    odds,
    taker,
    title,
    value
}: WagerData) => {
    const classes = useStyles(stringToColor(maker.firstName + maker.lastName));

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar className={classes.avatar}>{maker.firstName.charAt(0)}{maker.lastName.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <React.Fragment>
                        <b>{maker.firstName}</b> bet <b>{taker.firstName}</b>  -  ${value}
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                        {createDate}{" "}<PublicIcon fontSize="inherit"/>
                        <br/>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {title}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

export default WagerCard;
