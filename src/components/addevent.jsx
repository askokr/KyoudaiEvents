import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Editor from "./editor";

class AddEvent extends Component {
  render() {
    const {
      areYouAddingAnEvent,
      editableEvent,
      oldImageUrl,
      onEventDate,
      onEventName,
      onFormSubmit,
      onImageUrl,
      onRandomImage,
      onToggle,
      whatEventAreYouEditing
    } = this.props;
    return (
      <React.Fragment>
        {areYouAddingAnEvent ? (
          <Editor
            areYouAddingAnEvent={areYouAddingAnEvent}
            editableEvent={editableEvent}
            oldImageUrl={oldImageUrl}
            onEventDate={onEventDate}
            onEventName={onEventName}
            onImageUrl={onImageUrl}
            onFormSubmit={onFormSubmit}
            onToggle={onToggle}
            onRandomImage={onRandomImage}
            whatEventAreYouEditing={whatEventAreYouEditing}
          />
        ) : (
          <React.Fragment>{this.dafaultView()}</React.Fragment>
        )}
      </React.Fragment>
    );
  }

  dafaultView() {
    return (
      <div className="container timer-container text-center m-4">
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          title={"Lisa uus sündmus"}
        >
          <button
            className="container text-cente btn btn-warning shadowy"
            onClick={() => this.props.onToggle("editor")}
          >
            <h2>{"Lisa sündmus"}</h2>
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default AddEvent;
