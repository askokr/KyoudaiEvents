import React, { Component } from "react";
import Octicon from "react-octicon";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class Buttons extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { eventId, onDelete, onEdit } = this.props;
    return (
      <div className="text-container-button d-flex flex-column">
        <Tooltip
          TransitionComponent={Zoom}
          placement="left"
          title={"Kustuta sündmus"}
        >
          <button
            className="btn btn-danger btn-lg"
            onClick={() => onDelete(eventId)}
          >
            <Octicon name="trashcan" mega />
          </button>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          placement="left"
          title={"Muuda sündmust"}
        >
          <button
            className="btn btn-success btn-lg"
            onClick={() => onEdit(eventId)}
          >
            <Octicon name="tools" mega />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default Buttons;
