import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardForDemo.css";

const CardsForDemo = () => {
  return (
    <Card
      className="first-card"
      style={{ marginLeft: 22, marginRight: 22, height: 75 }}>
      <Card.Body className="First-card-name">
        <div
          style={{
            alignItems: "center",
            margin: "auto",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
          }}>
          New Booking in 2 Minutes
        </div>
        <div style={{ alignItems: "center", margin: "auto" }}>
          <Button
            variant="primary"
            className="first-btn"
            style={{
              alignItems: "center",
              margin: "auto",
              fontSize: 13,
              width: 87,
            }}>
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardsForDemo;
