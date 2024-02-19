import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setProducts(res.data.products))
    }, [])


    return (
        <div className="mt-[30px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;