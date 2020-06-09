import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { BrowserRouter as Switch } from "react-router-dom";
import Listing from "../components/Listing";
import Home from '../components/Home';
import Listings from '../components/Listings'
import ListingForm from '../components/ListingForm';
import {fetchListings} from '../actions/FetchListings';
import NavBar from '../components/navBar';


 class ListingsContainer extends Component {

  componentDidMount(){
    this.props.fetchListings()
  }

   render() {
    return(
      <div><span>  
        <Switch>
          <NavBar />
          <Route exact path='/new' render={(routerProps) => <ListingForm {...routerProps} />} />
          <Route exact path='/' component={Home} />
          <Route exact path='/listings' render={(routerProps) => <Listings {...routerProps} listings={this.props.listings} />} />
          <Route exact path='/listings/:id' render={(routerProps) => <Listing {...routerProps} listings={this.props.listings} />} />
        </Switch>
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