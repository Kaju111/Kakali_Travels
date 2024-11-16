import packageImg from "../../assets/images/packages/packages.jpg"
import TopImages from "../../components/common/TopImages"
import Destinations from "./components/Destinations"
import Guides from "./components/Guides"
import More from "./components/More"
import Recommended from './components/Recommended'
const index = () => {
    return (
        <div>
            <TopImages img={packageImg} title="Lets the journey begin" desc="Get the best prices" />
            <Destinations />
            <Recommended />
            <Guides />
            <More />
        </div>
    )
}

export default index
