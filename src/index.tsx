import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { init } from '@amplitude/analytics-browser';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupAnalytics } from 'hooks/AnalyticsHook';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Oswald",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

setupAnalytics()

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
    <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals(_ => {});