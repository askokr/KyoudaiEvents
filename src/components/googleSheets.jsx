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
//         clientId="664132969101-6l50abd7lmqsbf57kac2r6rt9k27ui1c.apps.googleusercontent.com"
//         apiKey="AIzaSyDJEye_MuHDLq_yogKA1EtnfJdBnTvO9pg "
//         spreadsheetId="1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk"
//         afterLoading={() => this.setState({ sheetLoaded: true })}
//       >
//         {this.state.sheetLoaded ? (
//           <div>
//             {/* Access Data */}
//             {console.log(
//               "Your sheet data : ",
//               this.props.getSheetsData("Events storage")
//             )}
//             {/* Update Data */}
//             <button
//               onClick={() => {
//                 this.props.updateCell(
//                   "sheet02", // sheetName
//                   "E", // column
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
