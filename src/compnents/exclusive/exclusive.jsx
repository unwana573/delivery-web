import "./exclusive.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "../../assets/slider_11.jpg"
import slider_1 from "../../assets/slider_1.avif"
import slider_2 from "../../assets/slider_2.avif"
import slider_3 from "../../assets/slider_3.avif"
import slider_4 from "../../assets/slider_4.avif"
import slider_5 from "../../assets/slider_5.avif"
import slider_6 from "../../assets/slider_6.avif"
import slider_7 from "../../assets/slider_7.avif"
import slider_8 from "../../assets/slider_8.avif"
import slider_9 from "../../assets/slider_9.avif"
import slider_10 from "../../assets/slider_10.webp"

function Exclusive() {
    return (
        <>  
            <div className="ex-nav">
                <label htmlFor="logo">Up to-40%🎊 Order.uk exclusive deals</label>
                <ul>
                    <li>Vegan</li>
                    <li>Sushi</li>
                    <li>Pizza & Fast food</li>
                    <li>others  </li>
                </ul>
            </div>
            <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="custom-swiper"
                breakpoints={{
                    320: { slidesPerView: 1 },  // phones
                    480: { slidesPerView: 1 },  // small devices
                    768: { slidesPerView: 2 },// desktops
                    1280: { slidesPerView: 3 },// desktops
                }}>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider } alt="Restaurant" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_1 } alt="Chef Burgers" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_2 } alt="London" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_3 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_4 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_5 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_6 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_7 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_8 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_9 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrapper">
                        <img src={ slider_10 } alt="Extra Slide" className="slide-image" />
                        <div className="slide-text"><span>Restaurant</span><br />Chef Burgers London</div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
        </>
    );
}

export default Exclusive