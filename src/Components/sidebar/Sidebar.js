import "./sidebar.css";
import {
  ThunderboltFilled,
  GitlabFilled,
  CloseCircleFilled,
  ProfileFilled,
  SettingFilled,
  FireFilled,
  RobotFilled,
  BellFilled,
  CodepenCircleFilled,
  DropboxCircleFilled,
  TwitterCircleFilled,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
        <span className="logo">New world</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <ThunderboltFilled className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users">
          <li>
            <GitlabFilled className="icons" />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products">
          <li>
            <CodepenCircleFilled className="icons" />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <DropboxCircleFilled className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <TwitterCircleFilled className="icons" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <SafetyCertificateFilled className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <BellFilled className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <RobotFilled className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <FireFilled className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingFilled className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ProfileFilled className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <CloseCircleFilled className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar;
