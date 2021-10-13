import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import * as extern from "./extern";
import { Basic } from "./pages/Basic";
import { Failures } from "./pages/Failures";
import "./reset.scss";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Menu />
            <Switch>
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

// Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service_worker.js").then(
        function (registration) {
            // Registration was successful
            console.log("ServiceWorker registration successful with scope: ", registration.scope);

            fetch("/.ping/whatever")
                .then((response) => response.text())
                .then((data) => console.log("sw", data));
        },
        function (err) {
            // registration failed :(
            console.warn("ServiceWorker registration failed: ", err);
        },
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
