import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const style = {
    textAlign: 'center',
    padding: '20px',
    fontSize: "22px",
    fontFamily: "Tw Cen MT",
      //textShadow: "2px 2px 5px red",
      color: "mediumTurquoise",
      textShadow: "2px 2px 5px thistle",
  
      //backgroundColor: "black",
    
    //color: "navajoWhite",
      //color: 'darkTurquoise',
   
  } 
    return (
      <div style={style} >
        <Link style={style} to='/' >home</Link>
        <Link style={style} to='/listings' >listings</Link>
        <Link style={style} to='/new' >new listing</Link>
      </div>
    )
  }
}

export default NavBar;