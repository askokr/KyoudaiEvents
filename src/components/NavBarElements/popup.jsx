import React, { Component } from "react";
import Popup from "reactjs-popup";
import GoogleLogin from "react-google-login";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class SaveMenu extends Component {
  render() {
    const { onGoogleResponse } = this.props;
    const responseGoogle = response => {
      onGoogleResponse(response);
    };
    return (
      <div style={{ textAlign: "center" }}>
        <Popup
          trigger={
            <Tooltip
              TransitionComponent={Zoom}
              title="Salvesta muutused kõigile kasutajatele"
            >
              <button className="btn btn-outline-success btn-lg  m-2">
                {" "}
                Salvesta muutused{" "}
              </button>
            </Tooltip>
          }
          modal
          closeOnDocumentClick
        >
          <p>
            <strong>
              Salvestamiseks pead sa sisse logima vastava õigusega Google konto
              kaudu.
            </strong>
          </p>
          <p>
            Sisse logides annad sa rakendusele õiguse vaadata enda kasutajakonto
            üldisi andmeid ja lubad muuta oma Google Draivis olevaid Google
            arvutustabeleid.
          </p>
          <p>Rakendus talletab sinu isiklike andmeid vaid sessiooni ajaks.</p>
          <GoogleLogin
            clientId="64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com"
            buttonText={
              <React.Fragment>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                  alt="Google"
                  style={{ height: "2em" }}
                />
                <span>
                  <strong> Logi sisse</strong>
                </span>
              </React.Fragment>
            }
            scope="profile email https://www.googleapis.com/auth/spreadsheets"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className={"btn btn-light"}
            style={{ border: "1px solid black" }}
          />
        </Popup>
      </div>
    );
  }
}

export default SaveMenu;
