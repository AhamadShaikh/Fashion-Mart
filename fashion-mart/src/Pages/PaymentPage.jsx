import { useState, useReducer } from "react";
import { Heading, FormControl, Box, Center, Button, FormLabel, Input, Flex, Text, Image } from "@chakra-ui/react";
import { PostAddressDetails } from "../AllApi/Api"
import { Link } from "react-router-dom"
import logo from "./logo.png"
function AddressPage() {
    let style = {
        border: "1px solid black",
        borderRadius: "10px",
        alignItem: "center"
    }


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
                <Box>
                    <Heading m="5">Payment</Heading>
                    <Box boxShadow="2xl" w="500px" m="auto" border={style.border} borderRadius={style.borderRadius} p="5" mt="30">
                        <form>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input type="text" placeholder="Enter Card Holder Name" border={style.border} />
                                <FormLabel>Card No.</FormLabel>
                                <Input type="number" placeholder="Enter Card Number" border={style.border} />
                                <FormLabel>CVV No.</FormLabel>
                                <Input type="number" placeholder="Enter CVV" border={style.border} />
                                <Flex>
                                    <Box mr="5">
                                        <FormLabel>Essue Date</FormLabel>
                                        <Input type="date" border={style.border} />
                                    </Box>
                                    <Box>
                                        <FormLabel>Expiry Date</FormLabel>
                                        <Input type="date" border={style.border} />
                                    </Box>
                                </Flex>
                                <Center>
                                    <Link to="/RecieptPage">
                                        <Button variant="solid" bg="aqua" type="submit" mt="3" w="300px">
                                            Pay
                                        </Button>
                                    </Link>
                                </Center>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default AddressPage;
