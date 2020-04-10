import React, { Component } from "react";

import "./LandingPage.scss";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(this.coverFunc(), 1000);
    const { startCount } = this.props;
    this.setState({
      count: startCount
    });
    this.doIntervalChange();
  }

  coverFunc = () => {
    console.log("cf1");
    this.doStuff();
    return "test1";
  };
  coverFunc2 = () => {
    console.log("cf2");
    this.doStuff();
  };
  coverFunc3 = () => {
    console.log("cf3");
    this.doStuff();
  };
  coverFunc4 = () => {
    console.log("cf4");
    this.doStuff();
  };

  doStuff = () => {
    console.log("stuff");
    return "test1";
  };
  // doStuff2 = () => {
  //   console.log("stuff2");
  // };
  // doStuff3 = () => {
  //   console.log("stuff3");
  // };
  // doStuff4 = () => {
  //   console.log("stuff4");
  // };

  doIntervalChange = () => {
    // this.doStuff();
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { count } = this.state;
    // const coverFunc = this.coverFunc();
    return (
      <div>
        {/* <h1>{coverFunc}</h1> */}
        <h2
          className={setTimeout(this.coverFunc(), 10000)}
          style={({ width: "5rem" }, { transition: "margin-top 1s ease" })}
        >
          <h2>asdfasdf</h2>
        </h2>
        <h2
          className={setTimeout(this.coverFunc2(), 1500)}
          style={({ width: "5rem" }, { transition: "margin-top 1s ease" })}
        >
          <h2>asdfasdf</h2>
        </h2>
        <h2
          className={setTimeout(this.coverFunc3(), 2000)}
          style={({ width: "5rem" }, { transition: "margin-top 1s ease" })}
        >
          <h2>asdfasdf</h2>
        </h2>
        <h2
          className={setTimeout(this.coverFunc4(), 2500)}
          style={({ width: "5rem" }, { transition: "margin-top 1s ease" })}
        >
          <h2>asdfasdf</h2>
        </h2>
      </div>
    );
  }
  // setInterval
  // clearInterval
}

export default Test;
