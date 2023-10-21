import Image from "next/image";
import React from "react";
const ProductCard = ({image,prix,des}) => {
return (
<div className="shadow rounded-md hover:shadow-md cursor-pointer overflow-hidden p-4">
<Image
src={image}
width={300}
height={200}
alt={des}
priority={true}
/>
<h6 className="text-center text-slate-600 p-2">{des}</h6>
<p className="text-center text-emerald-500 p-2">{prix}</p>
</div>
);
};
export default ProductCard;
