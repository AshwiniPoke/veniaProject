import React from "react";
import '../../aem-grid.css';
import './category.css';
import { heroBanner } from '../../Layout/Data';
import Products from '../products';
import Filters from '../filters';
// import Pagin from './pagination';

export default function CategoryPage() {
   return (
        <>
            <div className=" aem-Grid aem-Grid--12 container heroImg">
               {heroBanner.map(element => {
                    return (
                        <>
                            <div className=" aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 heroTxt">
                                <h1 className="whiteTxt">Women's</h1>
                                <hr className="heroHr" />
                            </div>
                            <div className="heroImg aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 heroBanner">
                                <img src={element.heroimg} alt='HeroBanner' className="herobanner"></img>
                            </div>
                        </>
                    )
                }
                )}
            </div>
<br />
            {/* <div className="container aem-Grid aem-Grid--12">
                <span className="aem-GridColumn aem-GridColumn--default--4">Clothing/ Women's/ Outerwear</span>
                <span className="aem-GridColumn aem-GridColumn--default--4">38 Results</span>
                <span className="aem-GridColumn aem-GridColumn--default--4"><input type="text" placeholder="sort by latest"></input></span>
            </div> */}
            <br />
            <div className="container aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--phone--hide filters">
                    < Filters />
                </div>
                <div className=" aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                        <Products />
                </div>
            </div>
        </>
    )
} 