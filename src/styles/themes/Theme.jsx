import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    white: '#FFF',

    lightBlue: '#4eb6f4',
    mediumBlue: '#317199',
    darkBlue: '#275777',
    darkerBlue: '#1a374c',

    lightGray: '#ECECEC',
  },
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);