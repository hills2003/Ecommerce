import React, { useState } from 'react';
import { Grid , Button ,Card ,Paper ,TextField, CardMedia, CardContent ,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import blue from "../image/blue.jpg";
import { Link } from "react-router-dom";
//import {signup} from "../Config/AuthProvider";
import {useAuth }from "../Config/AuthProvider";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles({
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
function Signup(props) {
    const classes =useStyles();
    const [error,setError]=useState('');
    const [button,setButton]=useState(false);
    const history =useHistory();
    const {signup} =useAuth();
    const formik =useFormik({
        initialValues:{
        email:'',
        password:'',
        passwordconfig:''
        },
        validationSchema:Yup.object({
            email:Yup.string().email('invalid email type').required('email is required'),
            password:Yup.string().required('password is required'),
            passwordconfig:Yup.string().required('required')
        }),

       onSubmit :async (values)=>{
           if (formik.values.password !== formik.values.passwordconfig){
               return setError('error signin-up');
           }
           try{
              setError('');
              setButton(true);
              await signup(formik.values.email,formik.values.password);
              history.push('/')
           }
           catch{
               setError('failed to sign up')
           }
           setButton(false);
       }
    })
    return (
        <div className={classes.center}>
            
            <Card>
            
               <form onSubmit={formik.handleSubmit}>
                   {error ?<div>{error}</div> :''}
               <Grid container>   
                    <Grid item xs={2}> <label style={{fontSize:'18px'}}> Email:</label> </Grid>
                            <Grid item xs={10}>
                                <TextField label='email' name='email' onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.email} onChange={formik.handleChange} />
                                {formik.touched.email && formik.errors.email ?<div>{formik.errors.email}</div>:''}
                            </Grid>
                        
                        <Grid item xs={2}> <label style={{fontSize:'18px'}}> password: </label></Grid>
                            <Grid item xs={10}>
                                    <TextField name='password' label='password' onBlur={formik.handleBlur} variant='outlined' style={{margin:'20px'}} color='primary' value={formik.values.password} onChange={formik.handleChange} />
                                     {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div>:''}
                                </Grid>
                         
                        <Grid item xs={2}><label style={{fontSize:'18px'}}>
                                password-confirm:</label>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField label='password-confirm' name='passwordconfig' onBlur={formik.handleBlur} style={{margin:'20px'}} variant='outlined' color='primary' value={formik.values.passwordconfig} onChange={formik.handleChange} />  
                                 {formik.touched.passwordconfig && formik.errors.passwordconfig ? <div>{formik.errors.passwordconfig}</div>:''}
                            </Grid>
                            
                        <br />
                        <Grid item xs={2}>
                            <Button disabled={button} variant='outlined' color='primary' type='submit'>submit</Button>
                        </Grid>

                        
                        
                  </Grid>          
               </form>
               <h5> <Link to="/signin" >already have an account </Link></h5>
               
                    
            </Card>
        </div>
    );
}

export default Signup;