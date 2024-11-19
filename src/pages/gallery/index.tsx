import galleryImg from "../../assets/images/gallery/gallery.jpg"
import Images from './components/Images'
import Stories from './components/Stories'
import HeaderSection from '../../components/common/HeaderSection'

const index = () => {
    return (
        <div>
            <HeaderSection img={ galleryImg } title="Visit our gallery" desc="content... content... content..." />
            <Images />
            <Stories />
        </div>
    )
}

export default index
