import { Col, Row, Card, Button } from "react-bootstrap";
import pic from "../../assets/images/listImage.png";
import './ListView_tournment.css';
import React from "react";



const Item = (props) => {
    /*
     <Col className="card">
                <Row>
                <h2>
                    {
                        props.title
                    }
                </h2>
                <h6>
                    {props.subtitle}
                </h6>
                </Row>
                <Row>
                    <img src={props.img} alt="" />
                </Row>
                <Row>
                    <input type="Submit" text = "more" />
                </Row>
            </Col>
    */
    return (
        <>
            <Card style={{ width: '25rem', margin: 'auto' }}>

                <Card.Body>
                    <Card.Title>Tournament N°</Card.Title>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <Card.Img variant="top" src={pic} />
                    <p></p>
                    <Button className="col-12" variant="primary" style={{ backgroundColor: "#1C356E", borderColor: '#1C356E' }} >Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;

