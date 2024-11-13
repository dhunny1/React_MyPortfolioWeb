import React from 'react';
import '../App.css';
import { accountData, HomeLogoData, sidebarData } from './sidebarData.js';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/core';

function SideBar() {
  return ( 
    
    <div className='BarSide'>
        <ul className='SidebarList'>
            {sidebarData.map((val,key) => {
                return(
                    <li 
                    key={key} 
                    className='row'
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={()=>{window.location.pathname = val.link;}}>
                        
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                        
                    </li>
                    



                )
            })}
           
        </ul>
        

        <ul className='LogoNav'>

            {HomeLogoData.map((val,key) => {
                return(
                    <li 
                    key={key} 
                    className='logoCol'
                    
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={()=>{window.location.pathname = val.link;}}>
                        
                        <div id="icon">{val.icon}</div>
                        {/* <div id="title">{val.title}</div> */}
                        
                    </li>
                    



                )
            })}
            
        </ul>

        <ul className='ContactNav'>
            {accountData.map((val,key) => {
                    return(
                        <li 
                        key={key} 
                        className='row'
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname = val.link;}}
                        >
                            
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                            
                        </li>
                        



                    )
            })}
        </ul>
       
    </div>
  )
   
}

export default SideBar
