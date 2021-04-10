import React, { useState } from 'react';
import { Grid , Button ,Card ,Paper ,TextField, CardMedia, CardContent ,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import blue from "../image/blue.jpg";
import { Link } from "react-router-dom";
import {useAuth} from "../Config/AuthProvider";

const useStyles = makeStyles({
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
function Forgotpassword(props) {
    const classes =useStyles();
    const {passwordreset} =useAuth();
    const [message,setMessage] =useState('');
    const [error,setError] =useState('');
    const [button,setButton] =useState(false);
    const {currentUser} =useAuth();
    const formik =useFormik({
        initialValues:{
        email:'',
        },
        validationSchema:Yup.object({
            email:Yup.string().email('invalid email type').required('email is required'),
        }),

       onSubmit :async (values)=>{
           try{
              setMessage('');
              setError('');
              setButton(true);
              await passwordreset(formik.values.email);
              setMessage('check mail for email reset link')
           }catch{
               setError('failed to reset email')
           }
           setButton(false);
       }
    })
    return (
        <div className={classes.center}>
            
            <Card>
            
               <form onSubmit={formik.handleSubmit}>
                   {error?<div>{error}</div> :''}
                   {message ?<div>{message}</div> : ''}
               <Grid container>   
                    <Grid item xs={2}> <label style={{fontSize:'18px'}}> Email:</label> </Grid>
                            <Grid item xs={10}>
                                <TextField label='email' name='email' onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.email} onChange={formik.handleChange} />
                                {formik.touched.email && formik.errors.email ?<div>{formik.errors.email}</div>:''}
                            </Grid>
                            
                        <br />
                        <Grid item xs={2}>
                            <Button disabled={button} variant='outlined' color='primary' type='submit'>submit</Button>
                        </Grid>
                  </Grid>          
               </form>
               <Link to="/signin">Sign in</Link>
            </Card>
        </div>
    );
}

export default Forgotpassword;