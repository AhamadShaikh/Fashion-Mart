
import { dashboardProduct, StaticImage1, StaticImage2 } from "../AllApi/Api";
import { Flex, Box, Heading, Text, Button, Center, Image, Grid } from "@chakra-ui/react"
import './LandingPage.css';
import DashboardProducts from "../Components/DashboardProducts"
import { useState, useEffect } from "react"
import { Icon } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImStarFull } from 'react-icons/im'
import { MdStarHalf } from 'react-icons/md'

import React from "react";
function LandingPage() {
    const [images1, setImages1] = useState([])
    const [images2, setImages2] = useState([])
    const [dashboardData, setDashboardData] = useState([])

    const fetchAndUpdateData = () => {
        dashboardProduct().then((res) => setDashboardData(res.data)).catch((err) => console.log(err))
        StaticImage1().then((res) => setImages1(res.data)).catch((err) => console.log(err))
        StaticImage2().then((res) => setImages2(res.data)).catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchAndUpdateData();
    }, [])

    const handlePrev = () => {
        // let width = box.clientWidth;
        // box.scrollLeft = box.scrollLeft-width
    }
    const handleNext = () => {
        // let  width = box.clientWidth;
        // box.scrollLeft = box.scrollLeft+width
    }

    return (
        <div className='Images'>
            <Box>
                <img src="https://cdna.lystit.com/cms/EN_XL_1be4462434.png" alt="no image found" />
            </Box>
            <hr />
            <Box className="image-card">
                <button className='prev-btn' onClick={handlePrev}><Text>&lt;</Text></button>
                {
                    images1?.map((ele) => (
                        <Box className='image' border="1px solid black">
                            <Text>{ele.name}</Text>
                            <img src={ele.image} alt="" />
                        </Box>
                    ))
                }
                <button className='next-btn' onClick={handleNext}><Text>&gt;</Text></button>
            </Box>
            <hr />
            <Box className="image-card">
                <button className='prev-btn' onClick={handlePrev}><Text>&lt;</Text></button>
                {
                    images2?.map((ele) => (
                        <Box className='image' border="1px solid black">
                            <Text>{ele.name}</Text>
                            <img src={ele.image} alt="" />
                        </Box>
                    ))
                }
                <button className='next-btn' onClick={handleNext}><Text>&gt;</Text></button>
            </Box>
            <hr />
            <Flex >
                <Center>
                    <Box border="1px solid black" h="250px">
                        <Heading fontSize="50px">1</Heading>
                        <Heading>THE BIGGEST SELECTION</Heading>
                        <Text>Shop over 12,000 brands and stores in one place.
                            <br />
                            Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>
                </Center>
                <Center>
                    <Box border="1px solid black" h="250px">
                        <Heading fontSize="50px">2</Heading>
                        <Heading>THE HOTTEST PRODUCTS</Heading>
                        <Text>See what’s new and what’s trending.
                            <br />

                            Hit the heart to receive alerts on the latest drops from your favourite brands.</Text>
                    </Box>
                </Center>
                <Center>
                    <Box border="1px solid black" h="250px">
                        <Heading fontSize="50px">3</Heading>
                        <Heading>THE BEST PRICES</Heading>
                        <Text>Compare prices and shipping options across thousands of stores.
                            <br />

                            Lyst members are notified when an item goes on sale.</Text>
                    </Box>
                </Center>
            </Flex>
            <hr />
            <Grid templateColumns='repeat(4, 1fr)' gap={5} bg="blackAlpha.100">
                {
                    dashboardData?.map((ele) => (
                        <DashboardProducts key={ele.id} {...ele} />
                    ))
                }
            </Grid>
            <Flex justifyContent="space-evenly" border="1px solid black" bg="blackAlpha.50" p="5">
                <Box>
                    <Image src="https://uk.trustpilot.com/review/www.lyst.com?utm_medium=trustbox&utm_source=Mini" alt="" />
                    <Heading>
                        Trustpilot
                        <img src="https://uk.trustpilot.com/review/www.lyst.com?utm_medium=trustbox&utm_source=Mini" alt="" />
                    </Heading>
                    <Text>
                        <br />
                        <br />
                        <Icon color="green" fontSize="30px" as={ImStarFull} />
                        TrustScore 4.3
                        <br />
                        <br />
                        <Icon color="green" fontSize="30px" as={ImStarFull} />
                        <Icon color="green" fontSize="30px" as={ImStarFull} />
                        <Icon color="green" fontSize="30px" as={ImStarFull} />
                        <Icon color="green" fontSize="30px" as={ImStarFull} />
                        <Icon color="green" fontSize="30px" as={MdStarHalf} />
                        <br />
                        <br />
                        3,066 reviews
                        <br />
                        <br />
                        <a target="_blank" href="https://www.facebook.com/Lyst/">
                            <Icon fontSize="20px" as={FaFacebookF} /></a>
                        <a target="_blank" href="https://www.instagram.com/lyst/?hl=en">
                            <Icon fontSize="20px" as={BsInstagram} /></a>
                    </Text>
                    <br />
                    <Text>Learn about the Lyst app for iPhone, iPad and Android. <br />© 2023 Lyst </Text>
                    <Image src="https://uk.trustpilot.com/review/www.lyst.com?utm_medium=trustbox&utm_source=Mini" alt="" />
                </Box>
                <Box>
                    <Text textAlign="left">
                        INTERNATIONAL
                        <br />
                        Lyst - AU
                        <br />
                        Lyst - CA
                        <br />
                        Lyst - UK
                        <br />
                        Lyst - Österreich
                        <br />
                        Lyst - Schweiz
                        <br />
                        Lyst - Deutschland
                        <br />
                        Lyst - España
                        <br />
                        Lyst - France
                        <br />
                        Lyst - Italia
                        <br />
                        Lyst - 日本
                        <br />
                        Lyst - België
                        <br />
                        Lyst - Nederland
                    </Text>
                </Box>
                <Box>
                    <Text textAlign="left">
                        HELP AND INFO
                        <br />
                        Help center
                        <br />
                        About us
                        <br />
                        Shipping policy
                        <br />
                        Returns policy
                        <br />
                        Payments
                        <br />
                        Refund policy
                        <br />
                        Developers
                        <br />
                        Careers
                        <br />
                        Contact
                        <br />
                        Terms & conditions
                        <br />
                        Privacy & cookie policy
                        <br />
                        Intellectual property
                        <br />
                        Categories
                        <br />
                        Become a partner
                        <br />
                        Lyst Insights
                        <br />
                        Lyst News
                        <br />
                        s172 statement
                        <br />
                        Modern slavery statement
                    </Text>
                </Box>
            </Flex>
        </div>
    )
}
export default LandingPage;

