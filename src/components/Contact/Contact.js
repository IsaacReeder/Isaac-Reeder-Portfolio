import React, { Component } from "react";
import "./Contact.css";

const words = [
  ["collaborations"],
  ["new projects"],
  ["experiences"],
  ["positions"]
];

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
    console.log(this.state.index);
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
      <React.Fragment>
        <div className="lines">
          {lines.map(line => (
            <h1 className="spacer">
              {`${line.contactLines}`}
              <div className="contactContainer">
                <div className="ReachBubble">reach out</div>
                <div className="email">{`${line.emailAddy}`}</div>
              </div>
            </h1>
          ))}
          <div className="rotateCon">
            <h1 className="forA">For </h1>
            <h3 classname="great">
              <u> great </u>
            </h3>
            <div className="words">{this.renderPages() || "ideas"}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
