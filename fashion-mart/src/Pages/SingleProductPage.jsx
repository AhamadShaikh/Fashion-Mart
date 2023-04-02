import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Button, Text, Center } from "@chakra-ui/react"
import { CloseButton } from '@chakra-ui/react'
import "./SingleProductPage.css";
import { PostHandleAddToCart, GetHandleAddToCartMen, GetHandleAddToCartWomen, GetHandleAddToCartDashPro } from "../AllApi/Api"
const SingleProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const { id } = useParams();
    const getData = async (id) => {
        try {
            setLoading(true);
            if (+id <= 8) {
                let res = await fetch(`https://fashion-mart.onrender.com/menswear/${id}`);
                let data = await res.json();
                setData(data);
            } else if (+id >= 9 && +id <= 16) {
                let res = await fetch(`https://fashion-mart.onrender.com/womenswear/${id}`);
                let data = await res.json();
                setData(data);
            } else {
                let res = await fetch(`https://fashion-mart.onrender.com/dashboard-products/${id}`);
                let data = await res.json();
                setData(data);
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData(id);
    }, [id]);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    const handleAddToCart = () => {
        // alert("Product Added To Cart")
        if (+id <= 8) {
            GetHandleAddToCartMen(id).then((res) => setCartData(res?.data)).catch((err) => console.log(err))
            // if (cartData.image !== "") {
            PostHandleAddToCart(cartData)
            // }


        }else if (+id >= 9 && +id <= 16) {
            GetHandleAddToCartWomen(id).then((res) => setCartData(res?.data)).catch((err) => console.log(err))
            PostHandleAddToCart(cartData)
        } else{
            GetHandleAddToCartDashPro(id).then((res) => setCartData(res?.data)).catch((err) => console.log(err))
            PostHandleAddToCart(cartData)
        }
    }

    return (
        <Flex w="60%" m="auto" border="2px solid black" mt="5" borderRadius="20px">
            <Box w="100%" h="500px" mr="5">
                <img src={data.image} alt="image not found" className="pro-image" />
            </Box>
            <Box textAlign="left" mt="5">
                <Text ml="400px">
                    <Link to="/"><CloseButton /></Link>
                </Text>
                <Text as="b" fontSize="20px" m="5">{data.name}</Text>
                <Text fontSize="20px" m="5">From {data.brandName}</Text>
                <Text m="5">{data.detail}</Text>
                <Text m="5" as="b">{data.discount}%</Text>
                <br />
                <Text as="b" m="5">${data.totalPrice}</Text>
                <Text m="5">{data.description}</Text>
                <Center>
                    <Button color="white" bg="black" _hover="" w="300px" onClick={() => handleAddToCart(id)}>Shop Now</Button>
                </Center>
                <Center>
                    <Link to="/CartPage">
                        <Button variant="outline" bg="blackAlpha.200" w="300px" mt="5">Go to Cart</Button>
                    </Link>
                </Center>
            </Box>
        </Flex>

    );
};
export default SingleProductPage;
