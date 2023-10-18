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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some address",
        description: "this is a first meetup",
      },
    },
  };
}

export default MeetupDetails;