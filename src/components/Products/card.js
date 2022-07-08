import React, { useState } from 'react';
import './Category-Page/category.css';
import '../../components/aem-grid.css';
import Pagination from "react-js-pagination";
import { useNavigate, Link } from 'react-router-dom';

export default function Card({ data }) {
    console.log("data",data);
    let navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [cardsPerPage]=useState(6);
 
    const lastcardIndex =page * cardsPerPage;
    const firstcardIndex = lastcardIndex - cardsPerPage;
    const currentData= data.slice(firstcardIndex,lastcardIndex);

    const paginate = pageNumber => setPage(pageNumber);
    console.log(data.length);

    return (
        <>
            {currentData.map((product) => {
                let id = product.id;
                let title = product.title;
            let  splitTitle =   title?.split(' ').slice(0,3).join(' ')
                return (
                    <>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--tablet--6 card" onClick={() => navigate(`/products/${id}`)} >
                            <img className="productImage" src={product.image} alt="Product Image" />
                            <p className='prodTitle'>{splitTitle}</p>
                            <p className="price">${product.price}</p>
                            <img className='heartIcon' src={require('../../images/heart.svg').default} alt='icon' />
                            <br />
                        </div>
                    </>
                )
            })
            }

            <div className='aem-GridColumn aem-GridColumn--default--12'>
            <Pagination
                activePage={page}
                itemsCountPerPage={6}
                totalItemsCount={data.length}
                pageRangeDisplayed={5}
                onChange={paginate}
            />
            </div>
        </>
    )
}