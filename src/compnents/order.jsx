import "./order.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import order from "../assets/order.avif"
import order_1 from "../assets/order_1.avif"
import order_2 from "../assets/order_2.avif"
import order_3 from "../assets/order_3.avif"
import order_4 from "../assets/order_4.avif"
import order_5 from "../assets/order_5.avif"
import order_6 from "../assets/order_6.avif"
import order_7 from "../assets/order_11.webp"
import order_8 from "../assets/order_8.avif"
import order_9 from "../assets/order_10.webp"

function Order() {
    const slides = [
    { img: order, title: "Burgers & Fast food", subtitle: "21 Restaurants" },
    { img: order_1, title: "Pizza & Italian", subtitle: "15 Restaurants" },
    { img: order_2, title: "Sushi & Japanese", subtitle: "10 Restaurants" },
    { img: order_3, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_4, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_5, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_6, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_7, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_8, title: "Indian Dishes", subtitle: "12 Restaurants" },
    { img: order_9, title: "Indian Dishes", subtitle: "12 Restaurants" },
    ];

    return(
        <>
            <div className="food-slider-container">
                <h1 className="h1">Order.uk Popular Categories😍</h1>  
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                loop>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="food-card">
                            <img src={slide.img} alt={slide.title} className="food-img" />
                        <div className="food-info">
                            <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </div>
                        </div>
                </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </>
    );
}

export default Order