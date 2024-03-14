import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import Dropdown from 'react-bootstrap/Dropdown'
import { FaCoins } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import './Header.css'

import logo from '../../../assets/images/logo.png'

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}
function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
class Header extends Component {

    state = {
        fixed: false,
        showMenu: false
    }
    let

    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var nav = document.querySelector('.header-nav');

        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            const active = current.classList.contains("open")
            navUl.forEach(el => el.classList.remove('open'));
            //current.classList.add('open');

            if (active) {
                current.classList.remove('open')
                console.log("active")
            } else {
                current.classList.add('open');
                console.log("close")
            }
        }

    }

    handleStateChange = (status) => {
        const fixed = status.status === Sticky.STATUS_FIXED ? true : false

        this.setState({
            fixed
        })

    }

    render() {
        const active = this.state.fixed ? "is-fixed" : ""
        return (
            <>
                <Sticky
                    innerZ={999}
                    enabled={true}
                    onStateChange={this.handleStateChange}
                >
                    <header class="site-header mo-left header header-transparent navstyle2">
                        <div class={`sticky-header main-bar-wraper ${active} navbar-expand-lg`}>
                            <div class="main-bar clearfix ">
                                <div class="container clearfix">

                                    <div class="logo-header mostion">
                                        <Link to="/"><img src={logo} alt="" /></Link>
                                    </div>



                                    <div className='content-nav' >

                                        <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>



                                        <Dropdown>
                                            <div class="extra-nav">

                                                <div class="extra-cell has-mega-menu" id="dropdown-custom-components" >

                                                    <Dropdown.Toggle id="dropdown-custom-components">
                                                        <Avatar className='avatar' {...stringAvatar('Ramos Ben Aribia')} />

                                                        <div className='user-name'>Ramos Ben Aribia </div>
                                                    </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu>
                                                    <div className='menu-div-name' >
                                                        <Avatar className='avatar' {...stringAvatar('Ramos Ben Aribia')} />

                                                        <div className='user-name'>Ramos Ben Aribia </div>
                                                    </div>
                                                    <div className='menu-div-body' >
                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                        <Avatar className='avatar' {...stringAvatar('Ramos Ben Aribia')} />


                                                        <h6>ramos Ben Aribia </h6>
                                                        <p>#68b589</p>
                                                        <div className='coins' >
                                                            10
                                                            <FaCoins />
                                                        </div>
                                                        <h6>ramosbenaribia@gmail.com </h6>
                                                        <h6>20622574 </h6>

                                                    </div>
                                                </Dropdown.Menu>

                                            </div>

                                        </Dropdown>

                                        <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                            <div class="logo-header d-md-block d-lg-none">
                                                <Link to="/"><img src={logo} alt="" /></Link>
                                            </div>

                                            <ul class="nav navbar-nav">
                                                <li class="active has-mega-menu homedemo"> <Link to="/">Home</Link>

                                                </li>
                                                <li class="has-mega-menu"> <Link to="/reservation">Reservation</Link>

                                                </li>
                                                <li>
                                                    <Link to="/tournois">Tournois</Link>

                                                </li>
                                                <li class="has-mega-menu">
                                                    <Link to={'#'}>Tarifs</Link>

                                                </li>
                                                <li class="has-mega-menu"> <Link to="/contact">About US</Link>

                                                </li>

                                            </ul>
                                            <div class="dlab-social-icon">
                                                <ul>
                                                    <li><Link class="site-button sharp-sm fa fa-facebook" to="/javascript:void(0);"></Link></li>
                                                    <li><Link class="site-button sharp-sm fa fa-twitter" to="/javascript:void(0);"></Link></li>
                                                    <li><Link class="site-button sharp-sm fa fa-linkedin" to="/javascript:void(0);"></Link></li>
                                                    <li><Link class="site-button sharp-sm fa fa-instagram" to="/javascript:void(0);"></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>
                </Sticky>
            </>
        )
    }
}
export default Header;


