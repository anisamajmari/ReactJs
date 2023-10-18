import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    address: "Some address 3, 5544 , City",
    description: "This is a first meetup.",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    address: "Some address 5, 24525 , City",
    description: "This is a second meetup.",
  },
];

function HomePage(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
