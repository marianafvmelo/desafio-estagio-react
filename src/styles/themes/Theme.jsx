import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    white: '#FFF',
    black: '#000',

    lightBlue: '#4eb6f4',
    mediumBlue: '#317199',
    darkBlue: '#275777',
    darkerBlue: '#1a374c',

    lighterGray: '#f8f2f2b8',
    lightGray: '#ECECEC',
    mediumGray: '#D0D0D0',
    darkGray: '#808080',


    success: '#5CB85C',
    danger: '#FF0000',
    default: '#F7F7F7',
  },
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);