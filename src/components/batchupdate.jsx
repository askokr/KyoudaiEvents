// import React, { Component } from "react";

// class BatchUpdate extends Component {
//   state = {};

//   makeApiCall() {
//     var params = {
//       // The ID of the spreadsheet to update.
//       spreadsheetId: "1Np5G3EEvkKWRxlBu17DGiDj0hY53sMbI7BKqO246irs"
//     };

//     var batchUpdateValuesRequestBody = {
//       // How the input data should be interpreted.
//       valueInputOption: "", // TODO: Update placeholder value.

//       // The new values to apply to the spreadsheet.
//       data: [] // TODO: Update placeholder value.

//       // TODO: Add desired properties to the request body.
//     };

//     var request = window.gapi.client.sheets.spreadsheets.values.batchUpdate(
//       params,
//       batchUpdateValuesRequestBody
//     );
//     request.then(
//       function(response) {
//         // TODO: Change code below to process the `response` object:
//         console.log(response.result);
//       },
//       function(reason) {
//         console.error("error: " + reason.result.error.message);
//       }
//     );
//   }

//   initClient() {
//     var API_KEY = "AIzaSyCUmw_0VD7EYk2JBh8oeOmN3fRtR2nb1lU";

//     var CLIENT_ID = ""; // TODO: Update placeholder with desired client ID.

//     var SCOPE = "https://www.googleapis.com/auth/spreadsheets";

//     window.gapi.client
//       .init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         scope: SCOPE,
//         discoveryDocs: [
//           "https://sheets.googleapis.com/$discovery/rest?version=v4"
//         ]
//       })
//       .then(function() {
//         window.gapi.auth2
//           .getAuthInstance()
//           .isSignedIn.listen(updateSignInStatus);
//         updateSignInStatus(
//           window.gapi.auth2.getAuthInstance().isSignedIn.get()
//         );
//       });
//   }

//   handleClientLoad() {
//     window.gapi.load("client:auth2", initClient);
//   }

//   updateSignInStatus(isSignedIn) {
//     if (isSignedIn) {
//       this.makeApiCall();
//     }
//   }

//   handleSignInClick(event) {
//     window.gapi.auth2.getAuthInstance().signIn();
//   }

//   handleSignOutClick(event) {
//     window.gapi.auth2.getAuthInstance().signOut();
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button id="signin-button" onclick="handleSignInClick()">
//           Sign in
//         </button>
//         <button id="signout-button" onclick="handleSignOutClick()">
//           Sign out
//         </button>
//       </React.Fragment>
//     );
//   }
// }

// export default BatchUpdate;
