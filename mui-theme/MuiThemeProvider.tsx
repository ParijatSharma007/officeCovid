"use client"


import React, { createContext, useMemo, useState } from "react";
// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import { MuiThemeOptions } from "./_muiTheme";
import { PaletteMode } from "@mui/material";


export function getInitialProps(context : any){

  console.log(context);
}


// Mui theme set up provider for whole application
export const MuiThemeContext = createContext({})

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {

  var settedTheme : any = 'dark'

  if (typeof window !== "undefined") {
    if(window.localStorage.getItem('theme')){
      settedTheme = window.localStorage.getItem('theme')
      console.log(settedTheme);
    }
  }

  const [mode, setMode] = useState<PaletteMode>(settedTheme)

  const themeOptions = useMemo(() => {
    return MuiThemeOptions(mode);
  }, [mode]);

  const theme = createTheme(themeOptions);



  return (
    <MuiThemeContext.Provider value={{mode, setMode}}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </MuiThemeContext.Provider>
  );
};

export default MuiThemeProvider;
