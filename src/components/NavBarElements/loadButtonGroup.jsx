import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class LoadButtonGruop extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const { onSheetRead } = this.props;
    return (
      <Tooltip TransitionComponent={Zoom} title={"Värskenda mälust"}>
        <button
          className={"btn btn-lg btn-outline-success  m-2"}
          onClick={onSheetRead}
        >
          {"Värskenda"}
        </button>
      </Tooltip>
    );
  }
}

export default LoadButtonGruop;
