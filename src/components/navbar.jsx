import React from "react";
import Clock from "./NavBarElements/clock";
import SaveLoadButtonGruop from "./NavBarElements/saveLoadButtonGroup";
import SortOrderButtonGroup from "./NavBarElements/sortOrderButtonGroup";
import ElementsToDisplayButtonGroup from "./NavBarElements/elementsToDisplayButtonGroup";
import SaveMenu from "./NavBarElements/popup";

const NavBar = ({
  onDisplay,
  onGoogleResponse,
  onSheetRead,
  onSort,
  sortDirection,
  time,
  whatEvetsToDisplay
}) => {
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="row">
          {/* <h1 className="text-white m-4">Events</h1> */}

          <SaveMenu onGoogleResponse={onGoogleResponse} />
          <SaveLoadButtonGruop onSheetRead={onSheetRead} />
          <SortOrderButtonGroup onSort={onSort} sortDirection={sortDirection} />
          <ElementsToDisplayButtonGroup
            onDisplay={onDisplay}
            whatEvetsToDisplay={whatEvetsToDisplay}
          />
        </div>
        <Clock time={time} />
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
