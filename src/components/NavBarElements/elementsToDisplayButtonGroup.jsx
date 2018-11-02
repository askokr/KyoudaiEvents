import React, { Component } from "react";
import Octicon from "react-octicon";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class ElementsToDisplayButtonGroup extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.whatEvetsToDisplay === this.props.whatEvetsToDisplay) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { onDisplay, whatEvetsToDisplay } = this.props;
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip
          TransitionComponent={Zoom}
          title={"Kuva vaid möödunud sündmused"}
        >
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "passed" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onDisplay("passed")}
          >
            <Octicon name="chevron-left" />
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={"Kuva kõik sündmused"}>
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "all" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onDisplay("all")}
          >
            <Octicon name="code" />
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={"Kuva eelseisvad sündmused"}>
          <button
            className={
              "btn btn-lg btn-" +
              (whatEvetsToDisplay === "upcoming" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onDisplay("upcoming")}
          >
            <Octicon name="chevron-right" />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default ElementsToDisplayButtonGroup;
