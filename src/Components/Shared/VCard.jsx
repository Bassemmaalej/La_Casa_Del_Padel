import { Card, Button } from "react-bootstrap";
import pic from "../../assets/images/card.png";
import vector from "../../assets/icons/Vector.png";
import "./VCard.css"


const VCard = (props) => {

    return (
        <>
            <Card className="component" style={{ width: '25rem', margin: 'auto', borderRadius: "10px", boxShadow: '4px' }}>

                <Card.Body>
                    <Card.Title>Tournament Title</Card.Title>
                    <div className="p">
                        <img className="vect" src={vector} alt="aa" />
                        <span>Winner Team</span>
                    </div>
                    <Card.Img variant="top" src={pic} style={{ borderRadius: "8px" }} />
                    <p></p>
                    <Button className="col-12 more-btn" variant="primary">More</Button>
                </Card.Body>
            </Card>
        </>
    );
}
export default VCard;
