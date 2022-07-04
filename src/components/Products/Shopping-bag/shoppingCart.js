import React, {useState} from "react";
import './shoppingBag.css';
import { useSelector } from "react-redux/es/exports";
import Select from 'react-select';
import paypal from '../../../images/paypal.png';



export default function ShoppingBag(props) {

    let [num, setNum]= useState(1);
    let incNum =()=>{
      if(num<10  )
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>1)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }

    const cartData = useSelector((value) => {
        return value.cart.item;
    });

    console.log("props data", props.data);

    function removeItem(id){
//cartData.sp
var index = cartData.indexOf(id)
if (index !== -1) {
    cartData.splice(index, 1);
  this.setState({cartData: cartData});
    }
    }
    localStorage.setItem("cartItemsLocal",JSON.stringify(cartData));

       return (
        <>
            <h1>Your Shopping Bag</h1>
            <div className="aem-Grid aem-Grid--12 Cart">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                    {cartData.map((value) => {
                        console.log("cart values", value);

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
                                        <input type="text" className='quantity'value={num} onChange={handleChange} />
                                        <button className='quantity-plus'  onClick={incNum}> +  </button>
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
                        <p className="border">Estimate your Shipping<span className="discrightalign">Shipping to 91001 </span></p>
                        <p className="border">Enter a Coupon Code<span className="discrightalign">20% discount applied</span></p>
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

            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--hide">
                <h2>
                    Recently Viewed
                </h2>
               
               
            </div>
        </>
    )
}