import React, { Component } from "react";
import ReactGoogleSheets from "react-google-sheets";

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetLoaded: false
    };
  }
  render() {
    return (
      <ReactGoogleSheets
        clientId="64126451358-5jfq2f5vln5em8802oub82t6rjmbduj0.apps.googleusercontent.com"
        apiKey="AIzaSyCUmw_0VD7EYk2JBh8oeOmN3fRtR2nb1lU"
        spreadsheetId="1syL5nLI6lmz4qoMtshYTdZjx_Q5l75elG9iPtcKKgvk"
        afterLoading={() => this.setState({ sheetLoaded: true })}
      >
        {this.state.sheetLoaded ? (
          <div>
            {/* Access Data */}
            {console.log(
              "Your sheet data : ",
              this.props.getSheetsData("Events storage")
            )}
            {/* Update Data */}
            <button
              onClick={() => {
                this.props.updateCell(
                  "sheet01", // sheetName
                  "A", // column
                  13, // row
                  "Apple", // value
                  null, // successCallback
                  error => {
                    console.log("error", error);
                  } // errorCallback
                );
              }}
            >
              update cell!
            </button>
          </div>
        ) : (
          "loading..."
        )}
      </ReactGoogleSheets>
    );
  }
}

export default ReactGoogleSheets.connect(DataComponent);
