import React from 'react';
import { Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';


export default class Home extends React.Component {
 
  // handleClick = () => {
  //   return (
  //     <div></div>
  //   )
  // }

  render() {
    return (
      <div>
        <h1
          style={{
            fontFamily: "Tw Cen MT",
            // fontFamily: "verdana",
            //color: "navajoWhite",
            textShadow: "2px 2px 5px navajoWhite",
            color: "black",
            textAlign: "center",
            fontSize: "75px",
          }}
        >
          Welcome to the Community Message Board
        </h1>
        <div style={{
          textAlign: "center",
          display: 'inlineBlock'
        }}>
          <Link to='/listings'>
            <button
              style={{
                padding: '1%',
                fontFamily: "Tw Cen MT",
                color: "lightSkyBlue",
                textShadow: "2px 2px 5px navajoWhite",
                fontSize: "30px",
                backgroundColor: "black",
              }}
           
            >
              listings
          </button>
          </Link>
        </div>
        {/* <br/> */}
        <div style={{ textAlign: "center", display: 'inlineBlock' }}>
          <Link to='/new'>
          <button
            style={{
              padding: '1%',
              fontFamily: "Tw Cen MT",
              color: "lightSkyBlue",
              textShadow: "2px 2px 5px navajoWhite",
              fontSize: "30px",
              backgroundColor: "black",
            }}
          >
            new listing
          </button>
          </Link>
        </div>
      </div>
    );
  }
} 
