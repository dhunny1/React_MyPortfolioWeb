import React from 'react';


import FoundationIcon from '@mui/icons-material/Foundation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';


// Import the SVG file 
import Logo from '../Images/Logo1.svg'

export const sidebarData = [
   
    { 
        title: "About", 
        icon: <FoundationIcon />, 
        link:"/about",
    }, 
    { 
        title: "Projects", 
        icon: <AccountTreeRoundedIcon />,
        link:"/projects", 
    }, 
    { 
        title: "Blog", 
        icon: <NewspaperRoundedIcon />,
        link:"/blog", 
    },
  
    
  
];

export const HomeLogoData = [
    {
      title: "Home",
      icon: (
        <div className="logo-container">
          <img src={Logo} alt="Home" />
        </div>
      ),
      link: "/",
    },
  ];

export const accountData = [
    {
        title: "Contact",
        icon: <PersonOutlineIcon />,
        link: "/contact",
    },
];