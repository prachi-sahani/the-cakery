import axios from "axios";
import { createContext } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utilities/server-request/server-request";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem("token") || "");
  const navigate =  useNavigate();

  async function loginAsGuest() {
      try{
        // default credentials
        const data = {
          email: "adarshbalika@gmail.com",
          password: "adarshbalika"
        }
        const token = await login(data);
        const lastRoute = localStorage.getItem("lastRoute");
        setAuthToken(token.data.encodedToken);
        sessionStorage.setItem("token", token.data.encodedToken)
        localStorage.setItem("lastRoute","/")
        navigate(lastRoute ? lastRoute : "/")
      }
      catch(err){
          console.log(err)
      }
  }
  function logout(){
    sessionStorage.setItem("token","")
    setAuthToken("");
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ authToken, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
