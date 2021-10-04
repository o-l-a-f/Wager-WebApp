import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppNav from "./components/AppNav";
import CurrentScreen from "./routes";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        }
    },
    typography: {
        fontFamily: "sans-serif"
    }
});

function App() {
  return (
      <MuiThemeProvider theme={colorTheme}>
        <AppNav/>
        <BrowserRouter>
          <CurrentScreen/>
        </BrowserRouter>
      </MuiThemeProvider>
  );
}

export default App;
