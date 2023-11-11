import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Button, Divider, Modal} from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    overflow: "scroll",
    maxHeight: "90%"
};

interface NewWagerModalProps {
    modalOpen: boolean,
    toggleModalOpen: () => void
}

export default function NewWagerModal({modalOpen, toggleModalOpen}: NewWagerModalProps) {

    return (
        <Modal
            open={modalOpen}
            onClose={toggleModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography gutterBottom variant="h4" component="div">
                    <u>+</u>wager
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="wager-amount-field"
                            label="Amount"
                            variant="filled"
                            placeholder="$0.00"
                            sx={{ width: "25%" }}
                            size={"small"}
                        />
                        <TextField
                            id="wager-field"
                            label="What's the bet?"
                            variant="filled"
                            placeholder="Title"
                            sx={{ width: "50%" }}
                            size={"small"}
                        />
                    </div>
                </Box>
                <Divider/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography
                        sx={{ mt: 0.5 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Maker
                    </Typography>
                    <div>
                        <TextField
                            id="maker-firstName-field"
                            label="First Name"
                            variant="filled"
                            size={"small"}
                        />
                        <TextField
                            id="maker-lastName-field"
                            label="Last Name"
                            variant="filled"
                            size={"small"}
                        />
                    </div>
                    <Divider/>
                    <Typography
                        sx={{ mt: 0.5 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Taker
                    </Typography>
                    <div>
                        <TextField
                            id="taker-firstName-field"
                            label="First Name"
                            variant="filled"
                            size={"small"}
                        />
                        <TextField
                            id="taker-lastName-field"
                            label="Last Name"
                            variant="filled"
                            size={"small"}
                        />
                    </div>
                </Box>
                <Divider/>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1 } }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography
                        sx={{ mt: 0.5 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Additional details
                    </Typography>
                    <div>
                        <TextField
                            id="odds-field"
                            label="Odds"
                            variant="filled"
                            defaultValue="1:1"
                            sx={{ width: "25ch" }}
                            size={"small"}
                        />
                        <TextField
                            id="description-field"
                            label="Description"
                            variant="filled"
                            multiline
                            rows={3}
                            fullWidth
                            size={"small"}
                        />
                    </div>
                </Box>
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button
                            variant="contained"
                            onClick={toggleModalOpen}
                            size="small"
                        >
                            Cancel
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            endIcon={<SendIcon/>}
                            onClick={toggleModalOpen}
                            size="small"
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Box>
        </Modal>
    );
}
