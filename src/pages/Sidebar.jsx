import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-item">
        <span>&larr;</span>
        <span>Detail</span>
      </button>
      <div className="sidebar-item-rating">
        <span className="rating">10</span>
        <span>Rate it</span>
      </div>

      <button className="sidebar-item">
        <span>🔗</span>
        <span>Share this</span>
      </button>
      <button className="sidebar-item">
        <span>❤️</span>
        <span>Favorite</span>
      </button>
      <button className="sidebar-item">
        <span>💡</span>
        <span>Off light</span>
      </button>
    </div>
  );
};

export default Sidebar;
