import React, { Component, Fragment } from "react";
import "./ProjectsPage.scss";
import "../LandingPage/LandingPage.scss";
import { CSSTransition } from "react-transition-group";

export default class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="projects">
          {projects.map(project => (
            <Fragment>
              <div className="card">
                {" "}
                <h1 target="_blank" rel="noopener noreferrer">
                  {`${project.pName}`}
                </h1>
                <ul>{`${project.description}`}</ul>
                <ul>{`${project.technologies}`}</ul>
                <ul className="bottomr">
                  <a alt="GitHub" href={`${project.url}`}>
                    <i className={`fab ${project.image2}`} />
                  </a>
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </CSSTransition>
    );
  }
}
