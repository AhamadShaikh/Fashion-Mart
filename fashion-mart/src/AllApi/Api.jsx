import axios from "axios";
export const dashboardProduct=()=>{
    return axios.get(`https://expensive-turtleneck-dove.cyclic.app//dashboard-products`)
}

export const StaticImage1=()=>{
    return axios.get(`https://expensive-turtleneck-dove.cyclic.app/StaticImage1`)
}

export const StaticImage2=()=>{
    return axios.get(`https://expensive-turtleneck-dove.cyclic.app/StaticImage2`)
}

export const WomenProducts=(id)=>{
    return axios.get(`https://expensive-turtleneck-dove.cyclic.app/womenswear`)
}

export const MenProducts=(id)=>{
    return axios.get(`https://expensive-turtleneck-dove.cyclic.app/menswear`)
}