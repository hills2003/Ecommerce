import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Toolbar ,Grid} from "@material-ui/core";
import Chat from "./Chat";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import Status from "./Status";
import { useAuth } from "../Config/AuthProvider";
//import {AuthProvider} from "../Config/AuthProvider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
   
    return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  status:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'50px'
  },
  chats:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
          <Toolbar>
            <Typography>Futo Social Forum</Typography>
          
            <Tabs indicatorColor='white' value={value} onChange={handleChange} aria-label="simple tabs example">
                {/*<Tab  icon={<HomeIcon />} {...a11yProps(0)} /> */}  
                <Tab  icon={<ChatBubbleIcon />}  {...a11yProps(1)} />
            </Tabs>
            
          </Toolbar>
        
      </AppBar>
     {/* <TabPanel className={classes.status} value={value} index={0}>
          <Status />
     </TabPanel>*/}
      <TabPanel value={value} className={classes.chats} index={0}>
          <Chat /> 
        
      </TabPanel>
      
    </div>
  );
}
