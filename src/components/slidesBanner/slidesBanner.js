import BurgerBanner from "../../assets/burger-banner.png";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner3.jpg";
import { useState } from "react";

function SlidesBanner(){
    const [currentSlidesBannerIndex, setCurrentSlidesBannerIndex] = useState(0);
    const slidesBanner = [
        <div key={0} className="bg-gradient-to-r from-[#ff1205] to-[#ffb3b3] rounded-[10px] relative overflow-hidden h-[150px]">
            <div className="ml-[22px] mt-[35px]">
                <h2 className="text-[16px] text-white font-bold w-[122px]">Special Offer for March</h2>
                <p className="text-[8px] text-white w-[113.75px]">We are here with the best desserts in town.</p>
                <button type="submit" className="mb-[21px] bg-white text-[8px] text-red-500 font-bold px-[11px] py-[6.5px] rounded">Buy Now</button>
            </div>
            <div className="absolute top-[16px] w-ful h-full right-[-70px]">
                <img src={BurgerBanner} alt="Burger Banner" className="w-full h-full object-cover" />
            </div>
        </div>,
        <img key={1} src={Banner1} alt="" className="w-full h-[150px] object-cover rounded-[10px]" />,
        <img key={2} src={Banner2} alt="" className="w-full h-[150px] object-cover rounded-[10px]" />
    ]

    const handleSwipe = (event) => {
        const startX = event.touches[0].clientX;
        let endX;

        const onTouchMove = (e) => {
            endX = e.touches[0].clientX;
        };

        const onTouchEnd = () => {
            if (!endX) return;

            const deltaX = startX - endX;

            if (deltaX > 50) {
                setCurrentSlidesBannerIndex((prev) => (prev === 0 ? slidesBanner.length - 1 : prev - 1));
            } else if (deltaX < -50) {
                setCurrentSlidesBannerIndex((prev) => (prev === slidesBanner.length - 1 ? 0 : prev + 1));
            }

            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
        };

        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
    };

    return(
        <div>
            <div className="mx-[25px] mt-[25px] flex flex-col overflow-hidden" onTouchStart={handleSwipe}>
                {slidesBanner[currentSlidesBannerIndex]}
            </div>
            <div className="mt-[15px] flex flex-row justify-center">
                {slidesBanner.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlidesBannerIndex(index)}
                        className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer ${currentSlidesBannerIndex === index ? "bg-[#FF0000]" : "bg-[#E2E2E2]"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default SlidesBanner;