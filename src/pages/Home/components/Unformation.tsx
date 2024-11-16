import { Phone } from "lucide-react";
import TeaImage from "../../../assets/images/home/teaBg.jpg";

const Unformation = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ TeaImage }
            alt="Background Image"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */ }
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl font-secondary">
            Plan an Unforgettable Experience Today!
          </h1>

          <p className="text-lg sm:text-lg text-white/90 mb-8 max-w-2xl">
            We&apos;ll help you create the perfect stay and adventure, all
            within your budget.
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-white/90 font-medium uppercase tracking-wider">
              Book Your Stay Now
            </p>

            <a
              href="tel:+1-123-456-7890"
              className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-white/90 transition-colors"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              +1-123 456 7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unformation;
