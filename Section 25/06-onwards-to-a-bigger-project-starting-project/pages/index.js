import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first Meetup",
//     image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
//     address: "Some address 3, 5544 , City",
//     description: "This is a first meetup.",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
//     address: "Some address 5, 24525 , City",
//     description: "This is a second meetup.",
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
