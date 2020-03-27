import React, { Component } from "react";
import Typist from "react-typist";
import "./LandingPage.scss";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  flash: {
    animation: "1s 3s",
    animationName: Radium.keyframes(flash, "flash")
  }
};

export default class LandingPage extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/projects" />;
    }
  };

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
      <CSSTransition
        in={true}
        out={true}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
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
              <StyleRoot>
                <div className="redirect" style={styles.flash}>
                  {this.renderRedirect()}
                  <h4 onClick={this.setRedirect}>Projects</h4>
                </div>
              </StyleRoot>
            </main>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
