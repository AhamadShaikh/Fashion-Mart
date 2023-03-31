import {MenProducts} from "../AllApi/Api" 
import {useState,useEffect} from "react";
import {Grid} from "@chakra-ui/react";
import DashboardProducts from "../Components/DashboardProducts"
import Navbar from "../Pages/Navbar";
function MenProductPage() {
    const [menData, setMenData] = useState([])

    const fetchAndUpdateData = () => {
        MenProducts().then((res) => setMenData(res?.data)).catch((err) => console.log(err))
    }
    console.log(menData)

    useEffect(() => {
        fetchAndUpdateData();
    }, [])
    return (
        <div>
            <Navbar/>
            <Grid templateColumns='repeat(4, 1fr)' gap={5} bg="blackAlpha.100">
                {
                    menData?.map((ele) => (
                        <DashboardProducts key={ele.id} {...ele} />
                    ))
                }
            </Grid>
        </div>
    )
}
export default MenProductPage;