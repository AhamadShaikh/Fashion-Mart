import { useState, useEffect } from 'react'
import { GetAddToCartData, GetProductsTotal } from '../AllApi/Api';
import { Stack, Grid, Box, Flex, Text, Center, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import CartProducPage from '../Components/CartProducPage';
import logo from "./logo.png"
const CartPage = () => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState([]);
    const [totalPrice, setTotalPrce] = useState(0)

    const handleIncrement = (id) => {
        setCount((prev) => prev + 1)
        GetProductsTotal(id).then((res) => setPrice(res?.data.totalPrice)).catch((err) => console.log(err))
        setTotalPrce(count * price)
        console.log(totalPrice)
    }

    const handleDecrement = (id) => {
        setCount((prev) => prev - 1)
        GetProductsTotal(id).then((res) => setPrice(res?.data.totalPrice)).catch((err) => console.log(err))
        if (count === 1) {
            setTotalPrce(1 * price)
        } else {
            setTotalPrce(count * price)
        }
        console.log(totalPrice)
    }

    const getData = () => {
        GetAddToCartData().then((res) => setCart(res?.data)).catch((err) => console.log(err))
    }

    let cartData = [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name !== undefined) {
            cartData.push(cart[i])
        }
    }
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
        total += cartData[i].totalPrice
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div>
                <Flex boxShadow="2xl" minWidth="max-content" alignItems="center" gap="2" border="1px solid black">
                    <Box>
                        <Text size="md" fontSize="30" as="b">
                            <Link to="/">
                                <Image src={logo} alt="" h="120px" w="150px" />
                            </Link>
                        </Text>
                    </Box>
                </Flex>
                <hr />
            </div>
            <div>
                <Flex>
                    <Box>
                        <Stack>
                            <Grid templateColumns='repeat(1, 1fr)' gap={5}>
                                {
                                    cartData.map((ele) => (
                                        <CartProducPage key={ele.id} data={ele} handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count} />
                                    ))
                                }
                            </Grid>
                        </Stack>
                    </Box>
                    <Box mt="10" mr="10" border="1px solid black" borderRadius="10px" height="200px" w="400px" p="10">
                        <Text as="b" fontSize="27px">
                            Cart Total : {totalPrice} <Text></Text>
                        </Text>
                        <Center>
                            <Link to="/AddressPage">
                                <Button color="white" bg="black" _hover="" m="10" w="300px">Proceed To Pay</Button>
                            </Link>
                        </Center>
                    </Box>
                </Flex>
            </div>
        </div>
    )
}

export default CartPage