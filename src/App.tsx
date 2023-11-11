import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import AppNav from "./components/AppNav";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import LandingPage from "./screens/Landing";

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
    const [newBetModalOpen, setNewBetModalOpen] = useState(false);
    const toggleNewBetModalOpen = () => setNewBetModalOpen(!newBetModalOpen);

    return (
      <MuiThemeProvider theme={colorTheme}>
        <AppNav toggleNewBetModalOpen={toggleNewBetModalOpen}/>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={
                      () => <LandingPage newBetModalOpen={newBetModalOpen} toggleNewBetModalOpen={toggleNewBetModalOpen}/>
                  }/>
              </Switch>
          </BrowserRouter>
      </MuiThemeProvider>
  );
}

export default App;
