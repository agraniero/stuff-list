import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const style = {
    textAlign: 'center',
    padding: '4px',
    fontSize: "22px",
    fontFamily: "Tw Cen MT",
    color: "navajoWhite",
    } 
    return (
      <div style={style} >
        <Link style={style} to='/' >home</Link>
        <Link to='/listings' >listings</Link>
        <Link style={style} to='/new' >new listing</Link>
      </div>
    )
  }
}

export default NavBar;