"use server"
import clientPromise, { mongo_db_name } from '@/lib/mongodb/mongodb'
import { ObjectId } from 'mongodb'

let client:any
let db:any
let users:any

const collection_name = "users";

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db(mongo_db_name)
    users = await db.collection(collection_name)
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()

//////////////
/// USERS ///
/////////////

export async function getAllUsers() {
  try {
    if (!users) await init()
    const result = await users
      .find({})
      .map((user:any) => ({ ...user, _id: user._id.toString() }))
      .toArray()
    return { users: result }
  } catch (error) {
    return { error: 'Failed to fetch users!' }
  }
}

export async function getUserById(id:any) { 
  try {
    if (!users) await init()
    const user = await users.findOne({ _id: new ObjectId(id) })
    if (!user) throw new Error()
    return { user: { ...user, _id: user._id.toString() } }
  } catch (error) {
    return { error: 'Failed to get user!' }
  }
}

export async function getUserByEmail(email:string) {
  try {
    if (!users) await init()
    const query = { email: email };
    const user = await users.findOne({email})
    console.log("inside - ",user)
    // if (!user) throw new Error()
    if (!user) return {user:null}
    return { user: { ...user, _id: user._id.toString() } }
  } catch (error) {
    return { error: 'Failed to get user!' }
  }
}

export async function createUser(UserData:{}) {
  try {
    if (!users) await init()
    // return await users.insertOne({ title, isCompleted: false })
    return await users.insertOne(UserData)
  } catch (error) {
    return { error: 'Failed to create user!' }
  }
}

export async function deleteTUser(id:any) {}

export async function completeTUser(id:any) {}
