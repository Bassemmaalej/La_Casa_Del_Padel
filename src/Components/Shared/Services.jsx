import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import pic from '../../assets/icons/terrain.png';
import pic1 from '../../assets/icons/entreprise.png';
import pic2 from '../../assets/icons/coach.png';
import pic3 from '../../assets/icons/boutique.png';
import './Services.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Services() {
    return (
        <Box sx={{ width: '100%' }} style={{ marginTop: '80px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} style={{ minWidth: 'max-content' }}>

                    <Grid container>
                        <Grid item xs={6}>

                            <div className='content'>
                                <div className='tit'>3 Terrains</div>
                                <div className='parag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellat, quas culpa ex nisi incidunt consequuntur dignissimos voluptas, possimus ab magni nam tempora illum facilis voluptatum in, reprehenderit mollitia qui?</div>
                            </div>

                        </Grid>

                        <Grid item xs={6}>
                            <NavLink to='/'>
                                <img src={pic} alt='terrain' style={{ margin: "50px 0px 0px 33px" }} />
                            </NavLink>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={6} style={{ minWidth: 'max-content' }}>

                    <Grid container>
                        <Grid item xs={6} style={{}}>
                            <NavLink to='/'>
                                <img src={pic1} alt='entreprise' style={{ margin: "50px 0px 0px 0px" }} />
                            </NavLink>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='content'>
                                <div className='tit'>Entreprise</div>
                                <div className='parag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellat, quas culpa ex nisi incidunt consequuntur dignissimos voluptas, possimus ab magni nam tempora illum facilis voluptatum in, reprehenderit mollitia qui?</div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={6} style={{ minWidth: 'max-content' }}>

                    <Grid container>
                        <Grid item xs={6}>
                            <div className='content'>
                                <div className='tit'>Boutique</div>
                                <div className='parag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellat, quas culpa ex nisi incidunt consequuntur dignissimos voluptas, possimus ab magni nam tempora illum facilis voluptatum in, reprehenderit mollitia qui?</div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <NavLink to='/'>
                                <img src={pic3} alt='boutique' style={{ margin: "50px 0px 0px 0px" }} />
                            </NavLink>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={6} style={{ minWidth: 'max-content' }}>

                    <Grid container>
                        <Grid item xs={6}>
                            <NavLink to='/'>
                                <img src={pic2} alt='coach' style={{ margin: "50px 0px 0px 0px" }} />
                            </NavLink>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='content'>
                                <div className='tit'>Coach</div>
                                <div className='parag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellat, quas culpa ex nisi incidunt consequuntur dignissimos voluptas, possimus ab magni nam tempora illum facilis voluptatum in, reprehenderit mollitia qui?</div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}
