import React from 'react';
import {makeStyles} from "@material-ui/core";
import { ChatSharp } from '@material-ui/icons';
import { useAuth } from "../Config/AuthProvider";
const useStyles = makeStyles({
    para1:{
        background:'blue',
        color:'white',
        maxWidth:'350px',
        padding:'10px',
        borderRadius:'18px'
    },
    para2:{
        background:'magenta',
        color:'white',
        maxWidth:'350px',
        padding:'10px',
        borderRadius:'18px'
    },
    left:{
        display:'flex',
        justifyContent:'flex-start',
    },
    right:{
        display:'flex',
        justifyContent:'flex-end',
    }
})
function Chatroom({chat}) {
    const classes = useStyles();
    const { currentUser } =useAuth();
    return (
        <div className={chat.name  == currentUser.email ? classes.right : classes.left}>
            <h5 className={chat.name  == currentUser.email  ? classes.para2 : classes.para1 }>{chat.text} </h5>
        </div>
    );
}

export default Chatroom;