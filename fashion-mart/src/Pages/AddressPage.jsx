import { useState, useReducer } from "react";
import { Heading, FormControl, Box, Center, Button, FormLabel, Input,Flex,Text,Image } from "@chakra-ui/react";
import { PostAddressDetails } from "../AllApi/Api"
import { Link } from "react-router-dom"
import logo from "./logo.png"
const initialState = {
    name: "",
    address: "",
    mobileNo: "",
    pincode: "",
};
const reducer = (state, action) => {
    switch (action.type) {
        case "name": {
            return { ...state, name: action.payload }
        }
        case "address": {
            return {
                ...state, address: action.payload
            }
        }
        case "mobileNo": {
            return {
                ...state, mobileNo: action.payload
            }
        }
        case "pincode": {
            return {
                ...state, pincode: action.payload
            }
        }
        case "reset": {
            return initialState
        }
        default: {
            return state
        }
    }
};

function AddressPage() {
    let style = {
        border: "2px solid black",
        borderRadius: "10px",
        alignItem: "center"
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    let { name, address, mobileNo, pincode } = state;
    console.log(state)

    const handleChange = (e) => {
        let { name, value } = e.target;
        let valueForm = value
        dispatch({ type: name, payload: valueForm })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        PostAddressDetails(state)
        dispatch({ type: "reset" })
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
                    <Heading color="green">Address</Heading>
                    <Box boxShadow="2xl" w="500px" m="auto" border={style.border} borderRadius={style.borderRadius} p="5" mt="30">
                        <form onSubmit={handleSubmit} >
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input type="text" name="name" value={name} placeholder="Enter Your Name" mb="2" border={style.border} onChange={handleChange} />
                                <FormLabel>Address</FormLabel>
                                <Input type="text" name="address" value={address} placeholder="Enter Address" mb="2" border={style.border} onChange={handleChange} />
                                <FormLabel>Mobile No.</FormLabel>
                                <Input type="number" name="mobileNo" value={mobileNo} placeholder="Enter Mobile Number" border={style.border} onChange={handleChange} />
                                <FormLabel>Pincode</FormLabel>
                                <Input type="number" name="pincode" value={pincode} placeholder="Enter Pincode" border={style.border} onChange={handleChange} />
                                <Center>
                                    <Link to="/PaymentPage">
                                        <Button variant="solid" bg="aqua" type="submit" mt="3">
                                            Submit Address Details
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
