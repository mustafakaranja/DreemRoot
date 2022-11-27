import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import backArrow from "../Assets/backArrow.png";
import "./Header.css";

const HeaderForMobile = () => {
  return (
    <Navbar variant="light">
      <Container style={{ textAlign: "center" }}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={backArrow}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <span
          style={{
            margin: "auto",
            fontSize: 15,
            fontWeight: 700,
          }}>
          UPCOMING APPOINMENTS
        </span>
      </Container>
    </Navbar>
  );
};

export default HeaderForMobile;
