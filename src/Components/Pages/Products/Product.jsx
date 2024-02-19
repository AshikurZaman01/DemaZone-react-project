import { Link } from "react-router-dom";

const Product = ({ product }) => {
    console.log(product);

    const { id, brand, title, category, description, discountPercentage, images, price, thumbnail, stock, rating } = product || {};

    return (
        <div className="mx-auto">

            <Link><div className="sm:w-[300px] sm:h-[200px] md:w-[320px] md:h-[250px] shadow-md shadow-gray-400 p-2 rounded-md">
                <img className="w-full h-full" src={images[1]} alt="" />
            </div></Link>

        </div>
    );
};

export default Product;