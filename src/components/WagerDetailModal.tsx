import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {WagerData} from "../globalTypes";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
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
                <Typography component="h2" id="modal-modal-title" variant="h5">
                    {wagerData?.title}
                </Typography>
                <Typography>
                    Description: {wagerData?.description}
                </Typography>
                <Typography>
                    Maker: {wagerData?.maker.firstName} {wagerData?.maker.lastName}
                </Typography>
                <Typography>
                    Taker: {wagerData?.taker.firstName} {wagerData?.taker.lastName}
                </Typography>
                <Typography>
                    Value: ${wagerData?.value}
                </Typography>
                <Typography>
                    Odds: {wagerData?.odds}
                </Typography>
                <Typography>
                    CreateDate: {wagerData?.createDate}
                </Typography>
            </Box>
        </Modal>
    );
}
