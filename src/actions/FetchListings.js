

export function fetchListings() {
  return (dispatch) => {
    fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then(listings => dispatch({
        type: 'GET_LISTINGS',
        payload: listings
      }))
    }
  }

