import React, { Component } from "react";
import Clock from "./NavBarElements/clock";
import SaveLoadButtonGruop from "./NavBarElements/saveLoadButtonGroup";
import SortOrderButtonGroup from "./NavBarElements/sortOrderButtonGroup";
import ElementsToDisplayButtonGroup from "./NavBarElements/elementsToDisplayButtonGroup";
import SaveMenu from "./NavBarElements/popup";

class NavBar extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.time === this.props.time &&
      nextProps.sortDirection === this.props.sortDirection &&
      nextProps.whatEvetsToDisplay === this.props.whatEvetsToDisplay
    ) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const {
      onDisplay,
      onGoogleResponse,
      onSheetRead,
      onSort,
      responseMessage,
      sortDirection,
      time,
      whatEvetsToDisplay
    } = this.props;

    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-light bg-dark">
          <div className="row">
            <SaveMenu
              onGoogleResponse={onGoogleResponse}
              responseMessage={responseMessage}
            />
            <SaveLoadButtonGruop onSheetRead={onSheetRead} />
            <SortOrderButtonGroup
              onSort={onSort}
              sortDirection={sortDirection}
            />
            <ElementsToDisplayButtonGroup
              onDisplay={onDisplay}
              whatEvetsToDisplay={whatEvetsToDisplay}
            />
          </div>
          <Clock time={time} />
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
