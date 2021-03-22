/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div
        css={css`
          overflow: auto;
          margin: auto;
          height: 100vh;
          width: 375px;
          background: #FFFFFF;
        `}
      >
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
