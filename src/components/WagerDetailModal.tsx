import React from "react";
import { Box, Divider, Grid, Modal, Typography } from "@mui/material";
import { useModalContext } from "./hooks/ModalContext";

const style = {
  // eslint-disable-next-line
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3
};

export default function WagerDetailModal() {
  const { selectedWager, closeSelectedWagerModal } = useModalContext();

  return (
    <Modal
      open={selectedWager !== undefined}
      onClose={closeSelectedWagerModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ my: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                _wager
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                ${selectedWager?.value}.00
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            {selectedWager?.description}
          </Typography>
        </Box>
        <Divider />
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Status
        </Typography>
        <Typography variant="body2">{selectedWager?.completed ? "Complete" : "Open"}</Typography>
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Maker
        </Typography>
        <Typography variant="body2">
          {selectedWager?.maker.firstName} {selectedWager?.maker.lastName}
        </Typography>
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Taker
        </Typography>
        <Typography variant="body2">
          {selectedWager?.taker.firstName} {selectedWager?.taker.lastName}
        </Typography>
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Odds
        </Typography>
        <Typography variant="body2">{selectedWager?.odds}</Typography>
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Wager Date
        </Typography>
        <Typography variant="body2">{selectedWager?.createDate}</Typography>
        <Typography sx={{ mt: 0.5 }} color="text.secondary" display="block" variant="caption">
          Wager ID
        </Typography>
        <Typography variant="body2">{selectedWager?.id}</Typography>
      </Box>
    </Modal>
  );
}
