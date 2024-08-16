import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import array from "../../utilities/mockdata"
const Card = (x) => {
    return <div className="box">
        <img className="img" src={x.data.img}></img>
        <h3 className="name">{x.data.hotel}</h3>
        <h3 className="rating"><i className="bi bi-star-fill"></i> {x.data.rating}</h3>
        <p className="type">{x.data.type}</p>
        <p className="area">{x.data.area}</p>
    </div>
}
const CardFlex = () => {
    return <div className="card-flex">
        {   
            
            array.map((y) => {
                return <Card data={y} />
            })

        }


    </div>
}
const CardBody = () => {
    
    return <div className="card-body">
        <h2 className="head">Restaurants with online food delivery in Banglore</h2>
        <div className="btn-flex">
        <button className="btn">Pure Veg</button>
        <button className="btn">Fast Delivery</button>    
        <button className="btn">Ratings 4.0+</button>
        <button className="btn">Rs. 300-Rs. 600</button>
        <button className="btn">Less than Rs. 300</button>
        <button className="btn">Non Veg</button>
        <button className="btn">Ice Creams</button>

        </div>
        <CardFlex />

    </div>
}
export default CardBody;
