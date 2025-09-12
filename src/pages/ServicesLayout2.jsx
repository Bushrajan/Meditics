
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { services } from "../services";

const specialties = [
  "DERMATOLOGY",
  "ORTHOPEDICS",
  "NEUROLOGY",
  "CARDIOLOGY",
  "PEDIATRICS",
  "UROLOGY",
];


const ServicesLayout2 = () => {

  motion
  return (
    <div>
      <Header2 />

      {/* Hero Section */}
      <div className='bg-[#0B2447] py-20 relative overflow-hidden'>
        <span className="absolute top-[10px] left-[0px] scroll-right">
          <img src="https://meditics.temptics.com/assets/img/breadcrumb-vector.svg" alt="+" className="" />
        </span>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='heading-h1 lg:text-6xl text-center md:text-4xl text-4xl text-white'
        >Services
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/">Home</Link>
          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>Services</small></span>
        </div>
      </div>

      <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mb-15 mt-16 bg-white mx-auto p-3">
        {services.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group lg:w-[350px] md:w-[350px] w-[320px]  bg-[#F2F2F2] mb-5 overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 text-center lg:text-left"
          >
            {/* Image */}
            <img src={card.img} alt={card.title} className="w-full h-56 object-cover" />

            <div className="-mt-6 flex justify-between md:px-8 px-5 lg:items-start items-center gap-2">
              <div className="bg-[white] p-3 rounded-full">
                <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g id="MEDICAL1">
                    <path fill="#0D6DFD" d="m155.69 142.29 6.39-6.39 157.69 157.7a16.05 16.05 0 0 0 22.69 0l80.81-80.82a16 16 0 0 0 0-22.69l-157.69-157.69 6.42-6.4a15.24 15.24 0 1 0 -21.59-21.54l-25.41 25.38-14.5-14.51a23.87 23.87 0 0 0 -33.74 0l-31.76 31.79a23.84 23.84 0 0 0 0 33.73l14.5 14.51-25.37 25.37a15.24 15.24 0 0 0 21.55 21.56z"></path>
                    <path fill="#0D6DFD" d="m410.07 427.71h-39.75l-40.56-70.26c-32.78-56.78-114.74-56.78-147.52 0l-40.56 70.26h-39.75a52 52 0 0 0 -52 52 26.5 26.5 0 0 0 12.18 22.32s34.78 9.97 193.89 9.97 194.4-10.27 194.4-10.27a26.52 26.52 0 0 0 11.69-22 52 52 0 0 0 -52.02-52.02zm-154.07 9.96a38.3 38.3 0 1 1 38.31-38.3 38.3 38.3 0 0 1 -38.31 38.3z"></path>
                    <path fill="#0D6DFD" d="m381.65 411.82h66.18a12.92 12.92 0 1 0 0-25.84h-81z"></path>
                    <path fill="#0D6DFD" d="m166.65 348.45c1.34-2.32 2.77-4.57 4.26-6.75a105 105 0 0 1 35.19-136.32l-44.1-44.14a161.75 161.75 0 0 0 -26 240.39z"></path>
                    <path fill="#0D6DFD" d="m369.5 305.35a23.87 23.87 0 0 0 33.74 0l31.76-31.79a23.84 23.84 0 0 0 0-33.73l-6.67-6.67-65.52 65.52z"></path>
                  </g>
                </svg>
              </div>

              <div className="group">
                <button
                  className="inline-flex items-center justify-center bg-[#0D6DFD] text-white px-2 py-2 rounded transition-all duration-300 overflow-hidden w-[35px] h-[37px] mt-1 group-hover:w-[150px] group-hover:bg-[#041C33]"
                >
                  {/* Read More + Hover SVG (hidden initially) */}
                  <span className="whitespace-nowrap items-center gap-2 opacity-0 group-hover:flex hidden -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm text-[#DBE9A1] mr-2">
                    <Link to={`/services/${card.id}`}>
                      Read More</Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rotate text-[#DBE9A1] transition-colors duration-300 "
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" />
                    </svg>
                  </span>


                  {/* Initial SVG (visible before hover, hidden on hover) */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rotate text-white transition-colors duration-300 group-hover:hidden"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0" />
                    </svg>
                  </span>
                </button>
              </div>

            </div>

            {/* Content */}
            <div className="lg:p-6 px-4 py-4 space-y-3">
              <h3 className="text-xl font-medium text-[#041C33] group-hover:text-[#0D6DFD] transition-colors duration-300">
                <Link to="#!">{card.title}</Link>
              </h3>
              <p><small>{card.para}</small></p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full bg-[#dbe9a1] py-6 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="px-6"
        >
          {specialties.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto flex items-center justify-center"
            >
              <div className="w-full max-w-[160px] px-4 py-2 text-center text-[#041C33] font-bold text-xl md:text-3xl flex items-center justify-center gap-3 ">
                <span className="text-[#0F0D1D]">✚</span>
                <span className="text-[#0F0D1D]">{item}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer2 />
    </div>
  );
};

export default ServicesLayout2;