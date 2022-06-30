import React from "react";
import '../../aem-grid.css';
import '../../SASS/main.css';
import { navbarList } from "../Data";
import '../../SASS/phone.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import logo from '../../../images/logo.png';

export default function Navbar() {

    const cartCounter = useSelector((value) => {
        return value.cart.item;
    });
    const totalCartItem = cartCounter.length;
   

    return (
        <>
            <div className=" aem-Grid aem-Grid--12 container">
                {navbarList.map(navElement => {
                    return (
                        <>
                            {/* <span className="nav-items aem-GridColumn aem-GridColumn--default--2 logo"><span className="v-text-logo">V</span><span className="other-text-logo">ENIA</span></span> */}
                            <a href = "/" className="nav-items aem-GridColumn aem-GridColumn--default--2"><img src={logo}></img></a>
                            
                            <ul className="nav-items aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                                <li className="nav-link"><a href="#" className="linkUnderline" >{navElement.navlink1}</a></li>&nbsp;&nbsp;
                                <li className="nav-link"><a href="#" className="linkUnderline">{navElement.navlink2}</a></li>&nbsp;&nbsp;
                                <li className="nav-link"><a href="#" className="linkUnderline">{navElement.navlink3}</a></li>&nbsp;&nbsp;
                                <li className="nav-link"><a href="#" className="linkUnderline">{navElement.navlink4}</a></li>&nbsp;&nbsp;
                            </ul>
                            <ul className="nav-items align-right aem-GridColumn aem-GridColumn--default--4">
                                <li className="nav-link"><img src={require('../../../images/search.svg').default} alt="search" ></img><a href="#" className="linkUnderline">{navElement.text1}</a> </li>
                                <li className="nav-link"><img src={require('../../../images/user.svg').default} alt="user"></img><a href="#" className="linkUnderline">{navElement.text2}</a></li>
                               <li> <Link to="/cart"> <img  src={navElement.icon3} alt="bag" className="bagImg"></img>{totalCartItem}</Link></li>

                            </ul>
                        </>
                    )
                })
                }

            </div>
            <hr />

        </>
    )
}

