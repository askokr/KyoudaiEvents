import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class SaveLoadButtonGruop extends Component {
  render() {
    const { onWriteCookie, onReadCookie } = this.props;
    const message = [
      "Salvesta",
      "Värskenda",
      "Salvesta mälufaili",
      "Värskenda mälufailist"
    ];
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip TransitionComponent={Zoom} title={message[2]}>
          <button
            className="btn btn-outline-success btn-lg"
            onClick={onWriteCookie}
          >
            {message[0]}
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={message[3]}>
          <button
            className={"btn btn-lg btn-outline-success"}
            onClick={onReadCookie}
          >
            {message[1]}
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default SaveLoadButtonGruop;
