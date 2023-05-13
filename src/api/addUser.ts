/* eslint-disable import/no-anonymous-default-export */
import clientPromise, { mongo_db_name } from "@/lib/mongodb/mongodb";
export default async (req:any, res:any) => {
  try {
    const client = await clientPromise;
    const db = client.db(mongo_db_name);
    const { username, email, photoUrl,uid  } = req.body;
    const post = await db.collection("users").insertOne(req.body);
    console.log("posted = ",post)
    res.json(post);
  } catch (e:any) {
    console.error(e);
    throw new Error(e).message;
  }
};