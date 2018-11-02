import React, { Component } from "react";
import datetimeStringFunction from "../functions/datetimeStringFunction";
import timerFunction from "../functions/timerfunction";

class TextBox extends Component {
  render() {
    const { eventDate, eventName, timerFunctionInput } = this.props;
    return (
      <React.Fragment>
        <h2>{eventName === "" ? "Nimeta sündmus" : eventName}</h2>
        <h4>
          {Object.prototype.toString.call(eventDate) === "[object Date]" ||
          eventDate === ""
            ? "Määramata ajal"
            : datetimeStringFunction(eventDate)}
        </h4>
        <h3>{timerFunction(timerFunctionInput)}</h3>
      </React.Fragment>
    );
  }
}

export default TextBox;
