import React, { useRef, useState } from "react";
import WagerFeed from "../components/WagerFeed";
import { useWagerDataContext } from "../components/hooks/WagerDataContext";
import { WagerData } from "../global/types";
import { Box, Stack, Tab, Tabs } from "@mui/material";

const filterClosedWagers = (wagers: WagerData[]) => wagers.filter((wager) => !wager.completed);

const CommunityHome = React.memo(() => {
  const { wagerData } = useWagerDataContext();
  const visibleWagers = useRef<WagerData[]>(wagerData);
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedValue(newValue);
    visibleWagers.current = newValue === 1 ? filterClosedWagers(wagerData) : wagerData;
  };

  return (
    <Stack alignItems="center" sx={{ width: "100%" }}>
      <Box
        sx={{
          borderRadius: 3,
          width: "50%",
          bgcolor: "#F3F6F9",
          paddingTop: 1,
          paddingBottom: 1
        }}
      >
        <Tabs value={selectedValue} onChange={handleChange} centered>
          <Tab label="All" />
          <Tab label="Open" />
        </Tabs>
      </Box>
      <WagerFeed wagerData={visibleWagers.current} />
    </Stack>
  );
});

export default CommunityHome;
