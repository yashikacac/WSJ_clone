import logo from './logo.svg';
import './Components/App.css';
import Header from './Components/Header';
import NewsCol1 from './Components/NewsCol1';
import NewsCol3 from './Components/NewsCol3';
import NewsCol2 from './Components/NewsCol2';
import NewsCol4 from './Components/NewsCol4';
import HeadlinePage from './Components/HeadlinePage';
import { Navbar, Nav, NavbarBrand, NavItem, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Search } from 'react-bootstrap-icons';
function App() {

  return (
    <div className="App">
      <>
        <header className="App-header">
          {
            <Navbar>
              <Navbar.Brand href="#" className='logo'>THE WALL STREET JOURNAL.</Navbar.Brand>

              <Navbar.Collapse className="justify-content-end">
                <Nav.Item>
                  <Header />
                </Nav.Item>
              </Navbar.Collapse>
            </Navbar>
          }
          <div className='tabs'>
            <Nav>
              <Nav.Item href="#" className='nav-text'>Home</Nav.Item>
              <Nav.Item href="#" className='nav-text'>World</Nav.Item>
              <Nav.Item href="#" className='nav-text'>U.S.</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Politics</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Economy</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Business</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Tech</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Markets</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Opinion</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Life&Art</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Real Estate</Nav.Item>
              <Nav.Item href="#" className='nav-text'>WSJ. Magazine</Nav.Item>
              <Nav.Item href="#" className='nav-text'>Sports</Nav.Item>
              <Nav.Item href="#" className='nav-text search'>Search <span className='search-icon'><Search size={18} /></span></Nav.Item>
            </Nav>
          </div>
          <hr />
        </header>
      </>

      <>
        <Container fluid>
          <hr />
          <div className='container'>
            <Row>
              <Col xs={3}><NewsCol1 />
              </Col>
              <div class="vl"></div>
              <Col xs={4}><HeadlinePage /><NewsCol2 />
              </Col>
              <div class="vl"></div>
              <Col><NewsCol3 />
              </Col>
              <div class="vl"></div>
              <Col><NewsCol4 /></Col>
              {/* <hr /> */}

            </Row>

          </div>

        </Container>
      </>

    </div>
  );
}

export default App;
