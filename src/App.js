import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        "day",
        "terminal",
        "torquoise",
        "alizarin",
        "amythyst",
        "carrot",
        "peterriver"
      ],
      lightBackgroundModes: [
        "night",
        "lightred",
        "lightpurple",
        "lightgreen",
        "lightblue",
        "lightyellow"
      ],
      backgroundType: this.props.backgroundType || "plain",
      appClass: this.props.plainBackgroundMode || "daylight",
      devIntro: this.props.devIntro || "Lorem Ipsum",
      devDesc:
        this.props.devDesc ||
        "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: this.props.icons || []
    };
  }

  componentWillMount = () => {
    if (this.checkIfPlainTypeEnabled()) {
      return true;
    } else if (this.checkIfGradientTypeEnabled()) {
      this.setState({
        appClass: "gradient",
        bgStyle: this.prepareGradientStyleSheets()
      });
    } else if (this.checkIfImageTypeEnabled()) {
      this.setState({
        appClass: "full-bg-image",
        bgStyle: this.prepareBackgroundImageStyle()
      });
    }
  };

  checkIfNightModeEnabled = () => {
    return (
      this.state.backgroundType === "plain" &&
      this.state.appClass === "nightlight"
    );
  };

  checkIfDayModeEnabled = () => {
    return (
      this.state.backgroundType === "plain" &&
      this.state.appClass === "daylight"
    );
  };

  checkIfGradientTypeEnabled = () => {
    return this.state.backgroundType === "gradient";
  };

  checkIfPlainTypeEnabled = () => {
    return this.state.backgroundType === "plain";
  };

  checkIfImageTypeEnabled = () => {
    return this.state.backgroundType === "image";
  };

  prepareGradientStyleSheets = () => {
    if (this.props.gradientColors) {
      return {
        background:
          "linear-gradient(-45deg, " + this.props.gradientColors + ")",
        backgroundSize: "400% 400%"
      };
    } else {
      return {
        background:
          "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
        backgroundSize: "400% 400%"
      };
    }
  };

  prepareBackgroundImageStyle = () => {
    if (this.props.backgroundImageUrl) {
      return {
        background:
          'url("' +
          this.props.backgroundImageUrl +
          '") no-repeat center center fixed',
        backgroundSize: "cover"
      };
    } else {
      return {
        background:
          'url("/images/sample-background.jpg") no-repeat center center fixed',
        backgroundSize: "cover"
      };
    }
  };

  getDefaultModeBasedOnBackgroundType = () => {
    if (this.checkIfNightModeEnabled()) {
      return this.state.lightBackgroundModes[0];
    } else if (this.checkIfDayModeEnabled()) {
      return this.state.darkBackgroundModes[0];
    }
  };

  changeThemeMode = e => {
    if (this.checkIfNightModeEnabled()) {
      this.setState({
        appClass: "daylight",
        backgroundIndex: 0,
        backgroundMode: this.state.darkBackgroundModes[0]
      });
    } else if (this.checkIfDayModeEnabled()) {
      this.setState({
        appClass: "nightlight",
        backgroundIndex: 0,
        backgroundMode: this.state.lightBackgroundModes[0]
      });
    }
  };

  changeBackgroundBasedonMode = () => {
    if (
      this.checkIfNightModeEnabled() &&
      this.state.backgroundIndex < this.state.lightBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.lightBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else if (
      this.checkIfDayModeEnabled() &&
      this.state.backgroundIndex < this.state.darkBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.darkBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else {
      this.setState({
        backgroundIndex: 0,
        backgroundMode: this.getDefaultModeBasedOnBackgroundType()
      });
    }
  };

  render() {
    const { appClass, bgStyle, backgroundMode } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className="change-mode" onClick={this.changeThemeMode} />
        <div
          className={backgroundMode}
          onClick={this.changeBackgroundBasedonMode}
        >
          <main className="App-main">
            <Router>
              <Switch>
                <Route path="/" exact>
                  <LandingPage
                    devIntro="Hi, I'm Isaac Reeder"
                    jobTitle="Full-Stack Software Developer"
                    plainBackgroundMode="daylight"
                    devDesc="JavaScript | MERN | API's "
                    gradientColors="#EE7752, #E73C7E, #23A6D5, #23D5AB"
                    icons={[
                      {
                        image: "fa-github",
                        url: "https://github.com/IsaacReeder"
                      },
                      {
                        image: "fa-linkedin",
                        url: "https://www.linkedin.com/in/isaac-reeder/"
                      }
                    ]}
                  />
                </Route>
                <Route path="/projects" exact>
                  <ProjectsPage
                    projects={[
                      {
                        pName: "Interactive Chess",
                        image: require("../src/assets/deep_blue.jpg"),
                        description:
                          "AI interactive chess game, utilizing the Alpha-Beta Algorithm for increased efficiency. ",
                        technologies:
                          "Java, J-Commander, Google Protocol Buffers, GRPC, and JAVA Multicore API., VIM, Byobu",
                        image2: "fa-github",
                        url: "https://github.com/IsaacReeder/FunctionalChess"
                      },
                      {
                        pName: "Beer-30",
                        image: require("../src/assets/beer.png"),
                        description:
                          "This app helps the user find local breweries",
                        technologies:
                          "ReactJS, Yelp CORS API's, Axios, OpenWeatherMap, OwFont, WebFontLoader, Node-Sass, and Heroku CRUD API",
                        image2: "fa-github",
                        url: "https://github.com/IsaacReeder/Beer-30"
                      },
                      {
                        pName: "React Ecommerce",
                        image: require("../src/assets/cart.jpeg"),
                        description:
                          "E-commerce web application for furniture, and art",
                        technologies:
                          "React, Strapi headless CMS, MongoDB, GraphQL, SendGrid, Gestalt(Pinterest Library), API's, and MVC.",
                        image2: "fa-github",
                        url:
                          "https://github.com/IsaacReeder/React-Strapi-MongoDB-Ecommerce-v2"
                      },
                      {
                        pName: "People and Places",
                        image: require("../src/assets/thumbsup.png"),
                        description:
                          "A CRUD social media application, built with the MERN stack",
                        technologies: "ReactJS, NodeJS, Express, MongoDB.",
                        image2: "fa-github",
                        url: "https://github.com/IsaacReeder/people-and-places"
                      }
                    ]}
                  />
                </Route>
                <Redirect to="/" />
              </Switch>
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
