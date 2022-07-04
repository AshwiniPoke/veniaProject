import React, { useEffect, useState } from 'react';
import Card from './card';
import './Category-Page/category.css';
import './product.css';
import '../../components/aem-grid.css';
// import LoadingSpinner from "./Loader";
import Select from 'react-select';


// const options = [
//     { value: 'byPrice', label: 'Sort By Price' },
//     { value: 'byLatest', label: 'Sort By Latest' },
// ];

export default function Product() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(selectedOption);


    useEffect(() => {
        // const getUserData = async () => {
        //     try{
        //         const response = await fetch(
        //             "https://fakestoreapi.com/products"  
        //         );
        //         const data = await response.json();
        //         setData(data);
        //         setIsLoading(false);
        //     }
        //     catch(error){
        //         console.log(error);
        //     }
        // }})
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []
    );
    console.log(data);
    // setIsLoading(false);



    // const sortLowToHigh = () => {
    //     const sortProduct = data?.sort((a, b) => (a.price > b.price ? 1 : -1));
    //     setData(sortProduct);
    //     console.log(sortProduct);

    // }
    data?.sort((a, b) => (a.price > b.price ? 1 : -1));

    // const renderCardData = (
    //     <Card data={data}></Card>
    // )

    return (
        <>
        <div className='aem-Grid aem-Grid--12 phoneFilters'>
        <img src={require('../../images/sliders.svg').default} alt='icon' /> <span>Filter results</span>&nbsp;&nbsp;&nbsp;
        <img src={require('../../images/arrow-up.svg').default} alt='icon' /> 
        <img src={require('../../images/arrow-down.svg').default} alt='icon' /> <span>Sort products</span>

        </div>
            <div className='aem-Grid aem-Grid--12'>
                <p className='resultcount'>{data.length} Results
                    <span>
                        {/* <Select className='sortBy'
                            defaultValue={options[0]}
                            onChange={sortLowToHigh}
                            options= /> */}

                        <select className='sortBy' aria-label="Default select example" defaultValue={'DEFAULT'} onChange={()=>{ data?.sort((a, b) => (a.price > b.price ? 1 : -1));}}>
                            <option value="1">Sort by Price</option>
                            <option value="DEFAULT">Low to High</option>

                        </select>

                    </span></p>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                {/* {isLoading ? <LoadingSpinner /> : {getUserData}} */}
                <Card data={data}></Card>

            </div>
        </>

    )
}