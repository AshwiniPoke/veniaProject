import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './product-detail.css';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { handleAction } from '../../../Redux/cartSlice';
import icon1 from '../../../images/detailsIcon1.png';
import icon2 from '../../../images/detailsIcon2.png';
import icon3 from '../../../images/detailsIcon3.png';
import icon4 from '../../../images/detailsIcon4.png';

export default function ProductDetail() {

    const [data, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    console.log(data);

    const dispatch = useDispatch();
    const addProduct =(data) =>{
        dispatch(handleAction.addItem({...data}))
        console.log(data);
    }

    function addToCart(cartProdData) {
        console.log("added to cart", cartProdData);
        localStorage.setItem("cartProdData",JSON.stringify(cartProdData));
    }

    return (
        <div className='productDetailContainer'>
            <div className='container aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--7 '>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--2'>
                            <img src={data.image} className="sideImg"></img>
                            <img src={data.image} className="sideImg"></img>
                            <img src={data.image} className="sideImg"></img>
                            <img src={data.image} className="sideImg"></img>
                            <img src={data.image} className="sideImg"></img>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12'>
                            <img src={data.image} className="mainImg"></img>
                        </div>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 prodDetails '>
                    <p>Clothing/ Woman's/ Outerwear</p>
                    <h2>{data.title}</h2>
                    <p>${data.price}</p>
                    <p><small>{data.description}<span className='ReadMore'> Read more</span></small></p>
                    <hr />
                    <p><b>Color</b></p>
                    <p><b>Size</b></p>
                    <button className='sizeOptions'><small>XS</small></button>
                    <button className='sizeOptions'><small>S</small></button>
                    <button className='sizeOptions'><small>M</small></button>
                    <button className='sizeOptions'><small>L</small></button>
                    <button className='sizeOptions'><small>XL</small></button>
                    <p><b>Quantity</b></p>
                   <div> <button className='quantity-minus'> - </button>
                    <input type="text" className='quantity'/>
                    <button className='quantity-plus'> + </button></div>
                    <button className='AddToCartBtn' onClick={() => addProduct(data)}>Add To Cart</button>
                    <p><span><img src={require('../../../images/heart.svg').default} alt='icon' /> save</span>&nbsp;&nbsp;
                     <span><img src={require('../../../images/share.svg').default} alt='icon' /> share</span></p>

       </div>
            </div>
            <div className='aem-Grid aem-Grid--12 container'>
                <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 prodDetails'>
                    <h2>{data.title}</h2>
                    <h4>Description</h4>
                    <p>{data.description}</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 prodDetails'>
                    <h4>Details</h4>
                    <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--6 '>
                        <p><img src={icon1} />Sweat-wicking</p>
                        <p><img src={icon3} />Light-weight fabric</p>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 '>
                        <p><img src={icon2} />Breathable</p>
                        <p><img src={icon4} />69% nylon, 31% lycra</p>
                    </div>
                    </div>
                    <img src="../../../images/detailsicon1.png" alt=""></img>
                    <p></p>
                </div>
            </div>

        </div>
    )
}