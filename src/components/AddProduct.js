import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCatgory] = useState('');
    const [company, setCompany] = useState('');
    const [error ,setError] = useState(false);

     const addProduct = async () => {
        console.warn(name, price, category, company);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user?._id;
        console.log("The userId is ", userId);
        let result = await fetch('http://localhost:5000/add_product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn("The result of add-product is ", result);
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>

            <input 
                type="text" 
                placeholder='Enter Product Name' 
                className='inputBox' 
                value={name} 
                onChange={(e)=> setName(e.target.value)}
            />
            {error && !name && <span className='invlaid-input'>Enter Valid Name</span>}

            <input 
                type="text" 
                placeholder='Enter Product Price' 
                className='inputBox' 
                value={price} 
                onChange={(e)=> setPrice(e.target.value)}
            />
            {error && !price && <span className='invlaid-input'>Enter Valid Price</span>}

            <input 
                type="text" 
                placeholder='Enter Product Category' 
                className='inputBox' 
                value={category} 
                onChange={(e)=> setCatgory(e.target.value)}
            />
            {error && !category && <span className='invlaid-input'>Enter Valid category</span>}

            <input 
                type="text" 
                placeholder='Enter Product Company' 
                className='inputBox' 
                value={company} 
                onChange={(e)=> setCompany(e.target.value)}
            />
            {error && !company && <span className='invlaid-input'>Enter Valid Company</span>}

            <button onClick={addProduct} type='button' className='appbutton'>
                Add Product
            </button>
        </div>
    )
}

export default AddProduct;
