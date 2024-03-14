import { Button } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { CardActive, CardBody, CardMedia, CardNotification, CardNotificationLabel, CardText, CardTitle, MainLabel } from './StyleRes';

const BtnStyles = {
    width: '144px',
    height: '52px',
    background: '#668BD8',
    borderRadius: '15px',
    fontfamily: 'Rubik',
    fontweight: '700',
    fontsize: '24px',
    lineheight: '126%',
    /* or 30px */

    display: 'flex',
    alignitems: 'center',
    textalign: 'center',
    color: '#FFFFFF',


};
export default function ResCard() {
    const [states, setstates] = useState(card.notification);
    const [color, setcolor] = useState(card.color);
    useEffect(() => {
        if (card[0].state === "open") {
            setcolor("#66D8AF")
        }
        else if (card[0].state === "full") {
            setcolor("#F35D5D")
        }
        else {
            setcolor("#F3D25D")
        }
        console.log(color)
    }, [color]);

    return (
        <>
            <CardBody>
                <CardMedia>

                    {card[0].mainlabel ? <MainLabel> Main Staduim</MainLabel> : <></>}

                </CardMedia>
                <CardTitle> Terrain Name</CardTitle>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est aperiam quidem expedita nesciunt at aliquid officia dicta dignissimos ullam quod amet, aliquam labore cumque. Blanditiis adipisci officiis necessitatibus! Sunt!</CardText>
                <CardActive>

                    <CardNotification style={{ background: `${color}` }}></CardNotification>

                    <CardNotificationLabel>AAAAAA</CardNotificationLabel>
                    <Button style={BtnStyles}>Book</Button>
                </CardActive>

            </CardBody>

        </>
    );
}

const card = [
    {
        mainlabel: 0,
        state: "open",
        color: '#66D8AF'

    }]

