import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  // _id:string,
  uid:string,
  email:string,
  username:string,
  photoURL:string,
  phoneNumber:string,
  providerData:string,
  reloadUserInfo:string,
  creationTime:string,
  createdAt:string,
};

const initialState = {
  // _id:"",
  uid:"",
  email:"",
  username:"",
  photoURL:"",
  phoneNumber:"",
  providerData:"",
  reloadUserInfo:"",
  creationTime:"",
  createdAt:"",
} as UserState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    
    addUserRedux: (state, action: PayloadAction<UserState>) => {
      // state._id=action.payload._id;
      state.uid=action.payload.uid;
      state.email=action.payload.email;
      state.username=action.payload.username;
      state.photoURL=action.payload.photoURL;
      state.phoneNumber=action.payload.phoneNumber;
      state.providerData=action.payload.providerData;
      state.reloadUserInfo=action.payload.reloadUserInfo;
      state.creationTime=action.payload.creationTime;
      state.createdAt=action.payload.createdAt;
    }
  },
});

export const {
  addUserRedux,
  resetUser,
} = user.actions;
export default user.reducer;
