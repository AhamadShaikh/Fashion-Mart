import axios from "axios";
export const dashboardProduct = () => {
    return axios.get(`https://fashion-mart.onrender.com/dashboard-products`)
}

export const StaticImage1 = () => {
    return axios.get(`https://fashion-mart.onrender.com/StaticImage1`)
}

export const StaticImage2 = () => {
    return axios.get(`https://fashion-mart.onrender.com/StaticImage2`)
}

export const WomenProducts = ({order,pageState,query}) => {
    return axios.get(`https://fashion-mart.onrender.com/womenswear?q=${query}&_page=${pageState}&_limit=6 &_sort=totalPrice&_order=${order}`)
}

export const MenProducts = ({order,pageState,query}) => {
    return axios.get(`https://fashion-mart.onrender.com/menswear?q=${query}&_page=${pageState}&_limit=6 &_sort=totalPrice&_order=${order}`)
}

export const GetSearchData = (query) => {
    return axios.get(`https://fashion-mart.onrender.com/dashboard-products?q=${query}`)
}

export const GetHandleAddToCartMen = (id)=>{
    console.log(id)
    return axios.get(`https://fashion-mart.onrender.com/menswear/${id}`)
}
export const GetHandleAddToCartWomen = (id)=>{
    console.log(id)
    return axios.get(`https://fashion-mart.onrender.com/womenswear/${id}`)
}
export const GetHandleAddToCartDashPro = (id)=>{
    console.log(id)
    return axios.get(`https://fashion-mart.onrender.com/dashboard-products/${id}`)
}

export const PostHandleAddToCart = (cartData)=>{
    return axios.post(`https://fashion-mart.onrender.com/cartData`,cartData)
}

export const GetAddToCartData = ()=>{
    return axios.get(`https://fashion-mart.onrender.com/cartData`)
}

export const PostSignUpData = (state)=>{
    return axios.post(`https://fashion-mart.onrender.com/users`,state)
}

export const GetSignUpData = ()=>{
    return axios.get(`https://fashion-mart.onrender.com/users`)
}

export const GetProductsTotal = (id)=>{
    console.log(id)
    return axios.get(`https://fashion-mart.onrender.com/dashboard-products/${id}`)
}

export const PostAddressDetails = (state)=>{
    return axios.post(`https://fashion-mart.onrender.com/customer-details`,state)
}