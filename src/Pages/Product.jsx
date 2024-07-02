import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {

  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId));

  return (
    <>
        <BreadCrums product={product} />
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </>
  )
}

export default Product