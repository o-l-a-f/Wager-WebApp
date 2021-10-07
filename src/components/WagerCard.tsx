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
            backgroundColor: color,
            color: theme.palette.getContrastText(color),
            fontSize: "16px"
        },
        inline: {
            display: "inline"
        },
        listItem: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        },
        text: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    }))()
};

interface WagerCardProps {
    wagerData: WagerData,
    handleOpen: (selected: WagerData) => void
}

const WagerCard = ({wagerData, handleOpen}: WagerCardProps) => {
    const {createDate, maker, taker, title, value} = wagerData;
    const classes = useStyles(stringToColor(maker.firstName + maker.lastName));

    return (
        <ListItem
            alignItems="flex-start"
            classes={{ root: classes.listItem }}
            divider={true}
            onClick={() => handleOpen(wagerData)}
            style={{height: 100}}
        >
            <ListItemAvatar>
                <Avatar className={classes.avatar}>{maker.firstName.charAt(0)}{maker.lastName.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <div className={classes.listItem}>
                        <span><b>{maker.firstName}</b> bet <b>{taker.firstName}</b></span>  ${value}
                    </div>
                }
                secondary={
                    <React.Fragment>
                        {createDate}{" "}<PublicIcon fontSize="inherit"/>
                        <br/>
                        <Typography
                            className={classes.inline}
                            color="textPrimary"
                            component="span"
                            variant="body1"
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
