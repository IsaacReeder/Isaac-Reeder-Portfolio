import React, { Component } from "react";
import "./Contact.scss";
import Fade from "../FadeEffect/Fade";

const words = [["collaborations"], ["new projects"], ["experiences"]];

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { index: -1 };
  }

  setIndex = () => {
    let index = this.state.index > words.length ? 0 : this.state.index + 1;
    this.setState({ index: index });
  };

  renderPages = () => {
    // console.log(this.state.index);
    return words[this.state.index];
  };

  componentDidMount() {
    this.loop = setInterval(() => this.setIndex(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  render() {
    const { lines } = this.props;

    return (
      <Fade>
        <React.Fragment>
          <div className="lines" id="Contact">
            {lines.map(line => (
              <h1 className="spacer">
                <div className="wordSpacer">{`${line.contactLines}`}</div>
                <div className="rotateCon">
                  <div className="forA">Reach out for </div>
                  <div className="words">
                    {this.renderPages() || "positions"}.
                  </div>
                </div>
                <div className="contactContainer">
                  <a
                    href={`mailto:${line.emailAddy}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="email">{`${line.emailAddy}`}</div>
                  </a>
                </div>
              </h1>
            ))}
          </div>
        </React.Fragment>
      </Fade>
    );
  }
}
