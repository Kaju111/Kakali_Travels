import packageImg from "../../assets/images/packages/packages.jpg"
import HeaderSection from "../../components/common/HeaderSection"
import CustomPackages from "./components/CustomPackages"
import Destinations from "./components/Destinations"
import Guides from "./components/Guides"
import More from "./components/More"
import Recommended from './components/Recommended'
const index = () => {
    return (
        <div>
            <HeaderSection img={packageImg} title="Lets the journey begin" desc="Get the best prices" />
            <Destinations />
            <Recommended />
            <Guides />
            <More />
            <CustomPackages />
        </div>
    )
}

export default index
