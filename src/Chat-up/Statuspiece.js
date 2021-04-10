import React, { useEffect, useState } from 'react';
import {Card ,CardContent,CardActions,CardHeader,Avatar ,IconButton} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import {FormControlLabel ,Badge ,Checkbox} from "@material-ui/core";
import { database } from '../Config/Firebase';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { useAuth } from "../Config/AuthProvider";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



function Statuspiece({item}) {
    const [value,setValue] =useState();
    const { currentUser }=useAuth();
    
        var email =currentUser.email;
        var index= email.indexOf('@');
        var name = email.slice(0,index);

        
    
    useEffect((e)=>{
       
        //  const likes = database.ref(`status/${name}`).on('value',(snapshot)=>{
        //      setValue(snapshot.val().likeState);
        //  });
         
           
           
    },[])
    console.log(name);
    
    const handleChange=async (e)=>{
        // await database.ref(`status/${name}`).update({
        //     likeState:!value,
        // })
        
        if (value === true){
            //database.ref('status').child(name).child('numberOfLikes').transaction((likes)=>likes + 1);

        }
        else{
            //database.ref('status').child(name).child('numberOfLikes').transaction((likes)=>likes - 1);
            
        }
    }
    return (
        <div>
             <Card style={{margin:'40px'}}>
                    <CardHeader avatar={<Avatar src={item.imgs} />} title={item.name}/>
                    <CardContent>
                        <img style={{width:'400px',height:'250px'}} src={item.imgs} alt='user pics'/>
                    </CardContent>
                    <CardActions>
                        
                           <FormControlLabel control={<Badge color='primary' badgeContent={item.numberOfLikes}><Checkbox icon={<ThumbUpAltOutlinedIcon color='primary' />} value={value} onChange={handleChange} checkedIcon={<ThumbUpIcon color='primary'/>} /></Badge>} />
                        
                    </CardActions>
                </Card>
            
        </div>
    );
}

export default Statuspiece;