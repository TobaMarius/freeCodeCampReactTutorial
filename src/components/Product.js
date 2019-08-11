import React from 'react';

let products = [
    {
        name: "chair",
        description: 'this is a chiar',
        unit_price: 45.99
    },
    {
        name: "table",
        description: "this is a table",
        unit_price: 123.75
    },
    {
        name: "sofa",
        description: 'this is a sofa',
        unit_price: 399.50
    }
];

function Product() {

    return (
        <div>
            {
                products.map(function (product, idx) {
                    return (<li key={idx}>
                        <div>{product.name}</div>
                        <div>{product.unit_price}$ -{product.description}</div>
                    </li>)
                })
            }
        </div>
    );
}

export default Product;