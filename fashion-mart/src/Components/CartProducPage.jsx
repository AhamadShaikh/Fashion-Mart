import React, { useState } from 'react'
import { Box, Flex, Button, Text, Center, Image, border } from "@chakra-ui/react";
import { Link } from "react-router-dom"
const CartProducPage = ({data,handleDecrement,handleIncrement,count,getTotal }) => {

    return (
        <Flex w="60%" m="auto" border="2px solid black" mt="5" borderRadius="20px" p="5">
            <Box w="100%" mr="5">
                <Image src={data.image} alt="image not found" />
            </Box>
            <Box textAlign="left" m="5">
                <Text as="b" fontSize="20px" m="5">{data.name}</Text>
                <Text fontSize="20px" m="5">From {data.brandName}</Text>
                <Text m="5">{data.detail}</Text>
                <Text m="5" as="b">{data.discount}%</Text>
                <br />
                <Text as="b" m="5">${data.totalPrice}</Text>
                <Box m="5">
                    <button onClick={()=>handleDecrement(data.id)} style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "orange", borderRadius: "5px" }} disabled={count === 1} >-</button>
                    <Button disabled>{count}</Button>
                    <button onClick={()=>handleIncrement(data.id)} style={{ border: "1px solid black", width: "30px", height: "30px", backgroundColor: "green", borderRadius: "5px" }}>+</button>
                </Box>
            </Box>
        </Flex>
        
    )
}

export default CartProducPage