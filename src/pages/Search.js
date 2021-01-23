import React, { Component, useState } from "react";
import API from "../utils/API"
import SearchBar from "../components/searchbar"
import SearchResults from "../components/searchresults"

class Search extends Component {
    // build our state values.
    state = {
        search: "",
        users: [],
        results: []
    }
    // When the component "mounts" perform an API call and fill in users and results states.
    componentDidMount() {
        API.getUser().then(res => this.setState({
            // set users for later filtering.
            users: res.data.results,
            // set results the same as users to be changed by filtering.
            results: res.data.results
        })).catch(err => console.log(err))
    }

    // When the users types in a name start changing the search results
    handleInputChange = event => {
        // Set our search state on the users input
        this.setState({search: event.target.value})
        // Deconstruct state for our filtering method
        const { search, users } = this.state;
        
        // if search is empty do nothing.
        if (search == "" ){
            return;
        }
        // if search is not empty start the filtering.
        else {
            const results = users.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
            // Set our results state for use later.
            this.setState({results});
        }
      };
 

    render(){
        return(
            <div>
            <SearchBar
                 handleInputChange={this.handleInputChange}
                />
            <SearchResults 
            results={this.state.results}
            />
        </div >
        )
    }
}

export default Search