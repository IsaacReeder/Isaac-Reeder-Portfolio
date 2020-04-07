import React, { Component, Fragment } from "react";
import "./ProjectsPage.scss";
import "../LandingPage/LandingPage.scss";
import Fade from "../FadeEffect/Fade";

export default class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Fade>
        <div className="projects" id="ProjectsPage">
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
      </Fade>
    );
  }
}
