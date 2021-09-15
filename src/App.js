import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Detail from "../src/pages/Detail";
import "./App.css";
import { useState } from "react";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={Detail} />
        </Router>
    );
}

export default App;