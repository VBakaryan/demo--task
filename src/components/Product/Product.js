import React from 'react'

import './Product.scss';

const Product = ({title, description, price}) => {
    return (
        <div className='product-blok'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Product;