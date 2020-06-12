import React from 'react';

const Listing = (props) => {
  
  let listing = props.listings.filter(listing => listing.id == props.match.params.id)[0]

  console.log(listing)

  if (listing) {
    return (

    <div>
      <h3>
        listing: {listing.name}
      </h3>
     </div>
  );
  } else {
    return (
      <div>listing loading</div>
    )
  }

  
}

export default Listing