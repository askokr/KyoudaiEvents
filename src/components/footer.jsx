import React, { Component } from "react";

class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <footer>
        <div className="container timer-container m-4">
          <span className="footer">© Asko Kriiska, 2018</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
