import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,FormControl,InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

function SearchBar(props){
    return(
        <div className="searchbar">
            <Container className="searchForm">
            <InputGroup className="mb-3">
              {/* FormControl will use props.handleInputChange to filter our results*/}
              <FormControl
                onChange={props.handleInputChange}
                placeholder="Start typing employee name here, hit refresh button to search again"
                className="inputFull"
              />
                  <InputGroup.Append>
                    <Button variant="secondary" onClick={props.handleRefresh}><FontAwesomeIcon icon={faSync} /></Button>
                  </InputGroup.Append>
            </InputGroup>
            </Container>
        </div>
    )
}
export default SearchBar;