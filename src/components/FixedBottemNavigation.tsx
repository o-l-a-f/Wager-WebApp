import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction, Fab, Paper, styled } from "@mui/material";
import { useModalContext } from "./hooks/ModalContext";

type Navigation = "Network" | "Me";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto"
});

const FixedBottomNavigation = () => {
  const [value, setValue] = useState<Navigation>("Network");
  const { toggleNewBetModalOpen } = useModalContext();

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Network" icon={<PublicIcon />} />
        <StyledFab color="primary" aria-label="add" onClick={toggleNewBetModalOpen}>
          <AddIcon />
        </StyledFab>
        <BottomNavigationAction disabled={true} label="Me" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default FixedBottomNavigation;
