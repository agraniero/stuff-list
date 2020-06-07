import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { BrowserRouter as Switch } from "react-router-dom";
import Listing from "../components/Listing";
import Listings from '../components/Listings'
import ListingForm from '../components/ListingForm';
import {fetchListings} from '../actions/FetchListings';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';


 class ListingsContainer extends Component {

  componentDidMount(){
    this.props.fetchListings()
  }

   render() {
     const style = {
       padding: '2%',
       marginLeft: 'auto',
       marginRight: 'auto'
    }
    return(
      <div><span>
        {<Listing />}
        <CardDeck>
          <Card style={style}>
            <Switch> 
              <Route exact path='/new' component={ListingForm} />
              {/* <ListingForm /> */}
            </Switch> 
            
          </Card>
          <Card>
            <Switch>
              <Route exact path='/listings' render={(routerProps) => <Listings {...routerProps} listings={this.props.listings} />} />
              <Route exact path='/listings/:id' render={(routerProps) => <Listing {...routerProps} listings={this.props.listings} />} />
            </Switch>
            
            
          </Card>
        </CardDeck>
      </span></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps, {fetchListings})(ListingsContainer)