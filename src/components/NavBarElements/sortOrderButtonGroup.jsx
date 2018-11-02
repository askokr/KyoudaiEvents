import React, { Component } from "react";
import Octicon from "react-octicon";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class SortOrderButtonGroup extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.sortDirection === this.props.sortDirection) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { onSort, sortDirection } = this.props;
    return (
      <div className="btn-group btn-group-toggle m-2" data-toggle="buttons">
        <Tooltip TransitionComponent={Zoom} title={"Sorteeri laskuvalt"}>
          <button
            className={
              "btn btn-lg btn-" +
              (sortDirection === "ascending" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onSort("ascending")}
          >
            <Octicon name="chevron-up" />
          </button>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title={"Sorteeri lisamise järjekorras"}
        >
          <button
            className={
              "btn btn-lg btn-" +
              (sortDirection === "byKey" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onSort("byKey")}
          >
            <Octicon name="pencil" />
          </button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={"Sorteeri tõusvalt"}>
          <button
            className={
              "btn btn-lg btn-" +
              (sortDirection === "descending" ? "" : "outline-") +
              "primary"
            }
            onClick={() => onSort("descending")}
          >
            <Octicon name="chevron-down" />
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default SortOrderButtonGroup;
