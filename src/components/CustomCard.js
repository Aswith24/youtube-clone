import { Card, Col, Button } from "react-bootstrap";
import './CustomCard.css';

const CustomCard = ({ title, uploadedAgo, uploadedBy, image, views }) => {
    return (
        <Col>
          <Card className="card" bg="light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{uploadedBy}</Card.Text>
              <Card.Text>{uploadedAgo} | {views} Views</Card.Text>
              <Button variant="danger">Subscribe</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    };
 
export default CustomCard;