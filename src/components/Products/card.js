import React from 'react';
import './Category-Page/category.css';
import '../../components/aem-grid.css';
import { useNavigate, Link } from 'react-router-dom';

export default function Card(props) {
    let navigate = useNavigate();

      return (
        <>         
        {/* {productIcon.map((icon) =>{ */}
{props.data.map((product) => {
    let id = product.id;
                   
            return (
                <>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn aem-GridColumn--phone--6 card" onClick={() => navigate(`/products/${id}`)} >
                        <img className="productImage" src={product.image} alt="Product Image" />
                        <p className='prodTitle'>{product.title}</p>
                        <p className="price">${product.price}</p>
                        <img src={require('../../images/heart.svg').default} alt='icon' />                     
                         <br/>
                    </div>
                    {/* </Link> */}
                </>
            )
        })
        }
    {/* })} */}
        </>
    )
}