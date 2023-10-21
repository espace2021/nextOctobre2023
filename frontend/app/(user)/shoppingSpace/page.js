import React from 'react'
import ProductCardShopping from '../components/user/productCardShopping'
import axios from 'axios'



const getProducts=async()=>{

const {data}=await axios.get(`${process.env.API_URL}/api/articles`)
return data;
}
const ShoppingSpacePage = async() => {

const produits = await getProducts();
return (

<div className="row">
{produits.map((p) => (

<ProductCardShopping
key={p._id}
id={p._id}
image={p.imageart}
prix={p.prix}
des={p.designation}
/>
))}
</div>
)
}
export default ShoppingSpacePage