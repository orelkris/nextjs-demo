import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetups',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Panorama_of_Moscow_Kremlin.jpg',
      alt: 'Kremlin and Red Square',
    },
    address: 'Red Square, Moscow',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'second meetups',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Bercy%2C_Paris_01.jpg',
      alt: 'Overhead shot of Paris and Seine',
    },
    address: 'Seine, Paris',
    description: 'This is a second meetup',
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse an awesome list of delicious meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const connect = await MongoClient.connect(
    'mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = connect.db();

  const meetupsCollection = db.collection('meetups');

  const meetupsFind = await meetupsCollection.find({}).toArray();

  connect.close();

  return {
    props: {
      meetups: meetupsFind.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: {
          src: meetup.image,
          alt: meetup.title,
        },
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: DUMMY_MEETUPS,
//   };
// }
