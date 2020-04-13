import React, { Component } from "react";

import "./LandingPage.scss";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const words = [["test1"], ["test2"], ["test3"]];

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
  ////////////////////
  constructor(props) {
    super(props);
    this.state = { index: -1 };
  }

  setIndex = () => {
    // let index = this.state.index > words.length ? 0 : this.state.index + 1;
    var RandomNumber = Math.floor(Math.random() * 3);
    this.setState({ index: RandomNumber });
  };

  renderPages = () => {
    var RandomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(this.state.index);
    return words[this.state.index + RandomNumber];
  };
  renderPages2 = () => {
    var RandomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(this.state.index);
    return words[this.state.index + RandomNumber];
  };
  renderPages3 = () => {
    var RandomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(this.state.index);
    return words[this.state.index + RandomNumber];
  };
  renderPages4 = () => {
    var RandomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(this.state.index);
    return words[this.state.index + RandomNumber];
  };

  componentDidMount() {
    this.loop = setInterval(() => this.setIndex(), 700);
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }
  ////////////////////
  render(props) {
    const {
      appClass,
      bgStyle,
      backgroundMode,
      devDesc1,
      devDesc2,
      devDesc3,
      devDesc4,
      jobTitle,
      icons
    } = this.props;

    // let tagLine = this.state.tagLine;
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
              <div className="organizer">
                {/* <h1 className="intro">{devIntro}</h1> */}
                <h1 className="jobTitle"> {jobTitle}</h1>
                <div className="techContainer">
                  {/* <h4 className="spacer">|</h4> */}
                  <h2
                    className={this.renderPages() || "normal"}
                    style={
                      ({ width: "5rem" }, { transition: "margin-top 1s ease" })
                    }
                  >
                    .{devDesc1}
                  </h2>
                  <h2
                    className={this.renderPages2() || "normal"}
                    style={
                      ({ width: "5rem" }, { transition: "margin-top 1s ease" })
                    }
                  >
                    .{devDesc2}
                  </h2>
                  {/* <div className="disappear"> */}
                  <h2
                    className={this.renderPages3() || "normal"}
                    style={
                      ({ width: "2rem" }, { transition: "margin-top 1s ease" })
                    }
                  >
                    .{devDesc3}
                  </h2>
                  <h2
                    className={this.renderPages4() || "normal"}
                    style={
                      ({ width: "1.8rem" },
                      { transition: "margin-top 1s ease" })
                    }
                  >
                    .{devDesc4}
                  </h2>
                  <h2 className={"normal"}>&zwnj;</h2>
                </div>
                {/* </div> */}
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
              </div>
            </main>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
