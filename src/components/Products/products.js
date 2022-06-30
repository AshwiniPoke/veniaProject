import React, { useEffect, useState } from 'react';
import Card from './card';
import './Category-Page/category.css';
import './product.css';
import '../../components/aem-grid.css';
import Select from 'react-select';
import ShoppingBag from './Shopping-bag/shoppingCart';


const options = [
    { value: 'byPrice', label: 'Sort By Price' },
    { value: 'byLatest', label: 'Sort By Latest' },
];

export default function Product() {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
console.log(selectedOption);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    // console.log(data);
    // if(selectedOption.value === "byPrice"){
    //     data.sort(function(a,b){
    //         return parseInt(a.data.price) - parseInt(b.data.price)
    //     })
    //     }

    return (
        <>
            <div className='aem-Grid aem-Grid--12'>
                <p className='resultcount'>{data.length} Results
                    <span>
                        <Select className='sortBy'
                            defaultValue={options[0]}
                            onChange={setSelectedOption}
                            options={options}/>
                        </span></p>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <Card data={data}></Card>
                {/* <ShoppingBag data={data}></ShoppingBag> */}
            </div>
        </>

    )
}