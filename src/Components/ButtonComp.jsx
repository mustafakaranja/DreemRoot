import Button from "react-bootstrap/Button";
import "./buttonComp.css";

export const ButtonComp = ({ isFooter, name, isActive }) => {
  return (
    <>
      {isFooter ? (
        <Button
          className={isActive ? "footer-active" : "footer-comp"}
          variant="outline-primary">
          {name}
        </Button>
      ) : (
        <Button
          className={isActive ? "button-comp-active" : "button-comp"}
          variant="outline-primary">
          {name}
        </Button>
      )}
    </>
  );
};
