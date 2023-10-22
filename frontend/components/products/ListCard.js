'use client';
import Image from "next/image";
import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation';

const ListCards = (props) => {

    const router = useRouter()
   
    

//Pour actualiser la liste

const[products,setProducts]=React.useState(props.products)

const getProducts = async () => {
 const res= await fetch('https://backend-ecommerce-jwt-2024.vercel.app/api/articles')
  const products = await res.json();
  setProducts(products)
 }

React.useEffect(() => {
  getProducts();
  
 }, [products]);

    //suppression

   const handleDelete=async(_id)=>{
           if(window.confirm("supprimer la catégorie O/N")) {
                    console.log(_id)
                    await ( fetch('http://localhost:3001/api/articles/' + _id, {
                        method: "DELETE"
                    })).then(()=>{
                        router.push("/products/cards")
                    })
                    .catch(error=>{
                        console.log(error)
                        alert("Erreur ! Suppression non effectuée")
                    })
        }
    }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
     {
      products.map(product =>{
        
return  <div className="col-sm-3" key={product._id}> 
<div className="card">
<Image
src={product.imageart}
width={300}
height={200}
alt={product.designation}
priority={true}
/>
<h6>{product.designation}</h6>
<p>{product.marque}</p>
<p>{product.prix} TND</p>

<div className="flex mt-4 space-x-3 md:mt-6">
            <Link href={`/admin/products/update/${product._id}`} >Edit</Link>
            <span onClick={()=>handleDelete(product._id)} >Delete</span>
</div>

</div>
</div>

      })
     }
    </div>
  
  )
}

export default ListCards


