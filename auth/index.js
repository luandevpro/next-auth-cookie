import axios from "axios";

const WINDOW_USER = "__USER__"

export const loginUser = async (email, password) => {
   const { data } = await axios.post("/api/login", { email , password});
   if(typeof window !== undefined){
      window[WINDOW_USER] = data || {}
   }
}

export const getServerSideToken = (req) => {
   const { token } = req.signedCookies;
   if(!token){
      return {}
   }else if(!req.signedCookies){
      return {}
   }else {
      return {user : token}
   }
}

export const getClientSideToken = () => {
   if(typeof window !== "undefined"){
      const user = window[WINDOW_USER] || {}
      return { user };
   }
   return { user: {}}
}

export const getUserScript = (user) => {
   return `${WINDOW_USER} = ${JSON.stringify(user)}`;
}

export const logoutUser = async () => {
   if(typeof window !== "undefined"){
      window[WINDOW_USER] = {}
   }
   const logout = await axios.post("/api/logout");
   return logout;
}