export const mongo_db_name="clashofdevs"
const mongo_user_name="saad"
const mongo_user_password="1234"
const mongodb_url = `mongodb+srv://${mongo_user_name}:${mongo_user_password}@cluster0.slyff8u.mongodb.net/?retryWrites=true&w=majority`
import mongoose from "mongoose";

const connectMongo = async () => {
    try{
       const {connection}:any =  mongoose.connect(mongodb_url);
       if(connection.readyState==1){
        console.log("Mongodb connected...")
       }
    }catch(errors:any){
        return Promise.reject(errors)
    }
}

export default connectMongo;