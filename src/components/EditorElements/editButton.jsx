import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class EditButton extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return this.editButton();
  }
  editButton = () => {
    const { onFormSubmit, whatEventAreYouEditing } = this.props;
    if (whatEventAreYouEditing === null) {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title={"Lisa sündmus"}
        >
          <button onClick={onFormSubmit} className="btn btn-warning m-4 btn-lg">
            {"Lisa sündmus"}
          </button>
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title={"Kinnita muutused"}
        >
          <button onClick={onFormSubmit} className="btn btn-warning m-4 btn-lg">
            {"Kinnita muutused"}
          </button>
        </Tooltip>
      );
    }
  };
}

export default EditButton;
