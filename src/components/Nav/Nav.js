import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Nav.scss";

class Nav extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    var changeThemeMode = this.props.changeThemeMode;

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
              onMouseEnter={() => changeThemeMode()}
              onClick={this.scrollToTop}
              src="smiley"
              alt="IsaacReeder.com"
            ></div>
          </div>
          <h3 className="Container2">
            <CSSTransition
              in={true}
              out={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
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
            </CSSTransition>
          </h3>
          <h3 className="Container3">
            <CSSTransition
              in={true}
              out={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
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
            </CSSTransition>
          </h3>
        </React.Fragment>
      </CSSTransition>
    );
  }
}

export default Nav;
