import AboutUs from './components/about-us'
import HeaderSection from '../../components/common/HeaderSection'
import aboutImg from "../../assets/images/about/about.webp"

const index = () => {
    return (
        <div>
            <HeaderSection img={aboutImg} title="Travel Made Easy Always" desc="Your dream destinations, crafted just the way you want." />
            <AboutUs />
        </div>
    )
}

export default index
