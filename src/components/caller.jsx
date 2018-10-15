import React, { Component } from "react";

class APICaller extends Component {
  makeApiCall(event) {
    var params = {
      // The spreadsheet to request.
      spreadsheetId: "1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk",

      // The ranges to retrieve from the spreadsheet.
      ranges: ["shet01"]
    };

    var request = window.gapi.client.sheets.spreadsheets.get(params);
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

  initClient(event) {
    var API_KEY = "AIzaSyCUmw_0VD7EYk2JBh8oeOmN3fRtR2nb1lU";

    var CLIENT_ID =
      "64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com";

    var SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";

    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPE,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4"
        ]
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSignInStatus);
        this.updateSignInStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  }

  handleClientLoad(event) {
    window.gapi.load("client:auth2", this.initClient);
  }

  updateSignInStatus = event => {
    if (this.isSignedIn) {
      this.makeApiCall();
    }
  };

  handleSignInClick(event) {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  handleSignOutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
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
