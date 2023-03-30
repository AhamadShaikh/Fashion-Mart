
import { createContext, useState } from "react"
import { getSingleProduct } from "../AllApi/Api"
import { Link, navigate } from "react-router-dom"

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [productData, setProductData] = useState([])
  const handleSingleProductPage = (id) => {
    // getSingleProduct(id).then((res) => setProductData(res.data))
  }
  return (
    <AuthContext.Provider value={{ handleSingleProductPage: handleSingleProductPage, data: productData }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;