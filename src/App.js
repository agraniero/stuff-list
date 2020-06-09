import React from 'react';
//import { connect } from 'react-redux';
import ListingsContainer from './containers/ListingsContainer'

class App extends React.Component {
  

  render(){
    
    const myStyle2 = {
    
      backgroundColor: "#100D23",
      backgroundSize: "cover",
      backgroundImageOpacity: "80%",
      //backgroundImage: "url('https://i.imgur.com/Yn6tACS.jpg')",
      
      //backgroundImage: "url('https://i.pinimg.com/564x/79/bd/9d/79bd9d5cd442a4f5089c1a05cee87eb1.jpg')",
      // fontFamily: "Helvetica",
      // color: "",
      //fontSize: "25px",
    };  

    return (
      <div style={myStyle2} className="App">
        {/* <NavBar /> */}
        
        <ListingsContainer />
      </div>
    );
  }
}
// colors i like:
 // #372963- dark purp
 // #c592ff - light purp
//  #00FF9C  blue green ish
//  #FF4081  pink


// const mapStateToProps = (state) => {
//   return {
//     listings: state.listings
//   }
// }

// const mapDispatchToProps = (dispatch) {

// }

export default App;
