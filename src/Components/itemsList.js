import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import '../App.css'


const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="card">
                <img className="productImg" src={product.image} />
                <h3 className="title">{product.title}</h3>
                <p className="price">₹{product.price}</p>
            </div>
        </Link>
    )
};


const ItemsList = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(data => data.json().then(data => setProducts(data)));
    }

    if (products.length > 0) {
        return (
            <div className="container">
                {
                    products.map((item, index) => {
                        return (
                            <Item product={item} key={index} />
                        );
                    })
                }
            </div>
        );
    }
    return null;
};

export default ItemsList;