import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,FormControl,Button, InputGroup } from 'react-bootstrap'
import "./searchbar.css";

function SearchBar(){
    return(
        <div classname="searchbar">
            <Container className="searchForm">
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Start typing name here"
      aria-label="Name"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  </Container>
        </div>
    )
}
export default SearchBar;