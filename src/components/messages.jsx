import React, { Component } from "react";

const Messages = (origin) => {
  let message = [];
  switch (origin) {
      case 'editor'
      message = [
        "Sule",
        "Sule",
        "Tühista sündmuse lisamine",
        "Tühista sündmuse muutmine"
      ];
      break;
  }
  return message;
};
export default Messages;
