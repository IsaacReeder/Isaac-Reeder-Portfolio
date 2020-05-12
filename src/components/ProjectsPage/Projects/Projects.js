import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton2 from "../SideDrawer/DrawerToggleButton2";
import DrawerToggleButton3 from "../SideDrawer/DrawerToggleButton3";
import DrawerToggleButton4 from "../SideDrawer/DrawerToggleButton4";
import Fade from "../../FadeEffect/Fade";

import "./Projects.css";

const Projects = props => (
  <Fade>
    <header className="Projects">
      <div className="Projects__navigation" id="ProjectsPage">
        <DrawerToggleButton click={props.drawerClickHandler} />
        <DrawerToggleButton2 click={props.drawerClickHandler2} />
        <DrawerToggleButton3 click={props.drawerClickHandler3} />
        <DrawerToggleButton4 click={props.drawerClickHandler4} />
      </div>
    </header>
  </Fade>
);

export default Projects;
