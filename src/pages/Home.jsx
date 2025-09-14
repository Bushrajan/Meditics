'use client';
import Header from '../components/Header'
import { useRef, useState } from 'react';
import { BiSolidHeart } from "react-icons/bi";
import { motion } from 'framer-motion';
import Footer from '../components/Footer'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';;
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AnimatedSelect from "../components/AnimatedSelect"

const Home = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const card = [
    {
      title: 'The Medical Minute Quick Tips for Better Living',
      img: 'https://meditics.temptics.com/assets/img/blog-2.jpg',
    },
    {
      title: 'Medical AssistantHealthy Habits for Busy Professionals',
      img: 'https://meditics.temptics.com/assets/img/blog-1.jpg',
    },
    {
      title: 'Ask the Doctor Real Answers, Real Care',
      img: 'https://meditics.temptics.com/assets/img/blog-3.jpg',
    },

  ];

  const profiles = [
    {
      name: 'Kathryn Murphy',
      title: 'Medical Assistant',
      text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est et bis porta pretium metus aliquam eget malesuada porta is nunc viverra Aenean pulvinar maximus leo.',
      img: 'https://meditics.temptics.com/assets/img/reviewer-1.jpg', // Replace with actual image path
    },
    {
      name: 'Kathryn Murphy',
      title: 'Medical Assistant',
      text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est et bis porta pretium metus aliquam eget malesuada porta is nunc viverra Aenean pulvinar maximus leo.',
      img: 'https://meditics.temptics.com/assets/img/reviewer-1.jpg',
    },
    {
      name: 'Kathryn Murphy',
      title: 'Medical Assistant',
      text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est et bis porta pretium metus aliquam eget malesuada porta is nunc viverra Aenean pulvinar maximus leo.',
      img: 'https://meditics.temptics.com/assets/img/reviewer-1.jpg',
    },
    {
      name: 'Kathryn Murphy',
      title: 'Medical Assistant',
      text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est et bis porta pretium metus aliquam eget malesuada porta is nunc viverra Aenean pulvinar maximus leo.',
      img: 'https://meditics.temptics.com/assets/img/reviewer-1.jpg',
    },
    {
      name: 'Kathryn Murphy',
      title: 'Medical Assistant',
      text: 'Consectetur adipiscing elit. Integer nunc viverra laoreet est et bis porta pretium metus aliquam eget malesuada porta is nunc viverra Aenean pulvinar maximus leo.',
      img: 'https://meditics.temptics.com/assets/img/reviewer-1.jpg',
    }
  ];

  motion
  return (
    <div className=" min-h-screen relative overflow-hidden">

      {/* Hero section */}
      <div className='bg-[#041C33] text-white'>
        <span className='absolute top-0' data-aos="fade-right">
          <img src="https://meditics.temptics.com/assets/img/banner-vector-1.svg" alt="img" className='img-fluid' />
        </span>

        <Header />

        <div className="mb-10 lg:mb-15 lg:pt-18 pt-10 md:mb-15">
          <div className="container px-1  mx-auto overflow-hidden text-gray-600 body-font">
            <div className="flex flex-wrap items-center justify-center mx-auto max-w-7xl lg:justify-start rounded-2xl">

              {/* Left Content */}
              <div data-aos="fade-up" className="w-full mb-6  lg:text-left text-center lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0 py-5 lg:p-5">

                <button className='text-[#DBE9A1] lg:mx-0 mx-auto border border-[#DBE9A1] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300" '> <BiSolidHeart color='#DBE9A1' /> HI I AM</button>

                <h1 className='heading-h1 lg:text-6xl md:text-4xl text-3xl mt-2'>
                  Meet Dr. Tushar Raja
                  <br />— Your Trusted <br />
                  Healthcare Partner
                </h1>
                <p className='mb-4' style={{ fontSize: "13px " }}>Dr. Tushar is a highly experienced and compassionate [Specialization, e.g., General Physician / Cardiologist / Dermatologist] dedicated.</p>

                <div className='flex flex-wrap gap-5 lg:justify-start justify-center  mt-12'>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="group flex items-center gap-3 text-sm bg-[#0D6DFD] hover:bg-[#DBE9A1] text-white hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
                  >
                    BOOK AN APPOINTMENT

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                      />
                    </svg>
                  </motion.button>


                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="group flex gap-3 items-center text-sm text-white border border-white hover:bg-white hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
                  >
                    VIEW SCHEDULE

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                      />
                    </svg>
                  </motion.button>
                </div>


                {/* vector imgs */}
                <img
                  alt="ecommerce"
                  className="absolute top-[350px] right-0 z-3 w-[800px] lg:h-[350px] md:h-[300px]"
                  src="https://meditics.temptics.com/assets/img/banner-vector-3.svg"
                />

                <img
                  alt="ecommerce"
                  className="absolute lg:top-[620px] right-0 z-3 w-[100px] lg:h-[250px] md:top-[790px] md:h-[200px] "
                  src="https://meditics.temptics.com/assets/img/banner-vector-4.svg"
                />
              </div>


              {/* fa icon */}
              <div data-aos="fade-up" data-aos-duration="1800" className="bg-[#0D6DFD]   absolute border-radius -right-[5px] lg:top-[250px] md:top-[250px]  text-white text-xl">

                <div className="hover:bg-[#DBE9A1] text-white hover:text-[#0C243A]  px-3 py-5  border-radius2 transition-colors duration-300">
                  <FaFacebookF />
                </div>

                <div className="hover:bg-[#DBE9A1] text-white hover:text-[#0C243A]  px-3 py-3  transition-colors duration-300">
                  <FaTwitter />
                </div>

                <div className="hover:bg-[#DBE9A1] text-white hover:text-[#0C243A]  px-3 py-3  transition-colors duration-300">
                  <FaYoutube />
                </div>


                <div className="hover:bg-[#DBE9A1] text-white hover:text-[#0C243A]  px-3 py-5  border-radius3  transition-colors duration-300">
                  <FaInstagram />
                </div>

              </div>


              {/* Right Content */}
              <div className='relative'>

                {/* ya spin hoti rahay gi */}
                <span className='absolute  md:top-[10px] top-[20px] md:left-[0px] left-[10px]'>
                  <img
                    src="https://meditics.temptics.com/assets/img/banner-vector-2.svg"
                    alt="img"
                    className='animate-rotatePulse w-[50px]'
                    data-aos="fade-up" data-aos-duration="1500"
                  />
                </span>


                {/* Right side */}
                <div className='relative ' data-aos="fade-up" data-aos-duration="1500" >

                  {/* slider */}
                  <div className="absolute rounded-xl z-10 lg:top-[0px] w-[310px] h-[200px] lg:-mr-60 md:-mr-35  right-[0px] bottom-0 " >
                    <Swiper
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                      className="default-carousel"
                    >

                      <SwiperSlide>
                        <div className="  rounded-2xl w-full flex justify-center items-center">
                          <div className="lg:bg-[#23384C] relative bg-white lg:text-white text-black rounded-2xl p-4 ">
                            <p className="italic text-lg" style={{ fontSize: "15px" }}>
                              "My mission is to treat every patient with care, respect, and the
                              highest standard of medical knowledge"
                            </p>
                            <span className="block mt-4  text-sm text-[#DBE9A1] font-semibold" style={{ fontSize: "13px" }}>
                              — Robel Roy .USY
                            </span>
                            <span className=''>
                              <img src="./comma.png" alt="comma" className='hidden lg:block w-[100px] absolute -bottom-[10px] right-0' />
                              <img src="./comma2.png" alt="comma" className='lg:hidden w-[100px] absolute -bottom-[0px] right-0 px-5' />
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="  rounded-2xl w-full flex justify-center items-center">
                          <div className="lg:bg-[#23384C] relative  bg-white lg:text-white text-black rounded-2xl p-4 ">
                            <p className="italic text-lg" style={{ fontSize: "15px" }}>
                              "My mission is to treat every patient with care, respect, and the
                              highest standard of medical knowledge"
                            </p>
                            <span className="block mt-4  text-sm text-[#DBE9A1] font-semibold" style={{ fontSize: "13px" }}>
                              — Robel Roy .USY
                            </span>
                            <span className=''>
                              <img src="./comma.png" alt="comma" className='hidden lg:block w-[100px] absolute -bottom-[10px] right-0' />
                              <img src="./comma2.png" alt="comma" className='lg:hidden w-[100px] absolute -bottom-[0px] right-0 px-5' />
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>

                    </Swiper>

                  </div>


                  {/* backper */}
                  <div className='absolute md:top-[135px] sm:top-[130px] top-[150px] md:mt-0 left-[15px] mt-5 lg:left-0 md:left-0 sm:left-0 z-0  md:w-[450px] items-center  md:h-[550px]  '>
                    {/* Background image */}

                    <span className="">
                      <img src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" alt="img" className='lg:w-[450px]  sm:w-[590px] w-[320px] sm:h-[400px] md:h-[500px] h-[300px]  ' />
                    </span>
                    <span className="pulse-ring">
                      <img src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" alt="img" className='lg:w-[450px]  sm:w-[590px] w-[320px] sm:h-[400px] md:h-[500px] h-[300px] ' />
                    </span>
                    <span className="pulse-ring">
                      <img src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" alt="img" className='lg:w-[450px]  sm:w-[590px] w-[320px] sm:h-[400px] md:h-[500px] h-[300px] ' />
                    </span>
                    <span className="pulse-ring">
                      <img src="https://meditics.temptics.com/assets/img/banner-vector-2.svg" alt="img" className='lg:w-[450px]  sm:w-[590px] w-[320px] sm:h-[400px] md:h-[500px] h-[300px] ' />
                    </span>
                  </div>

                  {/* overlay yani front per aai gi */}
                  <img alt="ecommerce"
                    className="relative z-5 lg:w-[430px] md:w-[420px] md:h-[580px] lg:h-[600px] h-[500px] " src="https://meditics.temptics.com/assets/img/banner-img.png"
                  />
                </div>

              </div>
            </div>
          </div>
        </div >
      </div>


      {/* My Journey in Medicine */}
      <main className="max-w-7xl mx-auto lg:my-15 mt-7 p-2 flex flex-col md:flex-row items-center justify-center md:p-6 gap-6">

        {/* Left: Schedule Section */}
        <section className="bg-[#112B58] relative  text-white text-center rounded-xl shadow-md w-full md:w-[350px]" data-aos="fade-up" data-aos-duration="1500" >
          <span className='absolute top-[0] left-[0px]' data-aos="fade-right">
            <img src="https://meditics.temptics.com/assets/img/banner-vector-1.svg" alt="img" className='z-50 lg:w-[150px]' />
          </span>

          <h2 className="text-xl font-semibold pt-8 mb-4">Time For Meet</h2>
          <ul className="space-y-2  ">
            <li className='py-2 mt-2 overflow-hidden '>
              <hr className='w-75 mx-auto border border-l-0 border-r-0 border-b-0 pt-3 border-t-gray-600' />Monday - Friday   </li>
            <li className=''>9:00 PM - 6:00 PM  </li>
            <li className='py-3 mt-2 overflow-hidden '>
              <hr className='w-75 mx-auto border border-l-0 border-r-0 border-b-0 pt-3 border-t-gray-300' style={{ borderTop: '1px dashed #4B5563' }} />Saturday - Sunday   </li>
            <li className=''>9:00 PM - 6:00 PM  </li>
            <li className='py-7 mt-3  rounded-b-xl bg-[#0D6DFD]  '> For Emergency Care
              <br /> <span><small className='font-stretch-100%'> +208-6666-0112</small></span>
            </li>
          </ul>
        </section>

        {/* Right Section */}
        <section className=" relative lg:px-8 py-2 w-full md:w-2/3 " >
          <span className='absolute top-[60px] right-0 lg:-right-[150px] md:right-0' data-aos="fade-right">
            <img src="https://meditics.temptics.com/assets/img/about-vector.svg" alt="img" className='lg:h-[400px] md:h-[250px]' />
          </span>

          <button className='text-[#0D6DFD] lg:mx-0 mx-auto border border-[#0D6DFD] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300"' data-aos="fade-up" data-aos-duration="1500" > <BiSolidHeart color='#0D6DFD' /> About Me</button>

          <h2 className='text-black font-bold mt-3 heading-h2 md:text-5xl text-2xl mb-4' data-aos="fade-up" data-aos-duration="1700" >
            My Journey in Medicine
          </h2>
          <p className='mb-4  w-full text-gray-500' data-aos="fade-up" data-aos-duration="1800" style={{ fontSize: "14px " }}>
            I'm Dr. Tushar Raja a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care. With over 12 years of experience, I’ve had the privilege of treating thousands of patients with empathy, accuracy, and dedication.
            <br /><br />
            I strongly believe that medicine is not just about treating diseases, but about understanding people, building trust, and guiding them toward long-term wellness.
          </p>

          <div className='flex flex-wrap  lg:justify-start lg:items-center justify-center items-center gap-1' data-aos="fade-up" data-aos-duration="1500" >
            <span className='flex justify-center bg-[#0D6DFD] w-[15px] h-[15px] rounded-xl'><img src="/rightarrow.png" alt="rightarrow" className='' /></span><span className='font-light' >Doctor's Motto or Belief: </span>
            <span><small>  Healing begins with listening. </small></span>
          </div>

          <div className="flex flex-wrap lg:justify-start lg:items-center justify-center items-center gap-5 mt-9" data-aos="fade-up" data-aos-duration="1500" >
            {/* SEND MESSAGE Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group flex gap-3 items-center text-sm bg-[#0D6DFD] px-1 hover:bg-black text-white hover:text-white md:px-3 py-3 rounded transition-colors duration-300"
            >
              SEND MESSAGE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-white group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </motion.button>

            {/* VIDEO CALL Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group flex gap-3 items-center text-sm text-black border px-1 border-black hover:bg-black hover:text-white md:px-5 py-3 rounded transition-colors duration-300"
            >
              VIDEO CALL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-black group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </motion.button>
          </div>

        </section>

      </main>


      {/* Medical Services I Provide */}
      <main className="md:py-30 bg-[#F2F2F2] md:p-6 py-15 p-2 space-y-10 relative">
        <span className='absolute lg:top-[0px] lg:-left-[10px]' data-aos="fade-right">
          <img src="https://meditics.temptics.com/assets/img/service-vector-1.svg" alt="img" className='md:w-[200px] md:h-[400px]' />
        </span>

        <div className='max-w-7xl mx-auto relative text-center'>
          <div className='max-w-7xl mx-auto'>
            <button className='text-[#0D6DFD] mx-auto border border-[#0D6DFD] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300"' data-aos="fade-up" data-aos-duration="1500"  > <BiSolidHeart color='#0D6DFD' /> Services I Provide <BiSolidHeart color='#0D6DFD' /></button>
          </div>

          <h2 className='text-black font-bold mt-3 heading-h2 md:text-5xl text-2xl' data-aos="fade-up" data-aos-duration="1800" >
            Medical Services I Provide
          </h2>
        </div>

        <section className="lg:max-w-5xl mx-auto px-5 justify-center items-center flex lg:flex-row flex-wrap  lg:gap-4 gap-6 ">

          <span className='absolute lg:top-[150px] lg:right-[20px]' data-aos="fade-right">
            <img src="https://meditics.temptics.com/assets/img/service-vector-2.svg" alt="img" className='md:w-[200px] md:h-[150px]' />
          </span>

          {/* Static Card */}
          <div data-aos="fade-up" data-aos-duration="100" className="group z-50  md:w-[310px] md:h-[300px] sm:w-[500px] w-[300px]  h-full md:p-8 bg-white rounded-xl  p-4 border border-transparent hover:border-[#0D6DFD] transition duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded bg-gray-100 group-hover:bg-[#0D6DFD] transition duration-300">
              <div className="text-[#0D6DFD] group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="38"
                  width="32"
                  viewBox="0 0 64 64"
                  className="w-8 h-8 fill-current"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="m15 2c-4.4183 0-8 3.58172-8 8v44c0 4.4183 3.5817 8 8 8h34c4.4183 0 8-3.5817 8-8v-44c0-4.41828-3.5817-8-8-8zm30 16c0 1.1046-.8954 2-2 2h-8c-1.1046 0-2-.8954-2-2s.8954-2 2-2h8c1.1046 0 2 .8954 2 2zm-17 7c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-2v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2h2v2c0 1.1046.8954 2 2 2s2-.8954 2-2v-2zm15 4c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-8c-1.1046 0-2 .8954-2 2s.8954 2 2 2zm2 7c0 1.1046-.8954 2-2 2h-22c-1.1046 0-2-.8954-2-2s.8954-2 2-2h22c1.1046 0 2 .8954 2 2zm-2 11c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-22c-1.1046 0-2 .8954-2 2s.8954 2 2 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-black">
              General Health Check-Ups
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">
              <small>
                Regular health check-ups help detect potential issues early, ensuring timely treatment and better outcomes.
              </small>
            </p>

            {/* Link */}
            <a
              href="#"
              className="mt-5 flex gap-2 items-center text-black group-hover:text-[#0D6DFD] font-medium transition duration-300"
            >
              <small>READ MORE</small> <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-black group-hover:text-[#0D6DFD]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </a>
          </div>

          {/* Static Card */}
          <div data-aos="fade-up" data-aos-duration="1200" className="group   lg:w-[310px] lg:h-[330px] md:w-[310px] md:h-[300px] sm:w-[500px] w-[300px]  h-full md:p-8 bg-white rounded-xl  p-4 border border-transparent hover:border-[#0D6DFD] transition duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded bg-gray-100 group-hover:bg-[#0D6DFD] transition duration-300">
              <div className="text-[#0D6DFD] group-hover:text-white transition duration-300">
                <svg clipRule="evenodd" className='fill-current' fill="#0D6DFD" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 510 510" width="37" height="39" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="m247.656 426.38-66.246-22.15v-85.539l-40.484 42.341-67.328 25.739c-6.9 2.279-14.462 1.303-20.558-2.653-6.096-3.955-10.069-10.463-10.8-17.693l-.125-1.233c-1.097-10.852 5.272-21.077 15.496-24.877l68.193-28.649 53.777-58.242c11.807-11.807 25.825-10.611 41.038-10.611h68.762c15.213 0 29.231-1.196 41.038 10.611l53.777 58.242 68.193 28.649c10.224 3.8 16.593 14.025 15.496 24.877l-.125 1.233c-.731 7.23-4.704 13.738-10.8 17.693-6.096 3.956-13.658 4.932-20.558 2.653l-67.328-25.739-40.484-42.341v80.628zm7.344-311.561c27.892 0 50.537 22.645 50.537 50.537s-22.645 50.537-50.537 50.537-50.537-22.645-50.537-50.537 22.645-50.537 50.537-50.537zm-46.035 367.816c1.023 3.817 2.525 7.387 4.426 10.657l-88.393-18.004c-8.89-2.382-16.47-8.198-21.072-16.169s-5.849-17.444-3.467-26.334 8.199-16.471 16.169-21.073c7.971-4.602 17.444-5.849 26.334-3.467l82.584 27.613c-14.34 10.354-21.399 28.796-16.601 46.7v.002c.007.025.014.05.02.075zm185.889-49.85c2.382 8.89 1.135 18.363-3.467 26.334s-12.182 13.787-21.072 16.169l-113.954 23.211c-14.246 2.738-28.186-5.993-31.941-20.005l-.02-.077c-3.755-14.012 3.953-28.544 17.658-33.295l110.293-36.877c8.89-2.382 18.363-1.135 26.334 3.467 7.97 4.602 13.787 12.183 16.169 21.073zm-131.829-378.955c0 4.415-3.585 8-8 8-4.416 0-8-3.585-8-8v-34.83c0-4.415 3.584-8 8-8 4.415 0 8 3.585 8 8zm-112.595 25.881c2.205 3.825.889 8.721-2.936 10.926-3.826 2.205-8.721.889-10.926-2.936l-17.39-30.173c-2.205-3.826-.89-8.722 2.936-10.926 3.825-2.205 8.721-.889 10.926 2.936zm-84.528 78.719c3.822 2.209 5.132 7.107 2.923 10.929-2.21 3.823-7.107 5.133-10.93 2.923l-30.173-17.44c-3.823-2.209-5.132-7.107-2.923-10.929 2.21-3.823 7.107-5.133 10.93-2.923zm307.525-70.721c-2.209 3.823-7.107 5.133-10.929 2.923-3.823-2.209-5.133-7.107-2.923-10.93l17.44-30.173c2.209-3.822 7.106-5.132 10.929-2.922 3.823 2.209 5.133 7.107 2.923 10.929zm78.732 84.57c-3.821 2.213-8.719.906-10.931-2.915-2.213-3.821-.906-8.719 2.915-10.932l30.123-17.439c3.821-2.213 8.72-.906 10.932 2.915s.906 8.719-2.915 10.931z"></path>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-black">
              Stress & Lifestyle Counseling
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">
              <small>
                Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle.</small>
            </p>

            {/* Link */}
            <a
              href="#"
              className="mt-5 flex gap-2 items-center text-black group-hover:text-[#0D6DFD] font-medium transition duration-300" >
              <small>READ MORE</small> <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-black group-hover:text-[#0D6DFD]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </a>
          </div>

          {/* Static Card */}
          <div data-aos="fade-up" data-aos-duration="1500" className="group  md:w-[310px]  md:h-[300px] sm:w-[500px] w-[300px] h-full md:p-8 bg-white  rounded-xl  p-4 border border-transparent hover:border-[#0D6DFD] transition duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded bg-gray-100 group-hover:bg-[#0D6DFD] transition duration-300">
              <div className="text-[#0D6DFD] group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="39"
                  width="35"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-current"
                >
                  <g>
                    <path fill="currentColor" d="m8.7 9.2c.5 2 2.3 3.5 4.5 3.5 2.1 0 4-1.5 4.5-3.5.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.7-1.3-3-3-3h-3.2c-1.7 0-3 1.3-3 3v1.9c-.7.4-1 .9-1 1.6s.4 1.3 1 1.5z"></path>
                    <path fill="currentColor" d="m7.1 24.6h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.2-1.6-5.3-4.8-6.2l-.6-1.2c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.4-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.1.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5z"></path>
                    <path fill="currentColor" d="m32.7 9.2c.5 2 2.3 3.5 4.5 3.5 2.1 0 4-1.5 4.5-3.5.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.7-1.3-3-3-3h-3.2c-1.6 0-3 1.3-3 3v1.9c-.6.3-1 .9-1 1.5-.1.8.3 1.4 1 1.6z"></path>
                    <path fill="currentColor" d="m41.2 12.6c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.4-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.2.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.2-1.6-5.3-4.8-6.2z"></path>
                    <path fill="currentColor" d="m29.8 37.9-.6-1.2c-.1-.2-.3-.3-.5-.4-.2 0-.5 0-.6.2l-2.9 2.5-2.9-2.4c-.2-.1-.4-.2-.6-.2s-.4.2-.5.4l-.6 1.2c-3.2.9-4.8 3-4.8 6.2 0 .7.1 1.4.2 2.1.3 1.5 1.6 2.5 3.1 2.5h12.2c1.5 0 2.8-1 3.1-2.5.1-.7.2-1.5.2-2.1 0-3.3-1.6-5.4-4.8-6.3z"></path>
                    <path fill="currentColor" d="m20.6 28.3v1.9c-.5.3-.9.8-.9 1.5s.4 1.3 1.1 1.6c.5 2 2.3 3.5 4.5 3.5s4-1.5 4.5-3.5c.6-.2 1.1-.9 1.1-1.6s-.4-1.2-.9-1.5v-1.9c0-1.6-1.3-3-3-3h-3.2c-1.9.1-3.2 1.4-3.2 3z"></path>
                    <path fill="currentColor" d="m6.3 26.1c0-.4-.4-.7-.8-.7s-.7.4-.7.8c.4 6.3 3.7 12.2 9 15.8.1.1.3.1.4.1.2 0 .5-.1.6-.3.2-.3.1-.8-.2-1-4.8-3.4-7.9-8.9-8.3-14.7z"></path>
                    <path fill="currentColor" d="m44.8 26.2c-.4-.1-.8.3-.8.7-.5 5.2-3.2 10-7.4 13.2-.3.2-.4.7-.1 1.1.1.2.4.3.6.3s.3 0 .5-.2c4.5-3.4 7.4-8.6 8-14.2-.1-.5-.4-.9-.8-.9z"></path>
                    <path fill="currentColor" d="m20.1 6.8c3.3-.9 6.9-.9 10.2 0h.2c.3 0 .6-.2.7-.5.1-.4-.1-.8-.5-.9-3.6-1-7.4-1-11 0-.4.1-.6.5-.5.9s.5.6.9.5z"></path>
                    <path fill="currentColor" d="m28.7 8.7h.2c.3 0 .7-.2.7-.6.1-.4-.2-.8-.6-.9-2-.4-4.2-.5-6.3-.2-.4.1-.7.4-.7.8s.4.7.8.6c2-.2 4-.1 5.9.3z"></path>
                    <path fill="currentColor" d="m22.5 4.1c2.1-.3 4.3-.2 6.4.2h.1c.4 0 .7-.3.7-.6.1-.4-.2-.8-.6-.9-2.3-.4-4.6-.5-6.9-.2-.4.1-.7.4-.6.8.1.5.5.8.9.7z"></path>
                    <path fill="currentColor" d="m4.6 29.6c-.1-.4-.5-.7-.9-.6s-.7.5-.6.9c.8 3.4 2.4 6.7 4.6 9.4.1.2.4.3.6.3s.3-.1.5-.2c.3-.3.4-.7.1-1.1-2.1-2.4-3.5-5.5-4.3-8.7z"></path>
                    <path fill="currentColor" d="m8.2 28.9c-.4.1-.6.5-.5.9.7 2.6 2 4.9 3.7 7 .1.2.4.3.6.3s.3-.1.5-.2c.3-.3.4-.7.1-1.1-1.6-1.9-2.8-4-3.4-6.4-.2-.4-.6-.6-1-.5z"></path>
                    <path fill="currentColor" d="m46.3 30.4c-.4-.1-.8.1-.9.5-.9 3.2-2.7 6.3-5.1 8.7-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2c2.5-2.6 4.4-5.9 5.4-9.3.2-.5 0-.9-.4-1z"></path>
                    <path fill="currentColor" d="m41.3 29.3c-.6 2.4-1.8 4.5-3.4 6.4-.3.3-.2.8.1 1.1.1.1.3.2.5.2s.4-.1.6-.3c1.7-2.1 3-4.4 3.7-7 .1-.4-.1-.8-.5-.9-.5-.1-.9.1-1 .5z"></path>
                  </g>
                </svg>

              </div>
            </div>
            {/*

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-black">
              Referral to Specialists   </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">
              <small> Accurate assessments and referrals to trusted medical specialists to receive expert care. </small>
            </p>

            {/* Link */}
            <a
              href="#"
              className="mt-5 flex gap-2 items-center text-black group-hover:text-[#0D6DFD] font-medium transition duration-300"
            >
              <small>READ MORE</small> <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-black group-hover:text-[#0D6DFD]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </a>
          </div>

        </section>
      </main>


      {/* Do you have a problem section */}
      <div className=' md:py-15 py-5 bg-[#10283E]'>
        <div className='max-w-6xl bg-[#10283E]  px-1 m-auto'>
          {/* Left Content */}
          <div className="w-full flex lg:flex-row flex-col gap-5  lg:justify-between md:justify-center items-center mb-6  lg:text-left text-center py-5 lg:p-5" >
            <div data-aos="fade-up" data-aos-duration="1900">
              <button className='text-[#DBE9A1] lg:mx-0 mx-auto border border-[#DBE9A1] flex items-center gap-2 mb-2 px-4 py-1  rounded-full font-semibold transition-colors duration-300" '> <BiSolidHeart color='#DBE9A1' /> Do You Need Emergency Care</button>

              <h3 className='heading-h1  text-4xl' data-aos="fade-up" data-aos-duration="1900">
                Do You Have Health Problems
              </h3>
            </div>
            <motion.button data-aos="fade-up" data-aos-duration="1900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group flex items-center gap-3 text-sm bg-[#0D6DFD] hover:bg-[#DBE9A1] text-white hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
            >
              I NEED HELP

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </motion.button>

          </div>
          <hr className='border-b border-b-gray-500' />

          <Swiper data-aos="fade-up" data-aos-duration="1900"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            spaceBetween={10}
            breakpoints={{
              1920: { slidesPerView: 5, spaceBetween: 10 }, // lg+
              1024: { slidesPerView: 5, spaceBetween: 10 }, // lg
              768: { slidesPerView: 4, spaceBetween: 8 },   // md
              640: { slidesPerView: 3, spaceBetween: 6 },   // sm
              0: { slidesPerView: 2, spaceBetween: 4 },   // xs
            }}
            className="centered-slide-carousel"
          >
            {[...Array(9)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-[150px] mt-5 flex justify-center items-center">
                  <img
                    src="https://meditics.temptics.com/assets/img/client-logo.svg"
                    alt="client-logo"
                    className="transition-all w-[150px] h-[100px] duration-500 grayscale scale-90 hover:grayscale-0 hover:scale-100"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>


      {/* My Qualification & Awards */}
      <div className='relative lg:py-15 '>
        <span className='absolute bottom-[0px] right-0 lg:left-[0px] md:right-0' data-aos="fade-right">
          <img src="https://meditics.temptics.com/assets/img/qualification-vector-1.svg" alt="img" className='lg:h-[400px] md:h-[250px]' />
        </span>
        <span className='absolute top-[60px] right-0 lg:right-[0px] md:right-0' data-aos="fade-right">
          <img src="https://meditics.temptics.com/assets/img/service-vector-2.svg" alt="img" className='lg:h-[400px] md:h-[250px]' />
        </span>

        <section className="max-w-7xl mx-auto bg-white py-10 px-4 md:px-8 lg:px-16">
          <div className='text-center relative'>

            <button data-aos="fade-up" data-aos-duration="1500" className='text-[#0D6DFD] mx-auto border border-[#0D6DFD] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300" '> <BiSolidHeart color='#0D6DFD' />My Qualification</button>

            <h2 className='text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4' data-aos="fade-up" data-aos-duration="1000" >
              My Qualification & Awards
            </h2>
          </div>

          {/* <!-- Education Section --> */}
          <div className=" max-w-5xl mx-auto">
            <div className="space-y-4 flex flex-wrap justify-center items-center gap-1">
              {/* <!-- Repeat this block for each degree --> */}

              <div className='lg:mb-5 lg:w-[49%] w-full md:py-1 mx-auto'>
                <div className="border mb-4 border-gray-200  bg-[#F2F2F2] rounded-xl p-4  flex mx-auto justify-between gap-5 hover:shadow-md transition" data-aos="fade-up" data-aos-duration="1500" >
                  <p className="text-sm text-gray-600">Oxford University <br /><small> Jan 2014 – Dec 2018</small> </p>
                  <h3 className=" font-semibold text-black">Bachelor of Medicine & Bachelor of <br /> Surgery (MBBS)</h3>
                </div>
                <div className="border mb-1 border-gray-200 bg-[#F2F2F2] rounded-xl p-4  flex mx-auto justify-between gap-5 hover:shadow-md transition" data-aos="fade-up" data-aos-duration="1900" >
                  <p className="text-sm text-gray-900">Oxford University <br /><small> Jan 2014 – Dec 2018</small> </p>
                  <h3 className=" font-semibold text-black">Bachelor of Medicine & Bachelor of <br /> Surgery (MBBS)</h3>
                </div>
              </div>

              <div className='mb-5 lg:w-[49%] w-full md:py-1 mx-auto'>
                <div className="border mb-4 border-gray-200  bg-[#F2F2F2] rounded-xl p-4  flex mx-auto justify-between gap-5 hover:shadow-md transition" data-aos="fade-up" data-aos-duration="1800" >
                  <p className="text-sm text-gray-900">Oxford University <br /><small> Jan 2014 – Dec 2018</small> </p>
                  <h3 className=" font-semibold text-black">Bachelor of Medicine & Bachelor of <br /> Surgery (MBBS)</h3>
                </div>
                <div className="border mb-1 border-gray-200 bg-[#F2F2F2] rounded-xl p-4  flex mx-auto justify-between gap-5 hover:shadow-md transition" data-aos="fade-up" data-aos-duration="1900" >
                  <p className="text-sm text-gray-900">Oxford University <br /><small> Jan 2014 – Dec 2018</small> </p>
                  <h3 className=" font-semibold text-black">Bachelor of Medicine & Bachelor of <br /> Surgery (MBBS)</h3>
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Awards Section --> */}
          <div className='max-w-6xl mx-auto mt-15 justify-center flex lg:flex-row   flex-col  ' data-aos="fade-up" data-aos-duration="1900">
            <div className="flex  lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl justify-center flex-wrap lg:gap-10 gap-5 px-5 py-5 items-center bg-gray-100" >
              {/* <!-- Award Icons --> */}
              <div className="w-[100px]  rounded-full  items-center justify-center  ">
                <img src="https://meditics.temptics.com/assets/img/award-1.svg" alt="Award 1" className="w-[80px] h-[80px] " />
              </div>
              <div className="w-[100px] rounded-full flex items-center justify-center ">
                <img src="https://meditics.temptics.com/assets/img/award-2.svg" alt="Award 2" className="w-[80px] h-[80px] " />
              </div>
              <div className="w-[100px] rounded-full flex items-center justify-center ">
                <img src="https://meditics.temptics.com/assets/img/award-3.svg" alt="Award 3" className="w-[80px] h-[80px] " />
              </div>
              <div className="w-[100px] rounded-full flex items-center justify-center ">
                <img src="https://meditics.temptics.com/assets/img/award-4.svg" alt="Award 4" className="w-[80px] h-[80px] " />
              </div>
              <div className="w-[100px] rounded-full flex items-center justify-center ">
                <img src="https://meditics.temptics.com/assets/img/award-5.svg" alt="Award 5" className="w-[80px] h-[80px] " />
              </div>
              <div className="w-[100px] rounded-full flex items-center justify-center ">
                <img src="https://meditics.temptics.com/assets/img/award-6.svg" alt="Award 6" className="w-[80px] h-[80px] " />
              </div>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex gap-3 justify-center items-center text-sm bg-[#0D6DFD] px-1 hover:bg-black text-white hover:text-white md:px-3 py-3 lg:rounded-r-3xl lg:rounded-l-none rounded-b-3xl transition-colors duration-300 uppercase"
            >
              &nbsp; View All Awards

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-white group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </motion.button>
          </div>
        </section>
      </div>


      {/* Clients Feedbacks */}
      <div className='bg-[#F2F2F2] py-20 pt-5 p-5'>

        <section className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-16">
          {/* Header + Buttons */}
          <div className="flex lg:justify-between gap-5 md:flex-wrap flex-col justify-center items-center">
            <div className="lg:text-left text-center relative">
              <button className="text-[#0D6DFD] lg:mx-0 mx-auto border border-[#0D6DFD] flex items-center gap-2 px-4 py-1 rounded-full font-semibold transition-colors duration-300">
                <BiSolidHeart color="#0D6DFD" /> Client's Testimonials
              </button>
              <h2 className="text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4">
                Clients Feedbacks
              </h2>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex  gap-4">
              <motion.button
                onClick={() => swiperRef.current?.slidePrev()}
                className="group flex items-center gap-3 text-sm border-black border hover:bg-[#DBE9A1] text-white hover:text-[#041C33] p-3 rounded-full font-semibold transition-colors duration-300"
              >
                <svg className="rotate2 fill-current stroke-current text-black" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => swiperRef.current?.slideNext()}
                className="group flex items-center gap-3 text-sm border-black border hover:bg-[#DBE9A1] text-white hover:text-[#041C33] p-3 rounded-full font-semibold transition-colors duration-300"
              >
                <svg className="rotate fill-current stroke-current text-black" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            1920: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
          centeredSlides={true}
          className="my-slider gap-5"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="transition-all duration-500" data-aos="fade-up" data-aos-duration="1500">
                <div
                  className={`w-full   gap-5 m-1 mx-auto rounded-xl py-8 px-1 mt-15 relative transition-all duration-500 bg-[#FFFFFF] scale-100 ${activeIndex === index ? 'backdrop-opacity-100' : 'opacity-40'
                    }`}
                >
                  {/* Profile Header */}
                  <div className="w-full -mt-18  ">
                    <div className="relative bg-[#0D6DFD] lg:w-[290px] md:w-[240px] w-[250px] py-1 rounded-full mx-auto flex md:flex-wrap gap-5 justify-center items-center mb-4">
                      <div className="absolute left-0 ps-2">
                        <img
                          src={profile.img}
                          alt={profile.name}
                          className="w-15 h-15 rounded-full object-cover"
                        />
                      </div>
                      <div className="ps-5 pt-2 text-white">
                        <h3 className="lg:text-lg ps-2 font-bold text-left">{profile.name}</h3>
                        <p className="text-sm ps-2 font-medium text-left mb-3">{profile.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Text */}
                  <div className="mt-6 mb-5 mx-auto w-full">
                    <p className="text-1xl lg:px-5 text-center leading-relaxed text-gray-600">
                      {profile.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* YOUR HEALTH, YOUR CONVENIENCE */}
      <section className="bg-[#041C33] text-white px-4 md:px-8 py-13 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* <!-- Left Content --> */}
          <div className="lg:w-1/2  lg:text-left md:text-center text-center space-y-6" >

            <span className="text-[#0D6DFD] flex gap-2 lg:justify-start justify-center text-sm font-medium  uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1500">
              <BiSolidHeart color='#0D6DFD' /> YOUR HEALTH, YOUR CONVENIENCE</span>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1650">Consult Your Doctor Online <br />— Anytime, Anywhere</h2>

            <p className="text-gray-400 text-sm leading-relaxed" data-aos="fade-up" data-aos-duration="1700">
              Say goodbye to long queues and unnecessary travel. With our secure video consultation service, you’ll be able to get experienced doctors from the comfort of your home.
            </p>

            <ul className="text-gray-300 space-y-2 text-sm  list-disc list-inside" data-aos="fade-up" data-aos-duration="1800">

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Speak with certified specialists in real time</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Easy appointment booking via mobile or web</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Private, secure, and confidential video calls</li>

              <li className='flex   lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Available 7 days a week, including evenings</li>
            </ul>

            <div className='flex lg:justify-start justify-center mx-auto'>
              <motion.button data-aos="fade-up" data-aos-duration="1900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group flex items-center mt-6 gap-3 text-sm bg-[#0D6DFD] hover:bg-[#DBE9A1] text-white hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
              >
                Book A Video Call

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* <!-- Right Content: Overlapping Mobile Screens --> */}
          <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0 over" >


            <div className='lg:absolute lg:-bottom-[285px] lg:block hidden'>
              {/* <!-- Front Image --> */}
              <div className="w-full lg:h-[500px]  shadow-xl  z-10 relative" data-aos="fade-up" data-aos-duration="1500">
                <img src="https://meditics.temptics.com/assets/img/video-call-1.png" alt="Dr. Tiffany Rizka" className="w-full h-full object-cover" />
              </div>

              {/* <!-- Back Image --> */}
              <div className="w-full lg:h-[450px] lg:-right-[180px] lg:top-[50px] right-0 shadow-lg   lg:absolute " data-aos="fade-up" data-aos-duration="1800">
                <img src="https://meditics.temptics.com/assets/img/video-call-2.png" alt="Consult Top Doctors" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:hidden md:block   w-full h-full">
              <img src="/side.png" alt="Consult Top Doctors" className="w-full h-full object-cover" />
            </div>

          </div>


        </div>
      </section>


      {/* Your Health, My Words */}
      <div className="relative text-center pt-20 pb-15">
        <span className='absolute top-0 right-0'>
          <img
            src="https://meditics.temptics.com/assets/img/blog-vector.svg"
            alt="Background"
            className="w-[200px] object-cover"
          />
        </span>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://meditics.temptics.com/assets/img/blog-bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>


        <button data-aos="fade-up" data-aos-duration="1500" className='text-[#0D6DFD] mx-auto border border-[#0D6DFD] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300" '> <BiSolidHeart color='#0D6DFD' />Doctor's Blog</button>

        <h2 className='text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4' data-aos="fade-up" data-aos-duration="1000" >
          Your Health, My Words
        </h2>

        <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mt-15 bg-white  mx-auto p-3">
          {card.map((card, index) => (
            <div
              key={index}
              className="card lg:w-[350px] md:w-[350px] w-full bg-[#F2F2F2] mb-5 overflow-hidden rounded-2xl shadow-xl transition hover:shadow-lg text-center lg:text-left" data-aos="fade-up" data-aos-duration="1800"
            >

              <img src={card.img} alt="Event" className="w-full h-56 object-cover" />
              <div className="lg:p-6 px-4 py-4  space-y-3">
                <h3 className="text-xl font-medium hover:text-[#0D6DFD] text-[#041C33]">
                  <a href="#!">
                    {card.title}
                  </a>
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex  items-center gap-1">
                    <HiCalendar color='#B6B7B9' className='w-5 h-5' /> 11 March 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                      <path fill="#B6B7B9" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z" strokeWidth="0.2" stroke="#040000" />
                    </svg> Event
                  </span>
                </div>
              </div>
              <div className='bg-[#041C33] text-center hover:bg-[#0D6DFD]  px-4 py-3'>
                <Link to="/detailblog/:id" className="flex justify-center items-center gap-2 text-white ">
                  <small>READ MORE</small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate fill-current stroke-current text-white group-hover:text-[#041C33]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                    />
                  </svg>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Apply for Appointment */}
      <section className=" relative mx-auto bg-[#F2F2F2] px-4 md:px-8  py-15">
        <span className='absolute top-0 left-0'>
          <img
            src="https://meditics.temptics.com/assets/img/banner-vector-1.svg"
            alt="Background"
            className="w-[180px] object-cover"
            data-aos="fade-right"
          />
        </span>

        <div className="max-w-5xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative">

          {/* Left Side: Heading + Map */}
          <div className="space-y-6">
            <div className='text-center lg:text-left'>
              <button data-aos="fade-up" data-aos-duration="1500" className='text-[#0D6DFD] lg:mx-0 mx-auto border border-[#0D6DFD] flex items-center gap-2  px-4 py-1  rounded-full font-semibold transition-colors duration-300" '> <BiSolidHeart color='#0D6DFD' />Appointment</button>

              <h2 className='text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4' data-aos="fade-up" data-aos-duration="1000" >
                Apply for Appointment
              </h2>
            </div>
            <div className="rounded-xl w-full h-[255px] overflow-hidden shadow-md" data-aos="fade-up" data-aos-duration="1500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667891.0425876975!2d66.2484008727672!3d26.133993294474788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394cc06b6bc1942b%3A0x2e2056a9c78be82d!2sSindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1757516981736!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="  md:p-6 space-y-5 z-10" data-aos="fade-up" data-aos-duration="1500">

            <div className='flex lg:flex-row flex-col gap-5'>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
              />
            </div>

            <div className='flex lg:flex-row flex-col gap-5'>
              <input
                type="tel"
                placeholder="Your Number"
                className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
              />
              <input
                type="date"

                className="w-full px-4 py-3  rounded  focus:outline-none focus:none bg-white focus:ring-none"
              />
            </div>

            <div className="flex lg:flex-row flex-col gap-5">
              <AnimatedSelect
                label="Select Doctor"
                options={["Dr. Rizka", "Dr. Ahmed"]}
              />
              <AnimatedSelect
                label="Select Treatment"
                options={["General Checkup", "Cardiology"]}
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer group">
              <input
                type="checkbox"
                className="peer appearance-none w-4 h-4 border border-gray-300 rounded-none checked:bg-[black] checked:border-transparent focus:outline-none focus:ring-2 focus:ring-[black] transition duration-200"
              />
              <span className="text-gray-600   transition duration-200">
                I agree to terms and conditions
              </span>
            </label>

            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex gap-3 justify-center items-center text-sm bg-[#0D6DFD] px-1 hover:bg-black text-white hover:text-white md:px-3 py-3  rounded transition-colors duration-300 uppercase"
            >
              &nbsp;   Appointment Now

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate fill-current stroke-current text-white group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                />
              </svg>
            </motion.button>
          </form>
        </div>

        <span className='absolute bottom-0 right-0'>
          <img
            src="https://meditics.temptics.com/assets/img/blog-vector-2.svg"
            alt="Background"
            className="w-auto h-[400px] object-cover"
            data-aos="fade-right"
          />
        </span>
      </section >

      {/* footer */}
      <Footer />
    </div >
  )
}

export default Home
