import React, { Component } from "react";
import Typist from "react-typist";
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
    let index = this.state.index > words.length ? 0 : this.state.index + 1;
    this.setState({ index: index });
  };

  renderPages = () => {
    console.log(this.state.index);
    return words[this.state.index];
  };

  componentDidMount() {
    this.loop = setInterval(() => this.setIndex(), 1000);
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
      devDesc,
      jobTitle,
      icons
    } = this.props;

    let tagLine = this.state.tagLine;
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

                <h2 className={this.renderPages()}>
                  {devDesc.tech}
                  {devDesc.tech1}
                </h2>

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
