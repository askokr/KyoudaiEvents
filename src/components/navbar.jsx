import React from "react";
import MediaQuery from "react-responsive";
import Clock from "./NavBarElements/clock";
import SaveLoadButtonGruop from "./NavBarElements/saveLoadButtonGroup";
import SortOrderButtonGroup from "./NavBarElements/sortOrderButtonGroup";
import ElementsToDisplayButtonGroup from "./NavBarElements/elementsToDisplayButtonGroup";
import GoogleLogin from "react-google-login";

const NavBar = ({
  onAccessToken,
  onDisplay,
  onReadCookie,
  onSort,
  onWriteCookie,
  sortDirection,
  time,
  whatEvetsToDisplay
}) => {
  let isThereACookie = document.cookie !== "" ? true : false;
  const responseGoogle = response => {
    console.log(response);
    onAccessToken(response.tokenObj.access_token);
  };
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="row">
          {/* <h1 className="text-white m-4">Events</h1> */}

          <GoogleLogin
            clientId="64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com"
            buttonText="Login"
            scope="profile email https://www.googleapis.com/auth/spreadsheets"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <SaveLoadButtonGruop
            onReadCookie={onReadCookie}
            onWriteCookie={onWriteCookie}
            isThereACookie={isThereACookie}
          />
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
