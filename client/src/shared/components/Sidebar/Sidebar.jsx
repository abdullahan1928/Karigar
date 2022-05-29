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

                    <hr />
                    <p className="title">SERVICES</p>
                    <Link to="/dashboard/ordersinqueue">
                        <li className="icons-list-item">
                            <LocalShippingIcon className="icon" />
                            <span className="dash-items-text">Orders In Queue</span>
                        </li>
                    </Link>
                    <Link to="/dashboard/previousorders">
                        <li className="icons-list-item">
                            <FeaturedPlayListIcon className="icon" />
                            <span className="dash-items-text">Previous Orders</span>
                        </li>
                    </Link>
                    <hr />
                    <p className="title">USER</p>
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
