import React,{useState} from 'react';
import { Route } from "react-router-dom";
import { useAuth } from "../Config/AuthProvider";
import {Redirect} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest}) {
    const {currentUser} = useAuth();
    const [test,setTest] =useState('');

    // private route component which renders a particular component if users are authenticated
    return (
        <Route
        {...rest} 
        render={(props) => {
            return currentUser ? <Component {...props} /> : <Redirect to ='/signin' />}}>
            
        </Route>
    );
}
export default PrivateRoute;