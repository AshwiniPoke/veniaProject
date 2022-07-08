import React, { useState, useEffect } from "react";
import './shoppingBag.css';
import { useSelector } from "react-redux/es/exports";
import Select from 'react-select';
import paypal from '../../../images/paypal.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    }
}


export default function ShoppingBag() {
    const [data, setData] = useState([]);

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    const cartData = useSelector((value) => {
        return value.cart.item;
    });

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []
    );


    function removeItem(id) {
        var index = cartData.indexOf(id)
        if (index !== -1) {
            cartData.splice(index, 1);
            this.setState({ cartData: cartData });
        }
    }
    localStorage.setItem("cartItemsLocal", JSON.stringify(cartData));

    return (
        <>
            <h1>Your Shopping Bag</h1>
            <div className="aem-Grid aem-Grid--12 Cart">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                    {cartData.map((value) => {
                        // console.log("cart values", value);

                        return (
                            <>
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 aem-GridColumn--tablet--6">
                                        <div className="aem-Grid aem-Grid--12 ">

                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--phone--5 ">
                                                <img src={value.image} className="imageprops"></img></div>
                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--7">
                                                <h4 className="cartProdDetails">{value.title}</h4>
                                                <p className="cartProdDetails"><small>size : medium</small></p>
                                                <p className="cartProdDetails"> <small>color : storm</small></p>
                                                <p className="cartProdDetails"> <small>$ {value.price}</small></p>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 quanBar">
                                        <button className="quantity-minus" onClick={decNum(value.id)} >  -</button>
                                        <input type="text" className='quantity' value={num} onChange={handleChange} />
                                        <button className='quantity-plus' onClick={incNum}> +  </button>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--3 editremove">
                                        <p><img src={require("../../../images/edit-2.svg").default} ></img> Edit here</p>
                                        <p><img src={require("../../../images/trash-2.svg").default} onClick={removeItem(value.id)}></img> Remove </p>
                                        <p><img src={require("../../../images/heart.svg").default}></img> Save for later</p>

                                    </div>

                                </div>
                            </>
                        )
                    })}
                    <div className="aem-Grid aem-Grid--12 aem-Grid aem-Grid--phone--12 aem-Grid--tablet--12 discount">
                        {/* <Select className='shipping'
                             defaultValue={pinOptions[0]}
                            placeholder="Estimate your Shipping"/> */}
                        <p className="border">Estimate your Shipping<span className="discrightalign">Shipping to 91001 
                        <img className='downArrow' src={require('../../../images/down-arrow.svg').default} alt='icon' />
                         </span> </p>
                        <p className="border">Enter a Coupon Code<span className="discrightalign">20% discount applied 
                        <img className='downArrow' src={require('../../../images/down-arrow.svg').default} alt='icon' />
                        </span></p>
                        <p className="border">Apply Gift Card</p>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 aem-GridColumn--tablet--12 totalSummary">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--12 border pricing">
                            <p ><b>Pricing summary</b></p>
                            <p> Subtotal <span className="rightalign">$388</span></p>
                            <p>Coupon  <span className="rightalign">-$77.60</span></p>
                            <p>Gift Card  <span className="rightalign">-$100.00</span></p>
                            <p>Estimated Tax  <span className="rightalign">$23.28</span></p>
                            <p>Estimated shipping  <span className="rightalign">FREE</span></p>
                            <p><b>Estimated Total<span className="rightalign">$233.68</span></b></p>
                            <button className="checkoutBtn">Checkout</button>
                            <img src={paypal} className="paypal"></img>
                        </div>

                    </div>
                </div>
            </div>

            <div className="aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--phone--hide CarousalDiv">
                <h2>
                    Recently Viewed
                </h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-0-px"
                >
                    {data.map((product) => {
                        // console.log("carousal", product);
                        let title = product.title;
                        let  splitTitle =   title?.split(' ').slice(0,3).join(' ')
                        return (
                            <>
                               <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn aem-GridColumn--phone--hide carousalCard" >
                            <img  src={product.image} className="carousalImg" alt="Product Image" />
                                {/* <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--7"> */}
                                    <h4 className="cartProdDetails">{splitTitle}</h4>
                                    <p className="cartProdDetails">${product.price}</p>
                                {/* </div> */}
                                </div>
                            </>)
                    })
                    }
                </Carousel>
            </div>
        </>)
}
