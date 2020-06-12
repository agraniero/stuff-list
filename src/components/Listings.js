import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Listings = (props) => {
  return (
    <div>
      <Card
        style={{
          padding: "2%",
          width: "42rem",
          fontSize: "18px",
          fontFamily: "Tw Cen MT",
          color: "navajoWhite",
        }}
      >
        {props.listings.map((listing) => (
          <div key={listing.id}>
            <p
              style={{ textShadow: "2px 2px 5px navajoWhite", color: "black" }}
            >
              Listing Description:
            </p>
            <Link to={`/listings/${listing.id}`}>{listing.name}</Link>
            
            <br/>
            {listing.description}
            <p
              style={{ textShadow: "2px 2px 5px navajoWhite", color: "black" }}
            >
              Located:
            </p>
            {listing.location}
            <p
              style={{
                textShadow: "2px 2px 5px navajoWhite",
                color: "black",
              }}
            >
              Status:{" "}
            </p>
            {listing.available ? "available" : "seeking"}
            <p
              style={{
                textShadow: "2px 2px 5px navajoWhite",
                color: "black",
              }}
            >
              Contact Info:
            </p>
            {listing.contact_info}
            <br></br>
           
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Listings;
