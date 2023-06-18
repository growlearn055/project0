import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";


console.log(Swiper.width)
const Carousel = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    scale: 1,
                    stretch: 0,
                    depth: 300,
                    modifier: 2,
                    slideShadows: false,
                }}
                pagination={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-[96.5%] flex flex-col justify-center items-start"
            >
                <SwiperSlide>
                    <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl text-center align-middle font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl text-center align-middle font-extrabold mb-5 uppercase">Client Centric Development</h2>
                        <p className="text-base text-justify align-middle">We craft the client's needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl text-center align-middle font-extrabold mb-5 uppercase">Agile Development</h2>
                        <p className="text-base text-justify align-middle">We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl text-center align-middle font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-[25rem] h-64 bg-white rounded-3xl shadow-2xl shadow-gray-400 px-10 py-2 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 border-2 mb-3 border-black rounded-full"></div>
                        <h2 className="text-2xl font-extrabold mb-5 uppercase">Quality Deliverance</h2>
                        <p className="text-base text-justify align-middle">We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel