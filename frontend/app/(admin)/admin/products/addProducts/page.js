import React from 'react'
import FormAddProducts from '../../../../../components/products/formAddProducts';
import { fetchSCategories } from '../../../../../services/ScategorieService';

async function getScategories(){
      const scategories = await fetchSCategories();
      return scategories.data;
  }

const AddProducts = async() => {
    const scategories = await getScategories();
    console.log(scategories)
return (
<div>
<FormAddProducts scategories = {scategories} />
</div>
)
}
export default AddProducts