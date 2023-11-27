import React, { createContext, useContext, useEffect, useState } from "react";
import { WagerData } from "../../global/types";
import WagerServiceClient from "../../api/wagerServiceClient";
import { customWagerSort } from "../../utils/wagerUtils";

const defaultContext: { wagerData: WagerData[]; setWagerData: (wagers: WagerData[]) => void } = {
  wagerData: [],
  setWagerData: () => 0
};

export const WagerDataContext = createContext(defaultContext);

// eslint-disable-next-line
// @ts-ignore
const WagerDataContextProvider = ({ children }) => {
  const [wagerData, setWagers] = useState<WagerData[]>([]);
  const setWagerData = (updatedData: WagerData[]) => setWagers(updatedData);

  const wagerClient = new WagerServiceClient();

  useEffect(() => {
    async function getData() {
      try {
        const betsData = await wagerClient.listAllBets();
        const sortedWagers = customWagerSort(betsData);
        setWagers(sortedWagers);
      } catch (error) {
        console.error("Error fetching bets", error);
      }
    }
    getData();
  }, []);

  return (
    <WagerDataContext.Provider value={{ wagerData, setWagerData }}>
      {children}
    </WagerDataContext.Provider>
  );
};

export const useWagerDataContext = () => useContext(WagerDataContext);

export default WagerDataContextProvider;
