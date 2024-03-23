import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

// https://calendly.com

const Appoitment = () => {
  const URL = process.env.REACT_APP_APPOITMENT_URL;

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div className="App">
      {/* <InlineWidget url={`${URL}`} /> */}
      <InlineWidget url="https://calendly.com/info-y_ai" />
    </div>
  );
};

export default Appoitment;
