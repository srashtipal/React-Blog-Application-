import { myAxios } from "./Helper"

export const signUp=(User)=>{
    return myAxios
    .post("/auth/register",User)
    .then((response)=>response.data);
};

export const loginUser=(loginDetail)=>{
    return myAxios
    .post("/auth/login",loginDetail)
    .then((response)=>response.data);
  };