import React, { useState } from 'react';
import {Button } from "@material-ui/core";
import {useAuth} from "../Config/AuthProvider";
import {auth } from "../Config/AuthProvider";
import {useHistory} from "react-router-dom";
function Signout(props) {
    const {Logout} =useAuth();
    const history =useHistory();
    const [error,setError]= useState('')
    const signout = async ()=>{
        try{
           await Logout();
           history.push('/')


        }catch{
           setError('failed to log out')
        }
    }
    return (
        <div>
            {error ? <div>{error}</div> : ''}
            <Button onClick={signout} variant='contained'>signout</Button>
        </div>
    );
}

export default Signout;