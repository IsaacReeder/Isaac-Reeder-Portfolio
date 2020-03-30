import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Nav.css";

class Nav extends React.Component {
  render() {
    var changeBackgroundBasedonMode = this.props.changeBackgroundBasedonMode;
    return (
      <CSSTransition
        in={true}
        out={true}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
        <div className="Container">
          <div
            className="smiley"
            onMouseEnter={() => changeBackgroundBasedonMode()}
            src="smiley"
            alt="IsaacReeder.com"
          ></div>
        </div>
      </CSSTransition>
    );
  }
}

export default Nav;
