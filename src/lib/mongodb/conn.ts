export const mongo_db_name = process.env.MONGO_DB_NAME;
const mongo_user_name = process.env.MONGO_USER_NAME;
const mongo_user_password = process.env.MONGO_USER_PASSWORD;
// export const mongodb_url = `mongodb+srv://${mongo_user_name}:${mongo_user_password}@cluster0.slyff8u.mongodb.net/?retryWrites=true&w=majority`
const mongodb_url: any = process.env.DATABASE_URL;

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection }: any = mongoose.connect(mongodb_url);
    if (connection.readyState == 1) {
      console.log("Mongodb connected...");
    }
  } catch (errors: any) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
