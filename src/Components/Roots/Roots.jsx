import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const Roots = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;