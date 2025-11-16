import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };

    return (
        <div className="product-list">
            <h3>Product List</h3>

            <ul className="header">
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            </ul>

            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={item._id} className="list">
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>`{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                    </ul>
                ))
            ) : (
                <h4>No Products Found</h4>
            )}
        </div>
    );
};

export default ProductList;
