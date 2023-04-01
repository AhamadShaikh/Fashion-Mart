
import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true)
  }
  const logout = () => {
    setIsAuth(false)
  }
  console.log(isAuth)
  return (
    <AuthContext.Provider value={{ login: login, logout: logout, isAuth: isAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;