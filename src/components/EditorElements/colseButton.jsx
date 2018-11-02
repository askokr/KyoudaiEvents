import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class CloseButton extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return this.closeButton();
  }

  closeButton = () => {
    const { whatEventAreYouEditing, onToggle } = this.props;
    if (whatEventAreYouEditing === null) {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title={"Tühista sündmuse lisamine"}
        >
          <button
            onClick={() => onToggle("editor")}
            className="btn btn-danger m-4 btn-lg"
          >
            {"Sule"}
          </button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title={"Tühista sündmuse muutmine"}
        >
          <button
            onClick={() => onToggle("event")}
            className="btn btn-danger m-4 btn-lg"
          >
            {"Sule"}
          </button>
        </Tooltip>
      );
    }
  };
}

export default CloseButton;
