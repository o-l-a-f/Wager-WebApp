import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NewBetModalContextProvider from "./components/hooks/NewBetModalContext";
import CurrentScreen from "./routes";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AmplifyConfiguration } from "./api/amplify";
import "@aws-amplify/ui-react/styles.css";
import "./styles.css";
import { Header, SignInFooter, SignInHeader } from "./screens/login";

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

AmplifyConfiguration.configureAmplify();

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

export default withAuthenticator(App, {
  signUpAttributes: [
    "email",
    "family_name",
    "given_name",
    "phone_number"
  ],
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    }
  }
});
