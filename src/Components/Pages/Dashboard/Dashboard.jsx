import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex justify-between mt-5">

            <div className="w-[20%] bg-red-50 ">
                <nav>
                    <ul className="flex flex-col gap-5 p-5 rounded-sm text-2xl font-semibold">
                        <li><Link to={'/dashboard'}>Dash Home</Link></li>
                        <li><Link to={'/dashboard/profile'}>Profile</Link></li>
                        <li><Link to={'/dashboard/editProfile'}>Edit Profile</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="w-[80%] bg-blue-400 p-5">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;