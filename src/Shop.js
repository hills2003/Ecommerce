import React, { useEffect, useRef, useState } from 'react';
import "./App.css"
import bRing from "./images/bRing.jpg"
import {Link} from "react-router-dom";
import proof2 from "./images/proof2.jpg"
import proof5 from "./images/proof5.png"
import proof1 from "./images/proof1.jpg"
import pinky from "./images/pinky.png"
import nike from "./images/nike.jpg"
import jj from "./images/jj.png"
import twoshoes from "./images/twoshoes.jpg"
import { List } from '@material-ui/core';
import CardSearch from "./CardSearch";
function Shop(props) {
   const [value,setValue] =useState();

    const searchfunction =()=>{
        fetch(`https://fakestoreapi.com/products/category/${value}`)
        .then(res=>res.json())
        .then(json=>setList(json))
    }



     const jewelery =(e)=>{
        fetch(`https://fakestoreapi.com/products/category/${e.target.id}`)
        .then(res=>res.json())
        .then(json=>setList(json))
     }

     const men =(e)=>{
        fetch(`https://fakestoreapi.com/products/category/${e.target.id}`)
        .then(res=>res.json())
        .then(json=>setList(json))
     }

     const women =(e)=>{
        fetch(`https://fakestoreapi.com/products/category/${e.target.id}`)
        .then(res=>res.json())
        .then(json=>setList(json))
     }

    

    const [List,setList] =useState([
       
    ])
    return (
        <>
          <main >
              
              <div className="justify">
                 <div className="first">
                    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} name="text" placeholder="search jewelry,men's clothing,and women's clothing" />
                    <span onClick={searchfunction}><svg width="30" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 30C9.83335 30 8.35002 31.5 8.35002 33.3333C8.35002 35.1667 9.83335 36.6667 11.6667 36.6667C13.5 36.6667 15 35.1667 15 33.3333C15 31.5 13.5 30 11.6667 30ZM1.66669 3.33334V6.66668H5.00002L11 19.3167L8.75002 23.4C8.48335 23.8667 8.33335 24.4167 8.33335 25C8.33335 26.8333 9.83335 28.3333 11.6667 28.3333H31.6667V25H12.3667C12.1334 25 11.95 24.8167 11.95 24.5833L12 24.3833L13.5 21.6667H25.9167C27.1667 21.6667 28.2667 20.9833 28.8334 19.95L34.8 9.13334C34.9333 8.90001 35 8.61668 35 8.33334C35 7.41668 34.25 6.66668 33.3334 6.66668H8.68335L7.11669 3.33334H1.66669ZM28.3334 30C26.5 30 25.0167 31.5 25.0167 33.3333C25.0167 35.1667 26.5 36.6667 28.3334 36.6667C30.1667 36.6667 31.6667 35.1667 31.6667 33.3333C31.6667 31.5 30.1667 30 28.3334 30Z" fill="white"/></svg></span>       
                 </div>

                 <div className="categories">
                     <span><Link to="/">Home</Link></span>
                     <span onClick={jewelery} id="jewelery" >Jewelery</span>
                     <span onClick={men} id="men's clothing">men</span>
                     <span onClick={women} id="women's clothing">Women</span>
                 </div>
             
              </div>
             
          </main>  

          <div className="search">
              <div className="component">
              {List.map((item)=>{
                  return(
                      <CardSearch key={item.id} item={item}/>
                  )
              })}
              </div>
          </div>
        </>
    );
}

export default Shop;