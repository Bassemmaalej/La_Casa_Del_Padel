
import styled from "styled-components";
import pic from "../../assets/images/card.png";

export const CardBody = styled.div`

width: 468px;
height: 575px;
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 15px;
padding:0px;

`;
export const CardMedia = styled.div`

width: 468px;
height: 307px;
background: url(${pic});
border-radius: 15px;`;

export const MainLabel = styled.div`

width: 165px;
height: 46px;
background: #FFFFFF;
opacity: 0.9;
border-radius: 15px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 126%;
/* or 20px */
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
font-feature-settings: 'pnum' on, 'lnum' on;
padding:20px;
color: #668BD8;`;
export const CardTitle = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.14em;
margin:10px auto;
text-align: center;
color: #000000;`;
export const CardText = styled.div`
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 138.5%;
/* or 19px */
margin:20px auto;
text-align: center;
letter-spacing: 0.08em;
font-feature-settings: 'pnum' on, 'lnum' on;
display: -webkit-box;
    -webkit-line-clamp: 5;
    /* number of lines to show */
    line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
color: #616161;
max-width: 412px;`;
export const CardNotification = styled.div`
width: 50px;
height: 30px;
border-radius: 8px;
display:inline-block;
margin-left: 20px;

`;
export const CardNotificationLabel = styled.div`
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 126%;
/* or 20px */

display: flex;
align-items: center;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
margin-left: 20px;
margin-right:150px;
color: #000000;
`;
export const CardActive = styled.div`
width:100%;
height:max-content;
display:flex;
flex-direction: row;
align-items: center;`;
