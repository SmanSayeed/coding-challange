import { MongoClient } from 'mongodb'

export const mongo_db_name="clashofdevs"
const mongo_user_name="saad"
const mongo_user_password="1234"
const mongodb_url = `mongodb+srv://${mongo_user_name}:${mongo_user_password}@cluster0.slyff8u.mongodb.net/?retryWrites=true&w=majority`

if (!mongodb_url) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri =mongodb_url
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (!mongodb_url) {
  throw new Error('Please add your Mongo URI to .env.local')
}

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
// }

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise