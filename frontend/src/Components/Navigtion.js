import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Action/authActions";
const Navigtion = () => {
  const user = useSelector((state) => state.authReducer.user);
  const auth = useSelector((state) => state.authReducer.auth);
  console.log("auth", auth);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  };
  console.log("sss", user);
  return (
    <div>
      {!user || !auth ? (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/profile">
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand as={Link} to="/profile">
                Navbar
              </Navbar.Brand>
              <Nav.Link as={Link} to="/">
                home
              </Nav.Link>

              <Nav.Link as={Link} to="/" onClick={handleLogout}>
                log out
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Navigtion;
