import React, { Component } from "react";

class APICaller extends Component {
  makeApiCall() {
    var params = {
      // The spreadsheet to request.
      spreadsheetId: "1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk",

      // The ranges to retrieve from the spreadsheet.
      ranges: ["shet01"]
    };

    var request = gapi.client.sheets.spreadsheets.get(params);
    request.then(
      function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      },
      function(reason) {
        console.error("error: " + reason.result.error.message);
      }
    );
  }

  initClient() {
    var API_KEY = "AIzaSyCUmw_0VD7EYk2JBh8oeOmN3fRtR2nb1lU";

    var CLIENT_ID =
      "64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com";

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    var SCOPE = "";

    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4"
        ]
      })
      .then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  }

  handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }

  updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
      makeApiCall();
    }
  }

  handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  render() {
    return (
      <div>
        <script
          async
          defer
          src="https://apis.google.com/js/api.js"
          onload="this.onload=function(){};handleClientLoad()"
          onreadystatechange="if (this.readyState === 'complete') this.onload()"
        />
        <button id="signin-button" onclick="handleSignInClick()">
          Sign in
        </button>
        <button id="signout-button" onclick="handleSignOutClick()">
          Sign out
        </button>
      </div>
    );
  }
}

export default APICaller;
