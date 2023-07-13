import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TripAdvisorContextProvider } from './contexts/tripAdviserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TripAdvisorContextProvider>
        <App />
      </TripAdvisorContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
