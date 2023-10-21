import React from 'react'
import ProductCard from '../components/user/productCard'
import axios from 'axios'
const getProducts=async()=>{
const {data}=await axios.get(`${process.env.API_URL}/api/articles`)
return data;
}
const ProductPage = async() => {
const produits = await getProducts();
return (

    <div className="flex flex-wrap gap-4 p-2">
{produits.map((p) => (

<ProductCard
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
export default ProductPage