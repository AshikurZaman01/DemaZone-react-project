import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const Roots = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;