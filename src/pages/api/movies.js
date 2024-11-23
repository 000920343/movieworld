import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('movieworld');
    const collection = db.collection('movies');

    if (req.method === 'GET') {
      const movies = await collection.find({}).toArray();
      res.status(200).json(movies);
    } else if (req.method === 'POST') {
      const { title, actors, releaseYear } = req.body;

      // Validate input
      if (!title || !actors || !releaseYear) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }

      // Insert movie into the database
      const result = await collection.insertOne({
        title,
        actors: actors.split(','), // Convert actors to an array
        releaseYear,
      });

      // Respond with the inserted movie
      const newMovie = await collection.findOne({ _id: result.insertedId });
      res.status(201).json(newMovie);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
