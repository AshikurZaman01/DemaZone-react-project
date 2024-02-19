import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    console.log(product);

    const { title, category, description, brand, images, price, discountPercentage, rating, stock, thumbnail } = product || {}

    return (
        <div className="mt-10">

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <section className="col-span-1">
                    <div className="md:w-full md:h-[450px]">
                        <img className="w-full h-full" src={thumbnail} alt="" />
                    </div>
                </section>

                <section className="col-span-1 p-5 space-y-16">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-500">{brand}</p>
                        <h1 className="text-4xl font-semibold">{title}</h1>
                        <p className="text-xl">{description}</p>
                    </div>

                    <div className="divider"></div>

                    <div className="space-y-4">
                        <h1 className="text-4xl">Tk : {price}</h1>


                        <button className="btn w-full flex justify-start btn-error text-white">Add to Cart</button>
                    </div>


                </section>
            </div>

        </div>
    );
};

export default ProductDetails;