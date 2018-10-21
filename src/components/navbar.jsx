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
  const responseGoogle = response => {
    // console.log(response);
    onAccessToken(response.tokenObj.access_token);
  };
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="row">
          {/* <h1 className="text-white m-4">Events</h1> */}

          <GoogleLogin
            clientId="64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com"
            buttonText={
              <React.Fragment>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                  style={{ height: "2em" }}
                />
                <span> Google login</span>
              </React.Fragment>
            }
            scope="profile email https://www.googleapis.com/auth/spreadsheets"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className={"btn btn-lg btn-outline-success"}
          />
          <SaveLoadButtonGruop
            onReadCookie={onReadCookie}
            onWriteCookie={onWriteCookie}
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
