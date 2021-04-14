import React from 'react';
import ReactDom from "react-dom";
import SimpleTabs from "./Chat-up/SimpleTabs";
//import Contain from "./whatsapp/contain";
import Signup from "./Chat-up/Signup";
import Forgotpassword from "./Chat-up/Forgotpassword";
import  MainRoute  from "./Chat-up/MainRoute";
//import Contain from "./whatsapp/Contain";
ReactDom.render(<MainRoute />,
    document.getElementById('root'))
