import { WomenProducts } from "../AllApi/Api"
import { useState, useEffect, useReducer } from "react";
import { Grid, Flex, Select, Stack, Text, Box } from "@chakra-ui/react";
import DashboardProducts from "../Components/DashboardProducts"
import Navbar from "../Pages/Navbar";
import "./WomenProductPage.css"

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_LOADING": {
            return {
                loading: true,
                data: [],
                err: false,
            }
        }
        case "FETCH_SUCCESS": {
            return {
                loading: false,
                data: action.payload,
                err: false,
            }
        }
        case "FETCH_ERROR": {
            return {
                loading: false,
                data: [],
                err: true,
            }
        }
        default: {
            throw new Error(`Invalid Action`)
        }
    }
}

const pageReducer = (pageState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return pageState + 1
        }
        case "DECREMENT": {
            return pageState - 1

        }
        default: {
            throw new Error(`Invalid Action`)
        }
    }
}


function WomenProductPage() {
    let initState = {
        loading: false,
        data: [],
        err: false,
    }

    const [state, dispatch] = useReducer(reducer, initState);
    const [pageState, pageDispatch] = useReducer(pageReducer, 1)
    const [order, setOrder] = useState("asc");
    const [query, setQuery] = useState("")


    const fetchAndUpdate = (pageState, order, query) => {
        dispatch({ type: "FETCH_LOADING" })
        WomenProducts({ order: order, pageState: pageState, query: query })
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            })
            .catch(() => {
                dispatch({ type: "FETCH_ERROR" })
            })
    }

    useEffect(() => {
        fetchAndUpdate(pageState, order, query)
    }, [pageState, order, query])

    const handleSort = (e) => {
        setOrder(e.target.value)
    }
    const handleSearch = (e) => {
        setQuery(e?.target.value)
    }

    return (
        <div>
            <div>
                <Navbar handleSearch={handleSearch} />
                <Flex m="3">
                    <Stack mr="5">
                        <Box border="2px solid black" borderRadius="5px" p="3" boxShadow="2xl">
                            <Text as="b">Sort By Price</Text>
                            <Box border="1px solid black" m={"5"} borderRadius="5px">
                                <Select w="200px" onChange={handleSort}>
                                    <option value="asc">price low to high</option>
                                    <option value="desc">price high to low</option>
                                </Select>
                            </Box>
                            <Box border="1px solid black">
                                <Text as="b" mb="5">filter by brands</Text>
                                <hr />
                                <Text>Dolce & Gabbana : </Text><input value="Dolce & Gabbana" type="checkbox" onChange={(e) => setQuery(e.target.value)} />
                                <Text>Cettire : </Text><input value="Cettire" type="checkbox" onChange={(e) => setQuery(e.target.value)} />
                                <Text>Mytheresa : </Text><input value="Mytheresa" type="checkbox" onChange={(e) => setQuery(e.target.value)} />
                            </Box>
                        </Box>
                    </Stack>
                    <Grid templateColumns='repeat(3, 1fr)' gap={5} bg="blackAlpha.100">
                        {
                            state?.data?.map((ele) => (
                                <DashboardProducts key={ele.id} {...ele} />
                            ))
                        }
                    </Grid>
                </Flex>
            </div>
            <div className="pageBtn">
                <button disabled={pageState === 1} onClick={() => pageDispatch({ type: "DECREMENT" })}>PREV</button>
                <button disabled>{pageState}</button>
                <button disabled={pageState === 2} onClick={() => pageDispatch({ type: "INCREMENT" })}>NEXT</button>
            </div>
        </div>
    )
}
export default WomenProductPage;