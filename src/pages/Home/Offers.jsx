import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Offers = () => {
  const [offers, setOffers] = useState();
  useEffect(() => {
    fetch("https://shelfbud-server.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl text-gray-700 font-bold text-center pt-8 pb-3">
        Offers
      </h1>
      <div className="mx-10 rounded-md">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="md:h-[350px] lg:h-[500px]"
        >
          {offers?.map((offer) => (
            <SwiperSlide key={offer._id}>
              <img
                src={offer.img}
                alt=""
                className="h-full w-full rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offers;
