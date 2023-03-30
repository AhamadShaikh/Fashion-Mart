import {WomenProducts} from "../AllApi/Api" 
import {useState,useEffect} from "react";
import {Grid} from "@chakra-ui/react";
import DashboardProducts from "../Components/DashboardProducts"
import Navbar from "../Pages/Navbar";
function WomenProductPage() {
    const [womendData, setWomenData] = useState([])

    const fetchAndUpdateData = () => {
        WomenProducts().then((res) => setWomenData(res?.data)).catch((err) => console.log(err))
    }
    console.log(womendData)

    useEffect(() => {
        fetchAndUpdateData();
    }, [])
    return (
        <div>
            <Navbar/>
            <Grid templateColumns='repeat(4, 1fr)' gap={5} bg="blackAlpha.100">
                {
                    womendData?.map((ele) => (
                        <DashboardProducts key={ele.id} {...ele} />
                    ))
                }
            </Grid>
        </div>
    )
}
export default WomenProductPage;