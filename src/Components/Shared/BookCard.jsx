import { Card, Button } from "react-bootstrap";
import pic from "../../assets/images/card.png";
import vector from "../../assets/icons/Vector.png";
import "./BookCard.css";


const BookCard = (props) => {

    return (
        <>
            <Card style={{ width: '468px', height: '575px', margin: 'auto', borderRadius: "10px", padding: '0px' }}>

                <Card.Body style={{ padding: '0px' }}>
                    <Card.Img variant="top" src={pic} style={{ borderRadius: "10px", width: '468px', height: '307px' }} />
                    <Card.Title className="title"><h2>Terrain Name</h2> </Card.Title>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur eos maxime dolore commodi sapiente neque ut eaque iure molestiae nostrum inventore explicabo rerum, iste nobis. Error minus quos velit!
                        Recusandae quas odit corporis sunt quidem at ex sint, sed a labore vero culpa repellat similique quisquam doloremque impedit error officiis corrupti, tempore placeat est sapiente. Omnis sunt nostrum quia.
                    </div>

                    <p></p>
                    <Button className="col-3 Book-btn" variant="primary">Book</Button>
                    <div className="component"><div className="box"></div><span>currently occupied</span></div>
                </Card.Body>
            </Card>
        </>
    );
}
export default BookCard;