import { PackagesImages } from "../../assets/assets"

export default function PromotionalBanners() {

    const { image1, image2 } = PackagesImages;
    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">
                {/* First Banner */ }
                <div className="relative overflow-hidden rounded-2xl text-white">
                    <img src={ image2 } alt="image1" className="w-full h-full" />
                </div>

                {/* Second Banner */ }
                <div className="relative overflow-hidden rounded-2xl">
                    <img src={ image1 } alt="image1" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}