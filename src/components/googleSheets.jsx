// import React, { Component } from "react";
// import ReactGoogleSheets from "react-google-sheets";

// class DataComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sheetLoaded: false
//     };
//   }
//   render() {
//     return (
//       <ReactGoogleSheets
//         clientId="64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com"
//         apiKey="AIzaSyCUmw_0VD7EYk2JBh8oeOmN3fRtR2nb1lU"
//         spreadsheetId="1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk"
//         afterLoading={() => this.setState({ sheetLoaded: true })}
//       >
//         {this.state.sheetLoaded ? (
//           <div>
//             {/* Access Data */}
//             {console.log(
//               "Your sheet data : ",
//               this.props.getSheetsData(
//                 "1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk"
//               )
//             )}
//             {/* Update Data */}
//             <button
//               onClick={() => {
//                 this.props.updateCell(
//                   "sheet01", // sheetName
//                   "A", // column
//                   13, // row
//                   "Apple", // value
//                   null, // successCallback
//                   error => {
//                     console.log("error", error);
//                   } // errorCallback
//                 );
//               }}
//             >
//               update cell!
//             </button>
//           </div>
//         ) : (
//           "loading..."
//         )}
//       </ReactGoogleSheets>
//     );
//   }
// }

// export default ReactGoogleSheets.connect(DataComponent);
