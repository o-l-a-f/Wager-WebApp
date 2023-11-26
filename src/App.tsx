import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NewBetModalContextProvider from "./components/hooks/NewBetModalContext";
import CurrentScreen from "./routes";

const colorTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  },
  typography: {
    fontFamily: "sans-serif"
  }
});

const App = React.memo(() => {
  return (
    <ThemeProvider theme={colorTheme}>
      <NewBetModalContextProvider>
        <AppNav />
        <BrowserRouter>
          <CurrentScreen />
        </BrowserRouter>
      </NewBetModalContextProvider>
    </ThemeProvider>
  );
});

export default App;
