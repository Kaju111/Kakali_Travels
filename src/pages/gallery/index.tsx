import galleryImg from "../../assets/images/gallery/gallery.jpg"
import Images from './components/Images'
import Stories from './components/Stories'
import HeaderSection from '../../components/common/HeaderSection'

const index = () => {
    return (
        <div>
            <HeaderSection img={ galleryImg } title="A Visual Journey Awaits" desc="Step into a world of breathtaking landscapes, rich cultures
            and untold stories. Our gallery is a window into the soul of the region, featuring stunning vistas, vibrant festivals and captivating wildlife moments" />
            <Images />
            <Stories />
        </div>
    )
}

export default index
