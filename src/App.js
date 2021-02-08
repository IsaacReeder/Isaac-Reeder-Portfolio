import React, { Component } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/ProjectsPage/Projects/Projects";
import Backdrop from "./components/ProjectsPage/Backdrop/Backdrop";
import SideDrawer from "./components/ProjectsPage/SideDrawer/SideDrawer";
import SideDrawer2 from "./components/ProjectsPage/SideDrawer/SideDrawer2";
import SideDrawer3 from "./components/ProjectsPage/SideDrawer/SideDrawer3";
import SideDrawer4 from "./components/ProjectsPage/SideDrawer/SideDrawer4";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        "day",
        "terminal",
        "torquoise",
        // "alizarin",
        // "amythyst",
        // "carrot",
        // "peterriver",
      ],
      lightBackgroundModes: [
        "night",
        "lightred",
        "lightpurple",
        // "lightgreen",
        // "lightblue",
        // "lightyellow",
      ],
      sideDrawerOpen: false,
      sideDrawerOpen2: false,
      sideDrawerOpen3: false,
      sideDrawerOpen4: false,
      scrolled: false,
      backgroundType: this.props.backgroundType || "plain",
      appClass: this.props.plainBackgroundMode || "daylight",
      devIntro: this.props.devIntro || "Lorem Ipsum",
      devDesc:
        this.props.devDesc ||
        "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: this.props.icons || [],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line no-restricted-globals
      const isTop = scrollY < 100;
      if (isTop !== true) {
        // eslint-disable-next-line no-restricted-globals
        this.setState({
          sideDrawerOpen: false,
          sideDrawerOpen2: false,
          sideDrawerOpen3: false,
          sideDrawerOpen4: false,
          scrolled: true,
        });
      } else {
        this.setState({
          sideDrawerOpen: false,
          sideDrawerOpen2: false,
          sideDrawerOpen3: false,
          sideDrawerOpen4: false,
          scrolled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

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

  getDefaultModeBasedOnBackgroundType = () => {
    if (this.checkIfNightModeEnabled()) {
      return this.state.lightBackgroundModes[0];
    } else if (this.checkIfDayModeEnabled()) {
      return this.state.darkBackgroundModes[0];
    }
  };

  changeThemeMode = (e) => {
    if (this.checkIfNightModeEnabled()) {
      this.setState({
        appClass: "daylight",
        backgroundIndex: 0,
        backgroundMode: this.state.darkBackgroundModes[0],
      });
    } else if (this.checkIfDayModeEnabled()) {
      this.setState({
        appClass: "nightlight",
        backgroundIndex: 0,
        backgroundMode: this.state.lightBackgroundModes[0],
      });
    }
  };
  // color cycle
  changeBackgroundBasedonMode = () => {
    if (
      this.checkIfNightModeEnabled() &&
      this.state.backgroundIndex < this.state.lightBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.lightBackgroundModes[
          this.state.backgroundIndex + 1
        ],
      });
    } else if (
      this.checkIfDayModeEnabled() &&
      this.state.backgroundIndex < this.state.darkBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.darkBackgroundModes[
          this.state.backgroundIndex + 1
        ],
      });
    } else {
      this.setState({
        backgroundIndex: 0,
        backgroundMode: this.getDefaultModeBasedOnBackgroundType(),
      });
    }
  };

  FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  drawerToggleClickHandler2 = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen2: !prevState.sideDrawerOpen2 };
    });
  };
  drawerToggleClickHandler3 = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen3: !prevState.sideDrawerOpen3 };
    });
  };
  drawerToggleClickHandler4 = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen4: !prevState.sideDrawerOpen4 };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
      sideDrawerOpen2: false,
      sideDrawerOpen3: false,
      sideDrawerOpen4: false,
    });
  };

  render() {
    let backdrop;
    if (
      this.state.sideDrawerOpen ||
      this.state.sideDrawerOpen2 ||
      this.state.sideDrawerOpen3 ||
      this.state.sideDrawerOpen4
    ) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    const { appClass, bgStyle, backgroundMode } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        {/* <div className="change-mode" onClick={this.changeThemeMode} /> */}
        <div
          className={backgroundMode}
          onClick={this.changeBackgroundBasedonMode}
        >
          <main className="App-main">
            <Nav changeThemeMode={this.changeThemeMode} />

            <LandingPage
              devIntro="Hi, I'm Isaac Reeder "
              jobTitle="Hi, I'm Isaac Reeder. A tenacious self-taught software developer, I use continuous iteration to produce results quickly and consistently."
              plainBackgroundMode="daylight"
              devDesc1="JavaScript"
              devDesc2="NodeJS"
              devDesc3="MongoDB"
              devDesc4="API's"
              gradientColors="#EE7752, #E73C7E, #23A6D5, #23D5AB"
              icons={[
                {
                  image: "fa-github",
                  url: "https://github.com/IsaacReeder",
                },
                {
                  image: "fa-linkedin",
                  url: "https://www.linkedin.com/in/isaac-reeder/",
                },
              ]}
            />
            <Projects
              id="ProjectsPage"
              drawerClickHandler={this.drawerToggleClickHandler}
              drawerClickHandler2={this.drawerToggleClickHandler2}
              drawerClickHandler3={this.drawerToggleClickHandler3}
              drawerClickHandler4={this.drawerToggleClickHandler4}
            />
            <SideDrawer
              click={this.backdropClickHandler}
              show={this.state.sideDrawerOpen}
              projects={[
                {
                  pName: "Interactive Chess",
                  description:
                    "AI interactive chess game, utilizing the Alpha-Beta Algorithm for increased efficiency. ",
                  technologies:
                    "Java, J-Commander, Google Protocol Buffers, GRPC, and JAVA Multicore API., VIM, Byobu",
                  image2: "fa-github",
                  closeButton: "fa-arrow-circle-right",
                  url: "https://github.com/IsaacReeder/FunctionalChess",
                },
              ]}
            />
            <SideDrawer2
              show={this.state.sideDrawerOpen2}
              projects={[
                {
                  pName: "Voting Application",
                  description:
                    "A CRUD social media application, built with the MERN stack.",
                  technologies:
                    "NodeJS, Mongoose, Express, and Cors. Front end technologies include Axios, Moment-Timezone, Bootstrap, and shortId.",
                  image2: "fa-github",
                  closeButton: "fa-arrow-circle-right",
                  url: "https://github.com/IsaacReeder/Voting-Application",
                },
              ]}
            />
            <SideDrawer3
              show={this.state.sideDrawerOpen3}
              projects={[
                {
                  pName: "React Ecommerce",
                  description:
                    "E-commerce web application for furniture, and art.",
                  technologies:
                    "React, Strapi headless CMS, MongoDB, GraphQL, SendGrid, Gestalt(Pinterest Library), API's, and MVC.",
                  image2: "fa-github",
                  closeButton: "fa-arrow-circle-right",
                  url:
                    "https://github.com/IsaacReeder/React-Strapi-MongoDB-Ecommerce-v2",
                },
              ]}
            />
            <SideDrawer4
              show={this.state.sideDrawerOpen4}
              projects={[
                {
                  pName: "Welp",
                  description:
                    "A Yelp clone specifically created to find local breweries.",
                  technologies:
                    "ReactJS, Yelp CORS API's, Axios, OpenWeatherMap, OwFont, WebFontLoader, Node-Sass, and Heroku CRUD API",
                  image2: "fa-github",
                  closeButton: "fa-arrow-circle-right",
                  url: "https://github.com/IsaacReeder/Beer-30",
                },
              ]}
            />
            {backdrop}
            <Contact
              lines={[
                {
                  contactLines: "Let's make something amazing.",
                  emailAddy: "i.reeder@protonmail.ch",
                },
              ]}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
