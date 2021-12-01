import {
    Navbar,
    Container,
    Nav,
    InputGroup,
    FormControl,
    Button,
  } from "react-bootstrap";
  import './CustomAppBar.css';
  const CustomAppBar = ({ label, onSearch }) => {
    return (
      <Navbar className="navbar" bg="light" expand="lg" sticky="top"  >
        <Container fluid>
          <Navbar.Brand>
            <img className="image" src="../YouTube-Logo.png" alt="logo" height={80}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search on TA Youtube"
                aria-label="search on ta youtube"
                aria-describedby="basic-addon2"
                onChange={onSearch}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
             
            </InputGroup>
            <Button className="lis" variant="outline-dark" href="/license">
                License
              </Button>
              <InputGroup className="mb-4">
              <Button className="homen" variant="outline-dark" href="/">
                Home
              </Button>
              <Button className="mixes" variant="outline-dark" href="/">
                Mixes
              </Button>
              <Button className="Gaming" variant="outline-dark" href="/">
                Gaming
              </Button>
              <Button className="music" variant="outline-dark" href="/">
                Music
              </Button>
              <Button className="food" variant="outline-dark" href="/">
                Food
              </Button>
              <Button className="styling" variant="outline-dark" href="/">
                Styling
              </Button>
              <Button className="Life" variant="outline-dark" href="/">
                Lifestyle
              </Button>
              <Button className="Movies" variant="outline-dark" href="/">
                Movies
              </Button>
              </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    );
  };
  
  export default CustomAppBar;
