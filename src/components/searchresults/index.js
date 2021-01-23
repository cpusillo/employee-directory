import React from "react"
import { Container,Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import './searchresults.css'

function SearchResults(props){
    return (
        <div className="SearchResults">
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faImage} /></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th><button className="sortBtn" onClick={props.handleSort}>State Office</button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* "map" through our getUsers results for all users */}
                        {props.results.map(result => (
                            <tr key={result}>
                                <td>
                                <img 
                                    src={result.picture.thumbnail} 
                                    className="userPhoto" alt={result.name.first}
                                />
                                </td>
                                <td>{result.name.title}.{result.name.first} {result.name.last}</td>
                                <td><a href={result.email}>{result.email}</a></td>
                                <td>+1-{result.cell}</td>
                                <td>{result.location.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default SearchResults