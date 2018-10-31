import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class SaveLoadButtonGruop extends Component {
  render() {
    const { onSheetRead } = this.props;
    const message = [
      "Salvesta",
      "Värskenda",
      "Salvesta mälufaili",
      "Värskenda mälust"
    ];
    return (
      <Tooltip TransitionComponent={Zoom} title={message[3]}>
        <button
          className={"btn btn-lg btn-outline-success  m-2"}
          onClick={onSheetRead}
        >
          {message[1]}
        </button>
      </Tooltip>
    );
  }
}

export default SaveLoadButtonGruop;
