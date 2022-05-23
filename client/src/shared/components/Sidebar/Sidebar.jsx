import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="dash-logo">
                        Karigar
                    </span>
                </Link>
            </div>
            <hr />
            <div className="sidebar-center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/dashboard">
                        <li className="icons-list-item">
                            <DashboardIcon className="icon" />
                            <span className="dash-items-text">Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">SERVICES</p>
                    <li className="icons-list-item">
                        <PersonIcon className="icon" />
                        <span className="dash-items-text">Users</span>
                    </li>
                    <li className="icons-list-item">
                        <Inventory2Icon className="icon" />
                        <span className="dash-items-text">Products</span>
                    </li>
                    <Link to="/dashboard/previousorders">
                    <li className="icons-list-item">
                        <FeaturedPlayListIcon className="icon" />
                        <span className="dash-items-text">Previous Orders</span>
                    </li>
                    </Link>
                    <Link to="/dashboard/ordersinqueue">
                    <li className="icons-list-item">
                        <LocalShippingIcon className="icon" />
                        <span className="dash-items-text">Orders In Queue</span>
                    </li>
                    </Link>
                    <p className="title">SYSTEM</p>
                    <li className="icons-list-item">
                        <AnalyticsIcon className="icon" />
                        <span className="dash-items-text">Stats</span>
                    </li>
                    <li className="icons-list-item">
                        <NotificationsIcon className="icon" />
                        <span className="dash-items-text">Notifications</span>
                    </li>
                    <li className="icons-list-item">
                        <LocalHospitalIcon className="icon" />
                        <span className="dash-items-text">System Health</span>
                    </li>
                    <li className="icons-list-item">
                        <PsychologyIcon className="icon" />
                        <span className="dash-items-text">Logs</span>
                    </li>
                    <p className="title">USER</p>
                    <li className="icons-list-item">
                        <SettingsIcon className="icon" />
                        <span className="dash-items-text">Settings</span>
                    </li>
                    <Link to="/dashboard/profile">
                        <li className="icons-list-item">
                            <AccountCircleIcon className="icon" />
                            <span className="dash-items-text">Profile</span>
                        </li>
                    </Link>
                    <li className="icons-list-item">
                        <LogoutIcon className="icon" />
                        <span className="dash-items-text">Logout</span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Sidebar;
