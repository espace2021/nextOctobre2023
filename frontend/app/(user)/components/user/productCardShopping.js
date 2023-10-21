'use client'
import Image from "next/image";
import React from "react";

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const ProductCardShopping = ({image,prix,des}) => {

        
const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
        redirect('/signin?callbackUrl=/shoppingSpace')
        }
      })

return (
<div className="col-sm-3">
<div className="card">
<Image
src={image}
width={300}
height={200}
alt={des}
priority={true}
/>
<h6>{des}</h6>
<p>{prix}</p>
<button className="btn btn-warning">
        Add to cart
</button>

</div>
</div>
);
};
export default ProductCardShopping;
