import React, { Component } from "react";
import { connect } from "react-redux";
import { addListing } from "../actions/addListing";
import { Form } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class ListingForm extends Component {
  state = {
    name: "",
    description: "",
    available: true,
    seeking: false,
    location: "",
    contact_info: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDropdown = (event)=> {
    
    this.setState({
      
    })
}   

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addListing(this.state);
    this.setState({
      name: "",
      description: "",
      seeking: true,
      available: false,
      location: "",
      contact_info: "",
    });
    //console.log(this.state)
    this.props.history.push('/listings');
    
  };

  render() {
    
    const mystyle = {
      padding: "20%",
      color: "navajoWhite",
      backgroundImage: 'url("https://i.imgur.com/csjpEZeg.jpg")',
      backgroundSize: "cover",
      fontFamily: "Tw Cen MT",
      fontSize: '24px'
    };
    return (
      <div>
        <Card
          style={{ marginLeft: "auto", marginRight: "auto", width: "40rem" }}
        >
          <Form style={mystyle} onSubmit={this.handleSubmit}>
            <header
              style={{
                textShadow: "2px 2px 5px white",
                color: "black",
                fontSize: "82px",
                //fontFamily: 'perpetua'
              }}
            >
              New Listing
            </header>
            <br></br>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={this.state.name}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <textarea
              rows="5"
              cols="52"
              placeholder="item description"
              name="description"
              onChange={this.handleChange}
            />
            <br></br>
            <h2>{/* item status: */}</h2>
            {/* <input type='checkbox' name='available' defaultValue={this.state.available} onClick={this.handleChange} />
          <label>seeking</label>
          
        <input type='checkbox' name='seeking' defaultValue={this.state.seeking} onClick={this.handleChange} />*/}
            {/* <br></br> */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option name="available">available</option>
              <option name="seeking">seeking</option>
            </select>
            <br></br>
            <br></br>
            {/* <label>location:</label> */}
            <input
              type="text"
              placeholder="location"
              name="location"
              defaultValue={this.state.location}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            {/* <label>contact info:</label> */}
            <input
              type="text"
              placeholder="contact info"
              name="contact_info"
              defaultValue={this.state.contact_info}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <input type="submit" value="post" />
          </Form>
        </Card>
      </div>
    );
  }
}

export default connect(null, { addListing })(ListingForm);
