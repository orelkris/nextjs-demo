import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const connect = await MongoClient.connect(
      'mongodb+srv://krisassaurus:G6882061Data!@cluster0.tovkjo4.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = connect.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    connect.close();

    res.status(201).json({ message: 'Meetup inserted' });
  }
}
