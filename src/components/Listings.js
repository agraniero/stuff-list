import React from "react";
import { Card } from "react-bootstrap";
import Listing from './Listing';

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
              style={{ textShadow: "2px 2px 5px navajoWhite", color: "indigo" }}
            >
              Listing Description:
            </p>
            {listing.name}
            <br></br>
            <br></br>
            {listing.description}
            <p
              style={{ textShadow: "2px 2px 5px navajoWhite", color: "indigo" }}
            >
              Located:
            </p>
            {listing.location}
            <p
              style={{
                textShadow: "2px 2px 5px navajoWhite",
                color: "indigo",
              }}
            >
              Status:{" "}
            </p>
            {listing.available ? "available" : "seeking"}
            <p
              style={{
                textShadow: "2px 2px 5px navajoWhite",
                color: "indigo",
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
