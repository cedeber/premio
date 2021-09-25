import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as extern from "./extern";
import { Worker } from "./pages/Worker";
import { Menu } from "./components/Menu";
import "./reset.scss";
import { Basic } from "./pages/Basic";
import { Failures } from "./pages/Failures";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

const App: React.FC = () => {
    return (
        <Router basename={(process.env.PUBLIC_URL as string) ?? "/"}>
            <Menu />
            <Switch>
                <Route path="/worker">
                    <Worker />
                </Route>
                <Route path="/failures">
                    <Failures />
                </Route>
                <Route path="/">
                    <Basic />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
