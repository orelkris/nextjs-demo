import { Fragment } from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const MeetupDetail = (props) => {
  const meetupDetails = {
    id: 'm1',
    title: 'first meetups',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Panorama_of_Moscow_Kremlin.jpg',
      alt: 'Kremlin and Red Square',
    },
    address: 'Red Square, Moscow',
    description: 'This is a first meetup',
  };

  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails {...props.meetupData} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const connect = await MongoClient.connect(
    'mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = connect.db();

  const meetupsCollection = db.collection('meetups');

  const meetupsFind = await meetupsCollection.find({}, { _id: 1 }).toArray();

  connect.close();

  return {
    fallback: false,
    paths: meetupsFind.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const connect = await MongoClient.connect(
    'mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = connect.db();

  const meetupsCollection = db.collection('meetups');

  const meetupFind = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(meetupFind);

  connect.close();

  return {
    props: {
      meetupData: {
        id: meetupFind._id.toString(),
        title: meetupFind.title,
        image: {
          src: meetupFind.image,
          alt: meetupFind.title,
        },
        address: meetupFind.address,
        description: meetupFind.description,
      },
    },
  };
}

export default MeetupDetail;
