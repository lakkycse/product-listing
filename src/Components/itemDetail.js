import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import { Container, Radio, Rating } from "./SlideImage";

function ItemDetail(match) {
    const { Id } = useParams();
    const [item, setItem] = useState(null);

    const BASE_URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        return fetch(`${BASE_URL}/${Id}`)
            .then(data => data.json()).then(data => setItem(data));
    }
    if (item) {
        return (
            <div className="details-container">
                <img className="details-image" src={item.image} />
                <div className="details-card">
                    <h2>{item.title}</h2>
                    <Container>
                    {[...Array(5)].map((i,index) => {
                        return (
                            <Rating key={index}>
                            <GrStar key={index}
                                color={
                                    index < item.rating.rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                            </Rating>
                        );
                    })}
                    </Container>
                    <span>₹{item.price}</span>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    }
    return null;
}

export default ItemDetail;