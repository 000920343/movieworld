import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await client.connect();
    const db = client.db('movieworld');
    const collection = db.collection('movies');

    if (req.method === 'PUT') {
      const { title, actors, releaseYear } = req.body;

      if (!title || !actors || !releaseYear) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }

      const updatedMovie = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { title, actors, releaseYear } },
        { returnDocument: 'after' }
      );

      if (!updatedMovie.value) {
        return res.status(404).json({ message: 'Movie not found.' });
      }

      res.status(200).json(updatedMovie.value);
    } else if (req.method === 'DELETE') {
      const deletedMovie = await collection.deleteOne({ _id: new ObjectId(id) });

      if (deletedMovie.deletedCount === 0) {
        return res.status(404).json({ message: 'Movie not found.' });
      }

      res.status(204).end();
    } else {
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('Error handling movie request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
