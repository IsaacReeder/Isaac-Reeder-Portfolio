import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";
import "./Nav.scss";

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
        <React.Fragment>
          <div className="Container">
            <div
              className="smiley"
              onMouseEnter={() => changeBackgroundBasedonMode()}
              src="smiley"
              alt="IsaacReeder.com"
            ></div>
          </div>
          <div className="Container2">
            <Link
              activeClass="active"
              to="ProjectsPage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              Projects
            </Link>
          </div>
          <div className="Container3">
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
            >
              Contact
            </Link>
          </div>
        </React.Fragment>
      </CSSTransition>
    );
  }
}

export default Nav;
