import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Button, Divider, Modal} from "@material-ui/core";

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
                    +wager
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
                            sx={{ width: "20%" }}
                        />
                        <TextField
                            id="wager-field"
                            label="What's the bet?"
                            variant="filled"
                            placeholder="Title"
                            sx={{ width: "60%" }}
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
                        />
                        <TextField
                            id="maker-lastName-field"
                            label="Last Name"
                            variant="filled"
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
                        />
                        <TextField
                            id="taker-lastName-field"
                            label="Last Name"
                            variant="filled"
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
                        />
                        <TextField
                            id="description-field"
                            label="Description"
                            variant="filled"
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </div>
                </Box>
                <Button
                    color="secondary"
                    variant="contained"
                    endIcon={"$"}
                    onClick={toggleModalOpen}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
}
