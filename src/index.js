import React from 'react';
import ReactDom from "react-dom";
import Hello from "./Hello"
import Shop from "./Shop"
import {Route ,BrowserRouter as Router ,Switch } from "react-router-dom";
ReactDom.render(
    
    <Router>
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/shop" component={Shop} />
        </Switch>
    </Router>,
    document.getElementById('root'))
