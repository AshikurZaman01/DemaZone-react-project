import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <section className="flex justify-between items-center shadow-md shadow-gray-400 rounded-full p-6">

                <div>
                    <Link to={'/'}><h1 className="text-3xl font-bold">DemaZone</h1></Link>
                </div>

                <nav>
                    <ul className="flex items-center gap-6 text-2xl font-semibold text-gray-600">
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/products'}><li>Products</li></Link>
                        <Link to={'/dashboard'}><li>Dashboard</li></Link>
                    </ul>
                </nav>
            </section>
        </div>
    );
};

export default Header;