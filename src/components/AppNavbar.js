import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderNone, faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles } from "react-jss";



const useStyles = createUseStyles((theme) => ({
  navLink: {
    padding: '8px 20px',
    margin: '10px 5px',
    borderRadius: '20px',
     background: theme.palette.primary,
     color: 'white',
     textDecoration: 'none'
  },
  brand: {
    position: 'absolute',
    left: '0',
    width: '200px',
    height: '100px',
    marginLeft: '20px',
    textDecoration: 'none',
    fontWeight: 800,
  }

}));

function AppNavbar(props) {
  const classes = useStyles(props);
  return (
    <Navbar expand="sm" bg="light" variant="light">
      <Container >
        <Navbar.Brand href="#home" className={classes.brand}>
          <FontAwesomeIcon icon={faHandSparkles} style={{ marginRight: '10px' }} />
          <span>SlapSticker</span>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link to="/" className={classes.navLink}>Home</Nav.Link>
            <Nav.Link to="/readme" className={classes.navLink}>Readme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
