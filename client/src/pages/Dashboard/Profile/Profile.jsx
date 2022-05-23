import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import Navbar from "../../../shared/components/Navbar/Navbar";
import DashboardTitle from "../../../shared/components/DashboardTitle/DashboardTitle";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import './Profile.css'

export const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                {/* <div className="profile-top">
                    <h1 className="profile-title">{title}</h1>
                </div> */}
                <DashboardTitle title="Profile" />
                <div className="profile-bottom">
                    <div className="profile-left">
                        <img
                            className="profile-image"
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="profile-right">
                        <form className='profile-changes'>
                            <div className="formInput">
                                <label htmlFor="file" className="uploadPic">
                                    Image:
                                    <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <button className='save'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
