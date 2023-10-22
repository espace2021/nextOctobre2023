import Listproducts from '../../../../../components/products/ListCard';
import React from 'react'

async function getProducts(){
 
    const res= await fetch('https://backend-ecommerce-jwt-2024.vercel.app/api/articles', { cache: 'no-cache' })
    const products = await res.json();
    return products;
}

const ListproductCards = async () => {
  const products = await getProducts();
  
  return (
    <div>
        <Listproducts products={products} />
    </div>
  )
}

export default ListproductCards
