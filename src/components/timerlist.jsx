import React from "react";
import TimerDisplay from "./timerdisplay";
import AddEvent from "./addevent";
import Editor from "./editor";

const TimerList = ({
  areYouAddingAnEvent,
  events,
  oldImageUrl,
  onDelete,
  onEdit,
  onEventDate,
  onEventName,
  onFormSubmit,
  onImageUrl,
  onRandomImage,
  onToggle,
  time,
  whatEventAreYouEditing
}) => {
  const editableEvent = events[0];
  const eventsToRender = events.slice(1);

  return (
    <React.Fragment>
      <AddEvent
        areYouAddingAnEvent={areYouAddingAnEvent}
        editableEvent={editableEvent}
        oldImageUrl={oldImageUrl}
        onEventDate={onEventDate}
        onEventName={onEventName}
        onImageUrl={onImageUrl}
        onFormSubmit={onFormSubmit}
        onToggle={onToggle}
        time={time}
        whatEventAreYouEditing={whatEventAreYouEditing}
        onRandomImage={onRandomImage}
      />
      {eventsToRender.map(event => {
        if (event.eventId !== whatEventAreYouEditing) {
          return (
            <TimerDisplay
              event={event}
              time={time}
              onDelete={onDelete}
              onEdit={onEdit}
              key={event.eventId}
            />
          );
        } else {
          return (
            <Editor
              areYouAddingAnEvent={areYouAddingAnEvent}
              editableEvent={editableEvent}
              key={event.eventId}
              oldImageUrl={oldImageUrl}
              onEventDate={onEventDate}
              onEventName={onEventName}
              onFormSubmit={onFormSubmit}
              onImageUrl={onImageUrl}
              onRandomImage={onRandomImage}
              onToggle={onToggle}
              whatEventAreYouEditing={whatEventAreYouEditing}
            />
          );
        }
      })}
      <div className="container m-4 bottom-filler" />
    </React.Fragment>
  );
};

export default TimerList;
