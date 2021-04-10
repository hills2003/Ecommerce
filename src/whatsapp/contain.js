import React,{useState} from 'react';
import {Grid,Link,Divider,Button,Badge,AppBar,Toolbar,Typography,Tabs,IconButton,Tab,List,Avatar,ListItemAvatar,ListItemText,ListItem,Paper} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {makeStyles} from "@material-ui/styles";
import blue from "../image/blue.jpg";
import blue1 from "../image/blue1.jpg";
import dark1 from "../image/dark1.jpg";
import light from "../image/light";
import c from "../image/1";
import s from "../image/2";
import {useAuth} from "../Config/AuthProvider";
import {storage} from "../Config/Firebase";

const theme = createMuiTheme({
    palette:{
        secondary:{
            main:'#424242'
        },
        primary:{
            main:'#00e676'
        }
    },
})
const theme1 = createMuiTheme({
    palette:{
        primary:{
            main:'#00e676'
        }
    },
})
const useStyles = makeStyles({
    align:{
        display:'flex',
        flexDirection:'column',
    },
    last:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
    }
})
function Contain(props) {
 const classes = useStyles();
    const [value,setValue]= useState(0);
    const [error,setError] = useState('');
    const [file,setFile] = useState("");
    /*const logout =async ()=>{
        try{
            setError('')
            await Logout()

        }catch{
            setError('failed to log out')
        }
    }*/
    const handlechange =(e,newValue)=>{
        setValue(newValue);
    }

    const uploader=(e)=>{
        alert('hi')
    }
    const content =[
        {avatar:blue,title:'ebuka',subtitle:'boy how are you',badge:0,date:'10-2-20'},
        {avatar:c,title:'lionel',subtitle:'boy how are you',badge:2,date:'10-7-20'},
        {avatar:s,title:'vivian',subtitle:'boy how are you',badge:1,date:'10-2-20'},
        {avatar:blue1,title:'hanniel',subtitle:'boy how are you',badge:1,date:'10-2-20'},
        {avatar:dark1,title:'coding exclusive',subtitle:'what about the project',badge:0,date:'10-2-20'},
        {avatar:light,title:'Dad',subtitle:'look how big you ve grown',badge:3,date:'10-2-20'},
        {avatar:c,title:'Bukky',subtitle:'victor where are you ',badge:2,date:'10-2-20'},
        {avatar:blue,title:'Felipe',subtitle:' hey man pardon i havent been online for a while now',badge:2,date:'10-2-20'},
        {avatar:s,title:'precious',subtitle:'i miss secondary school',badge:0,date:'10-2-20'},
        {avatar:light,title:'eniola',subtitle:'hey bruh',badge:2,date:'10-2-20'},
        {avatar:dark1,title:'miriam',subtitle:"hello adonis",badge:1,date:'10-2-20'},
        {avatar:blue1,title:'mary',subtitle:'hey boy',badge:2,date:'10-2-20'},
        {avatar:blue,title:'dammy',subtitle:'i am missing you victor ',badge:2,date:'10-2-20'},
        {avatar:s,title:'aunty blessing',subtitle:' how are you victor',badge:2,date:'10-2-20'},
        {avatar:c,title:'ebuka',subtitle:'hello victor',badge:0,date:'10-2-20'},
    ]
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar color='secondary'>
                <Toolbar>
                <Grid container style={{paddingTop:'20px'}}spacing={3}>
                <Grid container spacing={5} item xs={12}>
                    <Grid item xs={2}>
                        <Typography> WhatsApp</Typography>
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={1}><IconButton><SearchIcon style={{color:'white'}}/> </IconButton></Grid>
                    <Grid item xs={1}><IconButton><MenuIcon  style={{color:'white'}}/></IconButton></Grid>
                </Grid>
                <Grid style={{paddingTop:'5px'}} item xs={12} />
                <Grid spacing ={3} item container xs={12}>
                <Grid item xs={2} > <IconButton>
                   <label htmlFor='image'> <CameraAltIcon onChange={uploader}  style={{color:'white'}}/> </label> 
                </IconButton> 
                <input id='image' type='file'  style={{display:'none'}} />
                </Grid>
                <Grid item xs={10} >
                    <Tabs value={value} indicatorColor='primary' textColor='primary' onChange={handlechange}>
                        <Tab  label='CHATS' />
                        <Tab label='STATUS' />
                        <Tab label='CALLS' />     
                    </Tabs>    
                    </Grid>
                </Grid>
                </Grid>
                </Toolbar>
                </AppBar>
        </ThemeProvider>
        <ThemeProvider theme={theme1}>
         <Grid style={{paddingTop:'160px'}} color='primary' container spacing={2}>
             <List>
                 {error && <p>{error}</p>}
             {content.map(item => (
                 <Grid item xs='12'>
                    <ListItem color='primary' button>
                        <Badge showZero anchorOrigin={{vertical:'top',horizontal:'left'}} color='secondary' badgeContent={item.badge}><ListItemAvatar> <Avatar src={item.avatar} /> </ListItemAvatar> </Badge>
                        <div className={classes.vertical}>
                           <ListItemText><Typography variant='body1'>{item.title}</Typography></ListItemText>
                           <ListItemText><Typography variant='body2'>{item.subtitle}</Typography></ListItemText>
                        </div>
                        <div className={classes.last}>
                           <ListItemText><Typography variant='caption'>{item.date}</Typography></ListItemText>
                           
                        </div>
                        <Divider />
                    </ListItem>
                  </Grid>
             ))}
             </List>
         </Grid>
         </ThemeProvider>
      
        </div>
    );
}

export default Contain;