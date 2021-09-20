import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppNav from "./components/AppNav";
import CurrentScreen from "./routes";

function App() {
  return (
      <div>
        <AppNav/>
        <BrowserRouter>
          <CurrentScreen/>
        </BrowserRouter>
      </div>
  );
}

export default App;
