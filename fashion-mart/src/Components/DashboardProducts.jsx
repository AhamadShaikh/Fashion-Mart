import { useContext } from 'react'
import { GridItem, Text, Button } from "@chakra-ui/react"
import {Link, Navigate} from "react-router-dom"
import { getSingleProduct } from '../AllApi/Api';
import { AuthContext } from '../context/AuthContext';
const DashboardProducts = ({id, image, name, detail, brandName, totalPrice }) => {

    const {handleSingleProductPage} = useContext(AuthContext);

// const handleSingleProductPage=(id)=>{
//     getSingleProduct(id).then((res)=>console.log(res.data))
// }
    return (
            <GridItem w='100%' border="1px solid black" p="3" bg="white">
                <img src={image} width="100%" />
                <Text as="b" fontSize="20px">{name}</Text>
                <Text fontSize="20px">From {brandName}</Text>
                <Text>{detail}</Text>
                <Text as="b">${totalPrice}</Text>
                <br />
                <Link to={`/SingleProductPage/${id}`}>
                <Button color="white" bg="black" _hover="">Shop Now</Button>
                </Link>
            </GridItem>
    )
}

export default DashboardProducts;