import { Card, Button, Col } from "react-bootstrap";
import pic from "../../assets/images/Winners-bro.png";
import Radio from '@mui/material/Radio';
import './Item_Offer.scss'
const Item_offer = (props) => {
    return (
        <>
            <Col md={props.size}>
                <Card className="Item-Offer shadow">

                    <Card.Body >
                        <Card.Img className="imm" variant="top" src={pic} />
                        <Card.Title>Tournament N°</Card.Title>

                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem iure accusamus doloribus nobis velit reiciendis amet vel explicabo accusantium, ipsum numquam. Ab earum porro veniam sapiente vitae quaerat voluptates.
                        </div>

                        <Radio
                            className="radio-button"
                            style={{ float: 'right' }}
                            checked='true'
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Item_offer;