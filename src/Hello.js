import React from 'react';
import "./App.css"
import one from "./images/one.jpg"
import four from "./images/four.jpg"
import ghostjacket from "./images/ghostjacket.png"
import Gucci from "./images/Gucci.png"
import doublering from "./images/doublering.jpg"
import pink from "./images/pink.png"
import dg from "./images/dg.png"
import gold1 from "./images/gold1.jpg"
import lebron from "./images/lebron.png"
import bbag from "./images/bbag.png"
import bRing from "./images/bRing.jpg"
import proof2 from "./images/proof2.jpg"
import proof5 from "./images/proof5.png"
import proof1 from "./images/proof1.jpg"
import pinky from "./images/pinky.png"
import nike from "./images/nike.jpg"
import jj from "./images/jj.png"
import twoshoes from "./images/twoshoes.jpg"
import {Link} from "react-router-dom"
function Hello(props) {
    return (
        <>
            <main className="header">
                <div className="center">
                <div className="dutchess">
                     <h3>Dutchess</h3>
                     <nav>
                         <ul>
                             <li className="li">Home</li>
                             <li className="li"><Link to="/shop">Shop</Link></li>
                             <li className="li">About</li>
                             <li className="shop"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 30C9.83335 30 8.35002 31.5 8.35002 33.3333C8.35002 35.1667 9.83335 36.6667 11.6667 36.6667C13.5 36.6667 15 35.1667 15 33.3333C15 31.5 13.5 30 11.6667 30ZM1.66669 3.33334V6.66668H5.00002L11 19.3167L8.75002 23.4C8.48335 23.8667 8.33335 24.4167 8.33335 25C8.33335 26.8333 9.83335 28.3333 11.6667 28.3333H31.6667V25H12.3667C12.1334 25 11.95 24.8167 11.95 24.5833L12 24.3833L13.5 21.6667H25.9167C27.1667 21.6667 28.2667 20.9833 28.8334 19.95L34.8 9.13334C34.9333 8.90001 35 8.61668 35 8.33334C35 7.41668 34.25 6.66668 33.3334 6.66668H8.68335L7.11669 3.33334H1.66669ZM28.3334 30C26.5 30 25.0167 31.5 25.0167 33.3333C25.0167 35.1667 26.5 36.6667 28.3334 36.6667C30.1667 36.6667 31.6667 35.1667 31.6667 33.3333C31.6667 31.5 30.1667 30 28.3334 30Z" fill="black"/></svg></li>
                         </ul>
                     </nav>
                 </div>

                 <div className="image-container">
                     <img src={ghostjacket} alt="image" />
                 </div>
                </div>
            </main>

            <div className="hot-list">
                <div className="hot-cards">
                    <div className="hot-list-img">
                        <div className="hot-img">
                               <img className="img-contain" src={Gucci} alt="hot-list" />
                        </div>
                        <div className="hot-price">
                            $133
                        </div>
                    </div>

                    <div className="hot-list-img">
                        <div className="hot-img">
                               <img className="img-contain" src={doublering} alt="hot-list" />
                        </div>
                        <div className="hot-price">
                            $155
                        </div>
                    </div>

                    <div className="hot-list-img">
                        <div className="hot-img">
                               <img className="img-contain" src={pink} alt="hot-list" />
                        </div>
                        <div className="hot-price">
                            $1330
                        </div>
                    </div>

                    
                </div>
                <div className="hot-button">
                    <span>Shop</span>
                </div>
            </div>


            <div className="blog-story">
                <div className="main">
                    <div className="box1"><img src={dg} alt="" /></div>
                    <div className="box2"><img src={lebron} alt="" /></div>
                    <div className="box3"><img src={bRing} alt="" /></div>
                    <div className="box4"><img src={bbag} alt="" /></div>
                    <div className="box5"><img src={proof2} alt="" /></div>
                </div>        
            </div>


            <div className="grid-center">

            <div className="featured">Featured Products</div>
            <div className="blog-story2">
                    <div className="boxa">
                        <img src={gold1} alt="" className="img"/>
                        <div className="price">$415</div>
                    </div>
                    <div className="boxb">
                        <img src={nike} className="img" alt="" />
                        <div className="price">$411</div>
                    </div>
                    <div className="boxc">
                    <img className="img" src={proof5} alt="" />
                        <div className="price">$200</div>
                    </div>
                    <div className="boxd">
                        <img className="img" src={jj} alt="" />
                        <div className="price">$111</div>
                    </div>
                    <div className="boxe">
                        <img src={pinky} alt="" className="img"/>
                        <div className="price">$120</div>
                    </div>
                    <div className="boxf">
                        <img src={proof1} alt="" className="img"/>
                        <div className="price">$670</div>
                    </div>
            </div>

            </div>
        <ul className="ul">
          <li>
          <svg className="move" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M41.6667 16.6666H35.4167V8.33325H6.25001C3.95834 8.33325 2.08334 10.2083 2.08334 12.4999V35.4166H6.25001C6.25001 38.8749 9.04168 41.6666 12.5 41.6666C15.9583 41.6666 18.75 38.8749 18.75 35.4166H31.25C31.25 38.8749 34.0417 41.6666 37.5 41.6666C40.9583 41.6666 43.75 38.8749 43.75 35.4166H47.9167V24.9999L41.6667 16.6666ZM12.5 38.5416C10.7708 38.5416 9.37501 37.1457 9.37501 35.4166C9.37501 33.6874 10.7708 32.2916 12.5 32.2916C14.2292 32.2916 15.625 33.6874 15.625 35.4166C15.625 37.1457 14.2292 38.5416 12.5 38.5416ZM40.625 19.7916L44.7083 24.9999H35.4167V19.7916H40.625ZM37.5 38.5416C35.7708 38.5416 34.375 37.1457 34.375 35.4166C34.375 33.6874 35.7708 32.2916 37.5 32.2916C39.2292 32.2916 40.625 33.6874 40.625 35.4166C40.625 37.1457 39.2292 38.5416 37.5 38.5416Z" fill="#D91B1B"/>
         </svg>

          <div className="text">Free shipping and returns</div>
   
           </li>    
          <li>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M37.5 16.6666H35.4167V12.4999C35.4167 6.74992 30.75 2.08325 25 2.08325C19.25 2.08325 14.5833 6.74992 14.5833 12.4999V16.6666H12.5C10.2083 16.6666 8.33333 18.5416 8.33333 20.8333V41.6666C8.33333 43.9583 10.2083 45.8333 12.5 45.8333H37.5C39.7917 45.8333 41.6667 43.9583 41.6667 41.6666V20.8333C41.6667 18.5416 39.7917 16.6666 37.5 16.6666ZM25 35.4166C22.7083 35.4166 20.8333 33.5416 20.8333 31.2499C20.8333 28.9583 22.7083 27.0833 25 27.0833C27.2917 27.0833 29.1667 28.9583 29.1667 31.2499C29.1667 33.5416 27.2917 35.4166 25 35.4166ZM31.4583 16.6666H18.5417V12.4999C18.5417 8.93742 21.4375 6.04159 25 6.04159C28.5625 6.04159 31.4583 8.93742 31.4583 12.4999V16.6666Z" fill="#D91B1B"/>
          </svg>

          <div className="text">Secured payments</div>
          </li>
          <li>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9791 4.16675C13.4791 4.16675 4.14581 13.5001 4.14581 25.0001C4.14581 36.5001 13.4791 45.8334 24.9791 45.8334C36.4791 45.8334 45.8125 36.5001 45.8125 25.0001C45.8125 13.5001 36.4791 4.16675 24.9791 4.16675ZM32.5 17.3751C34.7291 17.3751 36.5208 19.1667 36.5208 21.3959C36.5208 23.6251 34.7291 25.4167 32.5 25.4167C30.2708 25.4167 28.4791 23.6251 28.4791 21.3959C28.4583 19.1667 30.2708 17.3751 32.5 17.3751ZM20 14.0834C22.7083 14.0834 24.9166 16.2917 24.9166 19.0001C24.9166 21.7084 22.7083 23.9167 20 23.9167C17.2916 23.9167 15.0833 21.7084 15.0833 19.0001C15.0833 16.2709 17.2708 14.0834 20 14.0834ZM20 33.1043V40.9167C15 39.3542 11.0416 35.5001 9.29165 30.5834C11.4791 28.2501 16.9375 27.0626 20 27.0626C21.1041 27.0626 22.5 27.2292 23.9583 27.5209C20.5416 29.3334 20 31.7292 20 33.1043ZM24.9791 41.6668C24.4166 41.6668 23.875 41.6459 23.3333 41.5834V33.1043C23.3333 30.1459 29.4583 28.6667 32.5 28.6667C34.7291 28.6667 38.5833 29.4792 40.5 31.0626C38.0625 37.2501 32.0416 41.6668 24.9791 41.6668Z" fill="#D91B1B"/>
          </svg>

              <div className="text">Customer services</div>    
          </li>  
        </ul>  


        <footer>
            <div className="footer-center">
                <div className="text">
                    <span>Home</span>
                    <span>Shop</span>
                    <span>About</span>
                    <span>Blog</span>
                </div>

                <div className="text">
                    <span>No1 Independence</span>
                    <span>Lagos Nigeria</span>
                    <span>chillaryvictor@gmail.com</span>
                    <span>Faqs</span>
                </div>

                <div className="text">
                   <span>recieve all our news and update</span>

                   <input type="tex" name="text" placeholder="Email" />
                   <span className="sub">Subscribe Now</span>
                </div>
            </div>
        </footer>
                       
        </>
    );
}

export default Hello;

