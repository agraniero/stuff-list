import React from 'react';
import { Link } from 'react-router-dom';

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
            fontFamily: "perpetua",
            // fontFamily: "verdana",
            color: "lightGreen",
            textShadow: "2px 2px 5px mediumBlue",
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
                fontFamily: "verdana",
                color: "lightBlue",
                textShadow: "2px 2px 5px midnightBlue",
                fontSize: "40px",
                backgroundColor: "fireBrick",
              }}
            // onClick={this.handleClick}
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
              fontFamily: "verdana",
              color: "lightBlue",
              textShadow: "2px 2px 5px midnightBlue",
              fontSize: "40px",
              backgroundColor: "fireBrick",
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
