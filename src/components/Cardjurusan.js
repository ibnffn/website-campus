import { Card, Button } from "react-bootstrap";

const Cardjurusan = (props) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default Cardjurusan;
