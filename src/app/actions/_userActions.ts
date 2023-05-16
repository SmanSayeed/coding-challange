"use server";

import { getUserById } from "@/lib/mongodb/usersdb";
import User from "@/models/usersModel";
import { statusText, strings } from "@/services/constants/constants";
import connectDB from "@/services/utils/connectDB";
import { revalidatePath } from "next/cache";

export async function createUserAction(UserData: {}) {
  try {
    await connectDB();
    console.log("data push = ", UserData);
    await User.create(UserData);
    revalidatePath("/");
    return { status: statusText.ok, message: strings.UserCreateMessage };
  } catch (e) {
    return { status: statusText.error, message: strings.ServerError, data: e };
  }
}

export async function findUserByEmailAction(email: string) {
  console.log("find user email = ", email);
  // await getUserByEmail(email).then((res: any) => {
  //   console.log("dd printing res...");
  //   console.log("dd res = ", res);
  //   data = res;
  // });

  try {
    const userData = await User.findOne({ email });
    console.log("userData  - ", userData);
    if (!userData) {
      return {
        status: statusText.error,
        message: strings.userNotFound,
      };
    } else {
      return {
        status: statusText.ok,
        message: strings.successMessage("User"),
        data: JSON.stringify(userData),
      };
    }
  } catch (e) {
    return {
      status: statusText.error,
      message: strings.ServerError,
      data: JSON.stringify(e),
    };
  }
}

// export async function createUserAction(UserData:{}) {
//   const data = UserData
//   console.log("data push = ",UserData)
//   await createUser(UserData)
//   revalidatePath('/')
// }
export async function findUserByIdAction(id: any) {
  console.log("id = ", id);
  const { user } = await getUserById(id);
  return user;
}
// export async function findUserByEmailAction(email: string) {
//   console.log("email = ", email);
//   let data: any;
//   await getUserByEmail(email).then((res: any) => {
//     console.log("dd printing res...");
//     console.log("dd res = ", res);
//     console.log("dd res result = ", res);
//     data = res;
//   });
//   console.log("data - ", data);
//   return data;
// }

// export async function checkUser(email:string){
//   console.log("emagetUserByEmailil = ",email);
//   const { user } = await getUserByEmail(email)
//   // return   findUserByEmailAction(email);
//   return user
//  }
