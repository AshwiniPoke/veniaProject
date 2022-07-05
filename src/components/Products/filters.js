import React from 'react';
import './product.css';
import colorpallet from '../../images/color.png';


export default function Filters() {
    return (
        <>
            <div className='Filter'>
            <p className='filtertext'>Clothing/ Woman's/ Outerwear</p>
                <h3>Filters</h3>
                <hr />
                <div className='sizeFilter'>
                    <p><b>Size</b></p>
                    <p className="checkbox" ><input type="checkbox" ></input><span>X-Small</span></p>
                    <p className="checkbox" ><input type="checkbox" ></input><span>Small</span></p>
                    <p className="checkbox" ><input type="checkbox" ></input><span>Medium</span></p>
                    <p className="checkbox" ><input type="checkbox" ></input><span>Large</span></p>
                    <p className="checkbox" ><input type="checkbox" ></input><span>X-Large</span></p>
                </div>
                <hr />
                <div className='styleFilter'>
                    <p><b>Style</b></p>
                    <p className="checkbox"><input type="checkbox"></input><span>Outdoor</span></p>
                    <p className="checkbox"><input type="checkbox"></input><span>Casual</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Athleisure</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Running</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Active</span></p>
                </div>
                <hr />
                <div className='colorFilter'>
                    <p><b>Color</b></p>
                   <img src={colorpallet} className="colorFilterImg"/>
                </div>
                <hr />
                <div className='BrandFilter'>
                    <p><b>Brand</b></p>
                    <p className="checkbox"><input type="checkbox"></input><span>Calvin Klein</span></p>
                    <p className="checkbox"><input type="checkbox"></input><span>Dolce & Gabbana</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Miu Miu</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Prada</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Rag & Bone</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Gucci</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Chanel</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Salvatore Ferragamo</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Mami</span></p>
                    <p className="checkbox"><input type="checkbox" ></input><span>Dior</span></p>

                </div>
                <hr />
            </div>
        </>
    )
}