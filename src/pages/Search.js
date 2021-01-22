import React, { Component } from "react";
import API from "../utils/API"
import NavBar from "../components/navbar"
import SearchBar from "../components/searchbar"
import SearchResults from "../components/searchresults"

class Search extends Component {
    state = {
        search: "",
        users: [],
        results: []
    }

    componentDidMount() {
        API.getUser().then(res => this.setState({
            users: res.data.results
        })).catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <NavBar />
            <SearchBar
                users={this.state.users}
            />
            <SearchResults 
            results={this.state.users}
            />
        </div >
        )
    }
}

export default Search