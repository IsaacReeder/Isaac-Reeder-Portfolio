import React, { Component } from "react";
import Typist from "react-typist";
import "./LandingPage.scss";
// import Configs from "./configurations.json";

export default class LandingPage extends Component {
  render(props) {
    const {
      appClass,
      bgStyle,
      backgroundMode,
      devIntro,
      devDesc,
      jobTitle,
      icons
    } = this.props;

    return (
      <div className={appClass} style={bgStyle}>
        <div
          className={backgroundMode}
          onClick={this.changeBackgroundBasedonMode}
        >
          <main className="App-main">
            <h1 className="intro">{devIntro}</h1>
            <h2> {jobTitle}</h2>
            <div className="tagline">
              <Typist>{devDesc}</Typist>
            </div>
            <div className="icons-social">
              {icons.map(icon => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${icon.url}`}
                >
                  <i className={`fab ${icon.image}`} />
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}
