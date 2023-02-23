import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const signin = async (enteredCredentials) => {
      try {
          const res = await axios.post("http://localhost:3305/backend/auth/signin", enteredCredentials, {
              withCredentials:true,
          });
          setCurrentUser(res.data)
      } catch (err) {
          console.log(err)
      }
  }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);
    
      return (
        <AuthContext.Provider value={{ currentUser, signin }}>
          {children}
        </AuthContext.Provider>
      );
};

