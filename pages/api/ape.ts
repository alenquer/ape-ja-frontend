import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse<any[]>) => {
  const { db } = await connectToDatabase({
    uri: process.env.MONGODB_APE_URI,
    dbName: process.env.MONGODB_APE_DB,
  });

  const result = await db
    .collection("ape")
    .find({})
    .sort({})
    //.limit(20)
    .toArray();

  return res.json(result);
};
