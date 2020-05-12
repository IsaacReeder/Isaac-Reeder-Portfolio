import React from "react";

import "./SideDrawer.css";

const sideDrawer = ({ projects, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {/* <button className="x">X</button> */}
      {projects.map(project => (
        <div target="_blank" rel="noopener noreferrer">
          <div className="drawer-container">
            <h4>Project: </h4>
            <h1 className="boxs"> {`${project.pName}`}</h1>
            <div className="boxs"> {`${project.description}`}</div>
            <div className="boxs"> {`${project.technologies}`}</div>
            <div className="boxs">
              {/* (. ͡👁️ ͜ ʖ ͡👁️.) */}
              {/* why hello there. */}
              <div className="icons-social">
                <a
                  alt="GitHub"
                  style={{ display: "table-cell" }}
                  href={`${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${project.image2}`} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default sideDrawer;
