'use server'

import { createUser, getUserByEmail, getUserById } from '@/lib/mongodb/usersdb'
import { revalidatePath } from 'next/cache'

export async function createUserAction(UserData:{}) {
  const data = UserData
  console.log("data push = ",UserData)
  await createUser(UserData)
  revalidatePath('/')
}
export async function findUserByIdAction(id:any) {
  console.log("id = ",id);
  const {user} = await getUserById(id)
  return user;
  }
export async function findUserByEmailAction(email:string) {
  console.log("email = ",email);
  let data:any;
  await getUserByEmail(email).then((res:any)=>{
    console.log("dd printing res...")
    console.log("dd res = ",res);
    console.log("dd res result = ",res);
    data = res;
  })
  console.log("data - ",data)
  return data;
  }

// export async function checkUser(email:string){
//   console.log("emagetUserByEmailil = ",email);
//   const { user } = await getUserByEmail(email)
//   // return   findUserByEmailAction(email);
//   return user
//  }