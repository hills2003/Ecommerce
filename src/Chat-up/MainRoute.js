import React from 'react';
import { AuthProvider } from "../Config/AuthProvider";
import SimpleTabs from "./SimpleTabs";
import {BrowserRouter as Router ,Route ,Switch } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";
import PrivateRoute from "./PrivateRoute";
import Signout from "./Signout";

function MainRoute(props) {

    return (
        <>
        <Router>
            <AuthProvider>
                <Switch>
                   <PrivateRoute exact path="/" component={SimpleTabs}/>
                   <Route path="/signin" component={Signin} />
                   <Route  path="/signup" component={Signup} />
                   <Route  path="/signout" component={Signout} />
                   <Route  path="/forgot-password" component={Forgotpassword} />
                </Switch>
            </AuthProvider>
        </Router>
            
        </>
    );
}

export default MainRoute;