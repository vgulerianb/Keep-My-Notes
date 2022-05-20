import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/index"
import NotesSection from "./pages/notes"
import ReactDOM from "react-dom/client";

function App() {
  return (
    <Routes>
      <Route path={`/`} exact element={<LoginScreen/>} />
      <Route path={`/notes`} exact element={<NotesSection/>} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
