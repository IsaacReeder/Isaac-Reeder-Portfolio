import React from "react";

import "./DrawerToggleButton.scss";

const drawerToggleButton = props => (
  <div className="button-spacer">
    <div className="toggle-button" onClick={props.click}>
      <h1>React Ecommerce</h1>
    </div>
  </div>
);

export default drawerToggleButton;
