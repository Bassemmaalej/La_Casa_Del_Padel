import { Row } from "react-bootstrap";
import Item from "./Item_offer";
const Offer = () => {
    return (
        <>
            <div className="container-fluid text-center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                <Row style={{
                    display: 'flex',
                    width: 'max-content',
                    justifyContent: 'center',
                    height: 'auto',
                    gap: '30px',
                    alignItems: 'center',

                }}>
                    <Item />
                    <Item />
                    <Item />

                </Row>
            </div>
        </>
    );
}

export default Offer;