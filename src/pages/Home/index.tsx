import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Home";
import LocalExperiences from "./components/LocalExperiences";
import Testimonial from "./components/Testimonial";
import Unformation from "./components/Unformation";
import Recommended from '../packages/components/Recommended'
import PackageSearch from "../../components/packages/PackageSearch";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <PackageSearch />
            {/* <Recommended /> */ }
            <LocalExperiences />
            <Facilities />
            <Gallery />
            <Testimonial />
            <Unformation />
        </div>
    );
};

export default Home;
