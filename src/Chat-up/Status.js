import { CardHeader } from '@material-ui/core';
import React,{useState ,useEffect} from 'react';
import blue from "../image/blue.jpg";
import blue1 from "../image/blue1.jpg";
import dark1 from "../image/dark1.jpg";
import Statuspiece from "./Statuspiece";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import { storage ,database} from '../Config/Firebase';
import { useAuth } from "../Config/AuthProvider";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { v4 as uuidv4} from "uuid";
function Status(props) {
    const [card,setCard] = useState([{name:'victor',imgs:blue,id:1,numberOfLikes:5},{name:'daniel',id:2, imgs:blue1,numberOfLikes:10},{name:'rose',id:3,imgs:dark1,numberOfLikes:52}]);
     const [file,setFile]=useState('');
     const [pix,setPix]=useState('');
     const { currentUser } =useAuth();


     var email = currentUser.email
     var index = email.indexOf('@');
     var name =email.slice(0,index);
     
    
     const changer= async (e)=>{
         if(e.target.files[0]){
             setFile(e.target.files[0]);  
             if(storage.ref('statusImage').child(currentUser.email) !== null){
                await storage.ref('statusImage').child(currentUser.email).delete();
             }                                      
             
             const drop = storage.ref('statusImage').child(currentUser.email);
             const put =drop.put(file);
             put.on('state_changed',()=>{},()=>{},
             async (complete)=>{
                
                await storage.ref('statusImage').child(currentUser.email).getDownloadURL().then((imageurl)=>setPix(imageurl));
                if(database.ref(`status/${name}`) !== null){

                    await  database.ref(`status/${name}`).remove();
                }
                await  database.ref(`status/${name}`).set({
                    id:uuidv4(),
                    imgs:pix,
                    name:name,
                    likeState:false,
                    numberOfLikes:0,
                })

               
             })
         }
       else{
           alert('no file was chosen!!!')
       }
     }

     useEffect((e)=>{
            database.ref('status').on('value',(snapshot)=>{
                const arr =[];
                snapshot.forEach((snap)=>{
                    arr.push(snap.val())
                    setCard([arr,...card]);
                   })
            })
        
        
       
     },[])
    return (
        <>
            <div style={{position:'fixed',left:'10px'}}>
                <input style={{display:'none'}}  type='file' id ='upload' accept='image/' />
               <IconButton > <label htmlFor='upload'> <AddAPhotoIcon color='primary'/> </label> </IconButton>
            </div> 
            {card.map((item)=>(
                     <Statuspiece key={item.id} item={item}/>
                )
            )}
            
        </>
    );
}

export default Status; 