import React, { useState } from "react";
import '../../aem-grid.css';
import '../../SASS/main.css';
import { navbarList } from "../Data";
import '../../SASS/phone.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import logo from '../../../images/logo.png';
import menu from '../../../images/menuicon.png';
import Filter from '../../Products/filters';
import { current } from "@reduxjs/toolkit";


export default function Navbar() {
    const [isShown, setIsShown] = useState(false);

    const showFilter = event => {
        setIsShown(current => !current);
    }

    const cartCounter = useSelector((value) => {
        return value.cart.item;
    });
    const totalCartItem = cartCounter.length;

    // function showFilter(){
    //     console.log("Show Filter");
    // }

    return (
        <>
            <nav className=" aem-Grid aem-Grid--12 container header" aria-label="navbar">
                {navbarList.map(navElement => {
                    return (
                        <>

                            <img src={menu} alt="menu" className="aem-GridColumn aem-GridColumn--phone--2 menuicon" onClick={showFilter} />
                        {
                            isShown && <Filter /> 
                        }

                            {/* <span className="nav-items aem-GridColumn aem-GridColumn--default--2 logo"><span className="v-text-logo">V</span><span className="other-text-logo">ENIA</span></span> */}
                            <a href="/veniaProject" className="nav-items aem-GridColumn aem-GridColumn--default--2 logo aem-GridColumn--tablet--1"><img src={logo} alt="logo"></img></a>

                            <ul className="nav-items aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide aem-GridColumn--tablet--8">
                                <li className="nav-link">{navElement.navlink1}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink2}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink3}</li>&nbsp;&nbsp;
                                <li className="nav-link">{navElement.navlink4}</li>&nbsp;&nbsp;
                            </ul>
                            <ul className="nav-items align-right aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--3">

                                <li className="nav-link"><img src={require('../../../images/search.svg').default} alt="search"></img><span className="linkUnderline"> {navElement.text1}</span> </li>
                                <li className="nav-link "><img src={require('../../../images/user.svg').default} alt="user" className="linkUnderline"></img><span className="linkUnderline">{navElement.text2}</span></li>
                                <li> <Link to="/cart"> <img src={navElement.icon3} alt="bag" className="bagImg"></img>{totalCartItem}</Link></li>

                            </ul>
                        </>
                    )
                })
                }

            </nav>
            <hr />

        </>
    )
}

