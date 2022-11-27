import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./doctor.css";
import { ButtonComp } from "./ButtonComp";
import doctor from "../Assets/doctor.png";
import { Image } from "react-bootstrap";

const DoctorCards = () => {
  return (
    <>
      <Card className="doctor-card" style={{ margin: " 20px 22px 15px 22px" }}>
        <Card.Header className="doctor-card-header ">
          <ButtonComp
            name="Clinic"
            isFooter={false}
            isActive={true}></ButtonComp>
          <ButtonComp
            name="Test"
            isFooter={false}
            isActive={false}></ButtonComp>
          <ButtonComp
            name="Surgery"
            isFooter={false}
            isActive={false}></ButtonComp>
          <ButtonComp
            name="Medicine"
            isFooter={false}
            isActive={false}></ButtonComp>
        </Card.Header>
        <Card.Body className="doctor-card-body">
          <div>
            <img className="imgFordemo" style={{ width: 84 }} src={doctor} />
          </div>
          <div style={{ textAlign: "start", marginLeft: 10 }}>
            <Card.Title style={{ fontSize: 14 }}>
              17 September 2021, 9.30 PM
            </Card.Title>
            <Card.Text
              style={{
                marginBottom: 0,
                fontSize: 14,
                color: "rgba(233, 112, 0, 1)",
              }}>
              Appointment With Doctor Arun
            </Card.Text>
            <Card.Text
              style={{
                marginBottom: 0,
                fontSize: 14,
              }}>
              Doctor World Clinic
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ButtonComp
            isFooter={true}
            name="Reschedule"
            isActive={true}></ButtonComp>
          <ButtonComp
            name="Cancel"
            isFooter={true}
            isActive={false}></ButtonComp>
          <ButtonComp name="View" isFooter={true} isActive={false}></ButtonComp>
        </Card.Footer>
      </Card>
      <Card className="doctor-card" style={{ margin: " 30px 22px 15px 22px" }}>
        <Card.Header className="doctor-card-header ">
          <ButtonComp
            name="Clinic"
            isFooter={false}
            isActive="true"></ButtonComp>
          <ButtonComp name="Test" isActive={true} isFooter={false}></ButtonComp>
          <ButtonComp
            name="Surgery"
            isActive={false}
            isFooter={false}></ButtonComp>
          <ButtonComp
            name="Medicine"
            isActive={false}
            isFooter={false}></ButtonComp>
        </Card.Header>
        <Card.Body className="doctor-card-body">
          <div>
            <img className="imgFordemo" style={{ width: 84 }} src={doctor} />
          </div>
          <div style={{ textAlign: "start", marginLeft: 10 }}>
            <Card.Title style={{ fontSize: 14 }}>
              17 September 2021, 9.30 PM
            </Card.Title>
            <Card.Text
              style={{
                marginBottom: 0,
                fontSize: 14,
                color: "rgba(233, 112, 0, 1)",
              }}>
              Appointment With Doctor Arun
            </Card.Text>
            <Card.Text
              style={{
                marginBottom: 0,
                fontSize: 14,
              }}>
              Doctor World Clinic
            </Card.Text>
            <Card.Text
              style={{
                marginBottom: 0,
                fontSize: 14,
                textTransform: "capitalize",
              }}>
              Test : X-ray Test
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ButtonComp
            isFooter={true}
            name="Clinic"
            isActive={true}></ButtonComp>
          <ButtonComp
            isFooter={true}
            name="Reschedule"
            isActive={false}></ButtonComp>
          <ButtonComp isFooter={true} name="View" isActive={false}></ButtonComp>
        </Card.Footer>
      </Card>
      <Button className="back-btn">BACK</Button>
    </>
  );
};

export default DoctorCards;
