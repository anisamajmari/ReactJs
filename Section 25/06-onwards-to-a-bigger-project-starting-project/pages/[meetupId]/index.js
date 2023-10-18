import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
      title="First Meetup"
      address="Some address"
      description="This is a fisrt meetup"
    />
  );
}

export default MeetupDetails;
