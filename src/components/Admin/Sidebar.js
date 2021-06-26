import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaPlus } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="pl-2  mb-5">
        <Link to="/" className="site-title">
          Retro Tech Blog
        </Link>
      </h3>
      <ul className="sidebar-links">
        <li>
          <Link to="/addBlog">
            <FaPlus /> Add Blog
          </Link>
        </li>

        <li>
          <Link to="/manageBlogs">
            <FaTasks /> Manage Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
