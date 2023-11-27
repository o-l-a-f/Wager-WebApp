import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { WagerData } from "../global/types";
import { stringToColor } from "../utils/stringUtils";

const useStyles = (color: string) => {
  return makeStyles((theme: Theme) =>
    createStyles({
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
    })
  )();
};

interface WagerCardProps {
  wagerData: WagerData;
  handleOpen: (selected: WagerData) => void;
}

const WagerCard = ({ wagerData, handleOpen }: WagerCardProps) => {
  const { createDate, maker, taker, title, value } = wagerData;
  const color = stringToColor(JSON.stringify(maker));
  const classes = useStyles(color);

  return (
    <ListItem
      alignItems="flex-start"
      classes={{ root: classes.listItem }}
      divider={true}
      onClick={() => handleOpen(wagerData)}
      style={{ height: 115 }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: color }}>
          {maker.firstName.charAt(0)}
          {maker.lastName.charAt(0)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.listItem}>
            <span>
              <b>{maker.firstName}</b> bet <b>{taker.firstName}</b>
            </span>{" "}
            ${value}
          </div>
        }
        secondary={
          <React.Fragment>
            {createDate} <PublicIcon fontSize="inherit" />
            <br />
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
};

export default WagerCard;
