import Link from "next/link";
import React from "react";
import { urlFor } from "../client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`} />
      <div className="product-card">
        <img src={urlFor(image && image[0])} 
        width={250}
        height={250}
        className='product-image'
        />
        <p className ='priduct-name' >{name}</p>
        <p className ='product-price' >${price}</p>
      </div>
    </div>
  );
};

export default Product;
