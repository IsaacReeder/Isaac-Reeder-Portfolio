import React, {Component} from "react";

export default class Testr extends Component {
    constructor() {
      super()
      this.myRef = React.createRef();
  
    scroll(ref) {
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }

render() {

