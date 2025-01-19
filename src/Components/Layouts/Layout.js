import React from "react";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import css from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <Sidebar/>

      {pathname === "/" && <Navigate to="/Dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Enter here" />
          </div>
          <div className={css.profile}>
            <img src="./profile.jpeg" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fpeople-happy-face-man-icon_3070365.htm&psig=AOvVaw31nq5pmCoWnkHNG7G1KHVO&ust=1737399412446000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiOop27gosDFQAAAAAdAAAAABAZ"/>

            <div className={css.details}>
              <span>Farhan Ahmed</span>
              <span>farhanahmed73368@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;