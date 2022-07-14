import React, { useEffect, useState } from 'react';
import Card from './card';
import './Category-Page/category.css';
import './product.css';
import '../../components/aem-grid.css';

export default function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState();
    
    const sortLowToHigh = (filter) => {
        console.log("onfilter", sort);
        if (filter) {
            const result = data.sort((a, b) => a.price - b.price);
            return setSort(result);
        }
        else {
            const result = data;
            return setSort(result);
        }
    }

    const getProdData = () => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
          .then(res => {
            return res.json()
          })
          .then(data => {
            setData(data);
            setLoading(false);
    
          })
        console.log(data)
      }

    useEffect(() => {
        getProdData()
    },[]);

    return (
        <>
{
        loading ? <h1 style={{ fontSize: "62px" }}>Loading...</h1> :
        <>
            <div className='aem-Grid aem-Grid--12 phoneFilters'>
                <img src={require('../../images/sliders.svg').default} alt='icon' /> <span>Filter results</span>&nbsp;&nbsp;&nbsp;
                <img src={require('../../images/arrow-up.svg').default} alt='icon' />
                <img src={require('../../images/arrow-down.svg').default} alt='icon' /> <span>Sort products</span>

            </div>
            <div className='aem-Grid aem-Grid--12'>
                <p className='resultcount'>{data.length} Results
                    <span>
                       <select className='sortBy' aria-label="Default select example" defaultValue={'DEFAULT'} onChange={sortLowToHigh}>
                            <option value="DEFAULT">Sort by Latest</option>
                            <option value="lowest">Low to High</option>
                        </select>
                    </span></p>
            </div>
       
        
            <div className='aem-Grid aem-Grid--12'>
            <Card data={data} loading={loading}></Card>
            </div>
                </>}
           
        </>

    )
}