import { myAxios } from "./Helper"

export const signUp=(User)=>{
    return myAxios
    .post("/api/v1/auth/register",User)
    .then((response)=>response.data);
};

export const loginUser=(loginDetail)=>{
    return myAxios
    .post("/api/v1/auth/login",loginDetail)
    .then((response)=>response.data);
  };