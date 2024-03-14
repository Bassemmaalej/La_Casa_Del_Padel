import { Card, Button } from "react-bootstrap";
import pic from "../../assets/images/card.png";
import './Cardd.css';

const Cards = (props) => {

    return (
        <>
            <Card style={{ height: '30rem', width: '37rem', margin: 'auto' }}>

                <Card.Body style={{ padding: 0 }}>


                    <Card.Img variant="top" src={pic} style={{ height: '16rem' }} />
                    <Card.Title style={{ textAlign: 'center', fontWeight: "bolder", marginTop: 20 }}><h2>Title</h2></Card.Title>
                    <div className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates autem quos corrupti, culpa fugiat quo eum sint, earum atque totam voluptatem doloribus qui ratione repellendus ducimus, voluptatum enim quas adipisci!
                    </div>

                    <div className="text-center">
                        <Button className="col-3 start-btn " variant="primary">GET STARTED</Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;

