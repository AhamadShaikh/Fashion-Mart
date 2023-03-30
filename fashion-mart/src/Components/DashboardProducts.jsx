import React from 'react'
import { GridItem, Text ,Center} from "@chakra-ui/react"
const DashboardProducts = ({ image, name, detail, brandName, totalPrice }) => {
    console.log(image, name, detail, brandName, totalPrice)
    return (
        <GridItem w='100%' border="1px solid black" p="3" bg="white">
            <img src={image} width="100%"/>
            <Text as="b" fontSize="20px">{name}</Text>
            <Text>{detail}</Text>
            <Text as="b">${totalPrice}</Text>
        </GridItem>
    )
}

export default DashboardProducts;