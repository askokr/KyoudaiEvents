import React, { Component } from "react";
import DateTime from "react-datetime";
import { DebounceInput } from "react-debounce-input";
import Moment from "moment";
import Octicon from "react-octicon";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

Moment.locale("en-gb", {
  week: {
    dow: 1 // Monday is the first day of the week.
  }
});

class Form extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.eventName === this.props.eventName &&
      nextProps.eventDate === this.props.eventDate &&
      nextProps.imageUrl === this.props.imageUrl
    ) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const {
      eventDate,
      eventName,
      imageUrl,
      onFormSubmit,
      onEventName,
      onEventDate,
      onImageUrl,
      onRandomImage
    } = this.props;
    return (
      <form className="container-fluid" onSubmit={onFormSubmit}>
        <div className="form-row">
          <div className="col">
            <div className="input-group mb-3 m-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Sündmuse nimi:</span>
              </div>
              <DebounceInput
                minLength={1}
                debounceTimeout={300}
                className="form-control"
                name={eventName}
                type="text"
                value={eventName}
                maxLength="42"
                onChange={onEventName}
                placeholder={"Sündmus"}
              />
            </div>
          </div>

          <div className="col">
            <div className="input-group mb-3 m-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Sündmsue aeg:</span>
              </div>
              <DateTime
                value={eventDate}
                inputProps={{ readOnly: true }}
                onChange={onEventDate}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group mb-3 m-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Pildi URL:</span>
            </div>
            <DebounceInput
              minLength={1}
              debounceTimeout={300}
              type="url"
              className="form-control"
              value={imageUrl}
              name="imageUrl"
              onChange={onImageUrl}
              placeholder={"Link pildi juurde"}
            />
            <div className="input-group-append">
              <Tooltip
                title={"Võta Unsplashist juhuslik pilt"}
                TransitionComponent={Zoom}
                placement="bottom-end"
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onRandomImage}
                >
                  <Octicon name="unverified" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
