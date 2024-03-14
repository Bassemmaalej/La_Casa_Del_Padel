
import React, { useState } from 'react';
import ScrollToTop from '../../Shared/ScrollToTop';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import VerticalSwiper from '../../Shared/swipper';
import { Grid, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import pic from "../../../assets/images/card.png"
import Images from '../../Shared/image-gal/Images';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './Tournois.css'


const image = [
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,


]




const CostumSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 240,
    height: 32,
    padding: 0,
    borderRadius: '16px',
    alignItems: 'center',
    margin: '40px 90px',

    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 0,

        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(90px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#E9E9EA' : '#E9E9EA',
                opacity: 1,
                border: 0,

            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],

        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,


        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 130,
        height: 32,
        borderRadius: '16px',
        backgroundColor: '#F5C6D3',

    },
    '& .MuiSwitch-track': {
        borderRadius: 16,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#E9E9EA',
        opacity: 1,

        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));





const Tournois = () => {

    const [toggle, setToggle] = useState(false);
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }
    return (
        <>
            <Header />

            <>
                <aside style={{ width: 'fit-content', position: "fixed", right: "0px" }}>
                    <CostumSwitch onClick={toggler} />
                    {toggle ? <VerticalSwiper />/*map finished*/ : <VerticalSwiper />/* map waiting*/}
                </aside>
                <section style={{ marginRight: '28rem', boxSizing: 'border-box', marginLeft: '10px' }}>
                    <Box sx={{ width: '100%', height: 'fit-content' }} style={{ marginTop: '80px', marginLeft: '10px' }}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ backgroundColor: '#F9F9F9' }}>
                            <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                                <div className='gallery-container'>
                                    <Images
                                        images={image}
                                        countFrom={5}
                                        width={50} />
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{ minWidth: 'max-content' }}>
                                <div className='tournament-heading'>
                                    <div className='tournament-title'> Tournmament Title</div>
                                    <div className='tournament-ranking'>3rd Ranking</div>
                                </div>
                                <div className='tournament-subtitle'>Description</div>
                                <div className='tournament-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec cursus nunc. Nam ultrices ullamcorper arcu,.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus nec cursus nunc. Nam ultrices ullamcorper arcu,.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec cursus nunc. Nam ultrices ullamcorper arcu,. </div>
                                <div className='tournament-subtitle'> Players</div>
                                <div className='tournament-players'>
                                    <AvatarGroup max={6} style={{ position: 'absolute', gap: '10px' }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                    </AvatarGroup>
                                </div>
                                <div className='tournament-subtitle'>  Details</div>
                                <div className='tournament-details'>
                                    <table style={{ marginTop: '10px', marginLeft: '10%' }}>

                                        <tr>
                                            <td>Start date: </td>
                                            <td>01/01/2022</td>
                                        </tr>
                                        <tr>
                                            <td>Winer:</td>
                                            <td>My DevTeam</td>
                                        </tr>
                                        <tr>
                                            <td>Best Player:</td>
                                            <td>Mahdi Bouaziz</td>
                                        </tr>
                                        <tr>
                                            <td>Due date: </td>
                                            <td>07/01/2022</td>
                                        </tr>
                                        <tr>
                                            <td>Team Gift:</td>
                                            <td>Product name</td>
                                        </tr>
                                        <tr>
                                            <td>B.Player Gift:</td>
                                            <td>Product name</td>
                                        </tr>
                                    </table>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </section>
            </>
            <Footer hideContactInfo displayNewsLetter />

            <ScrollToTop />
        </>


    );
}

export default Tournois;