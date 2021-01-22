import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,FormControl,Button, InputGroup } from 'react-bootstrap'

function SearchBar(props){
    return(
        <div className="searchbar">
            <Container className="searchForm">
            <InputGroup className="mb-3">
              <FormControl
                value={props.value}
                onChange={props.handleInputChange}
                placeholder="Start typing employee information here"
                className="inputFull"
              />
              <InputGroup.Append>
                <Button 
                variant="success"
                type="submit"
                onClick={props.handleSearchResults}
                >Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
            </Container>
        </div>
    )
}
export default SearchBar;