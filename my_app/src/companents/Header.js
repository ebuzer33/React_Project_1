import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 id="header_1">{this.props.info.title}</h1>
      </div>
    );
  }
}
