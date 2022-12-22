import { myAxios } from "./Helper"
import { privateAxios } from "./Helper";

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

  export const getUser=(userId)=>{
    console.log(userId)
    return myAxios.get(`/users/${userId}/`).then(res=>res.data)
  }

  export const updateUser=(user,userId)=>{
    console.log(userId);
    return privateAxios.put(`/users/${userId}`,user).then(res=>res.data)
  }

  //load single post of given id
export const loadUser = () => {
  return myAxios.get(`/users/`).then((reponse) => reponse.data);
};
