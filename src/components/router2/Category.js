import {useState} from "react";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

export default function Category () {
    let navigate = useNavigate();
    const sendDataToProduct = (e) =>{
        navigate(`/product`,{state : {categoryID : e.target.value}})
    }

    return(
        <>
            <h1>Select a category</h1>
            <select defaultValue="default" onChange={(e)=>sendDataToProduct(e)}>
                <option value="default" disabled hidden>Choose your category ...</option>
                <option value="car">Car</option>
                <option value="toy">Toy</option>
                <option value="candy">Candy</option>
                <option value="hat">Hat</option>
            </select>
        </>
    )
}