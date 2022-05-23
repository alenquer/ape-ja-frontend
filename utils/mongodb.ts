import { Db, MongoClient } from "mongodb";

export async function connectToDatabase({
  uri,
  dbName,
}: {
  uri: string | undefined;
  dbName: string | undefined;
}) {
  let cachedClient: MongoClient | null = null;
  let cachedDb: Db | null = null;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (!dbName) {
    throw new Error(
      "Please define the MONGODB_DB environment variable inside .env.local"
    );
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri!, {});

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
