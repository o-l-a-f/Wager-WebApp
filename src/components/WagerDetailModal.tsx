import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {WagerData} from "../global/types";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
};

interface WagerModalProps {
    wagerData?: WagerData,
    modalOpen: boolean,
    handleClose: () => void
}

export default function WagerDetailModal({wagerData, modalOpen, handleClose}: WagerModalProps) {

    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ my: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div">
                                wager
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div">
                                ${wagerData?.value}.00
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                        {wagerData?.description}
                    </Typography>
                </Box>
                <Divider/>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Status
                </Typography>
                <Typography variant="body2">{wagerData?.completed ? "Complete" : "Open"}</Typography>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Maker
                </Typography>
                <Typography variant="body2">{wagerData?.maker.firstName} {wagerData?.maker.lastName}</Typography>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Taker
                </Typography>
                <Typography variant="body2">{wagerData?.taker.firstName} {wagerData?.taker.lastName}</Typography>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Odds
                </Typography>
                <Typography variant="body2">{wagerData?.odds}</Typography>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Wager Date
                </Typography>
                <Typography variant="body2">{wagerData?.createDate}</Typography>
                <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Wager ID
                </Typography>
                <Typography variant="body2">{wagerData?.id}</Typography>
            </Box>
        </Modal>
    );
}
