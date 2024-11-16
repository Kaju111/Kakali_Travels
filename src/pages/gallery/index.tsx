import React from 'react'
import TopImages from '../../components/common/TopImages'
import galleryImg from "../../assets/images/gallery/gallery.jpg"
import Images from './components/Images'
import Stories from './components/Stories'

const index = () => {
    return (
        <div>
            <TopImages img={galleryImg} title="Visit our gallery" desc="content... content... content..." />
            <Images />
            <Stories />
        </div>
    )
}

export default index
