import React, { Component, Fragment } from "react";
import "./ProjectsPage.scss";
import "../LandingPage/LandingPage.scss";
import { CSSTransition } from "react-transition-group";

export default class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <div className="projects">
            {projects.map(project => (
              <Fragment>
                <div className="card">
                  {" "}
                  <h1 target="_blank" rel="noopener noreferrer">
                    {`${project.pName}`}
                  </h1>
                  <img
                    className="image"
                    alt="pic"
                    src={`${project.image}`}
                  ></img>
                  <h5>{`${project.description}`}</h5>
                  <h6>{`${project.technologies}`}</h6>
                </div>
              </Fragment>
            ))}
          </div>
        </CSSTransition>
      </div>
    );
  }
}
