import React, { Component, Fragment } from "react";

export default class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="icons-social">
          {projects.map(project => (
            <Fragment>
              {" "}
              <h1 target="_blank" rel="noopener noreferrer">
                {`${project.pName}`}
              </h1>
              <img alt="pic" src={`${project.image}`}></img>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}
