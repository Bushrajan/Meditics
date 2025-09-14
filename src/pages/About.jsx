import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import { Link } from "react-router-dom";
import { BiSolidHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Kathryn Murphy",
      role: "Medical Assistant",
      quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae culpa pariatur cumque aliquid voluptatum, recusandae quos dolore odit. Rerum Quidem, enim minus.`,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      comma: "/quotecomma.png",

    },
    {
      name: "John Carter",
      role: "Cardiologist",
      quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae culpa pariatur cumque aliquid voluptatum, recusandae quos dolore odit. Rerum Quidem, enim minus.`,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      comma: "/quotecomma.png",

    },
    {
      name: "Ayesha Khan",
      role: "Dermatologist",
      quote: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae culpa pariatur cumque aliquid voluptatum, recusandae quos dolore odit. Rerum Quidem, enim minus.`,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      comma: "/quotecomma.png",

    }
  ];


  motion
  return (
    <div>
      <Header2 />

      {/* Hero Section */}
      <div className='bg-[#0B2447] py-20 relative overflow-hidden' >
        <span className="absolute top-[10px] left-[0px] scroll-right">
          <img src="https://meditics.temptics.com/assets/img/breadcrumb-vector.svg" alt="+" className="" />
        </span>


        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='heading-h1 lg:text-6xl text-center md:text-4xl text-4xl text-white'
        >
          About Us
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/">Home</Link>
          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>About Us</small></span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto lg:py-20 pb-10 flex flex-wrap justify-center items-center gap-8 p-1">
        <section className="bg-[white] lg:py-15 text-black px-4 md:px-8 lg:px-16 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 ">
            <img
              src="https://meditics.temptics.com/assets/img/about-2-vector.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mx-auto  flex flex-col lg:flex-row items-center justify-between gap-20">

            {/* <!-- Left: Overlapping Mobile Screens --> */}
            <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0" >
              <div className='lg:absolute lg:-bottom-[290px]'>

                {/* <!-- Back Image --> */}
                <div className="-left-[248px] lg:block md:block hidden text-center transform-3d rotate90deg md:bottom-[247px] bg-[#0D6DFD] lg:p-4 md:p-4 text-white z-40  absolute " data-aos="fade-up" data-aos-duration="1800">
                  12+ YEARS EXPERIENCE <span className="text-[#0D6DFD]">csa</span>
                </div>

                {/* <!-- Back Image --> */}
                <div className="w-[190px] h-[190px] md:-right-[40px] lg:block md:block hidden right-[10px]  lg:top-[100px] top-[300px] rounded z-10  absolute " data-aos="fade-up" data-aos-duration="1800">
                  <img src="https://meditics.temptics.com/assets/img/about-2-img-2.jpg" alt="Consult Top Doctors" className="w-full h-full rounded-xl object-cover" />
                </div>

                {/* <!-- Front Image --> */}
                <div className=" w-full lg:h-[550px] md:h-[550px] rounded-circle border-circle2 relative" data-aos="fade-up" data-aos-duration="1500">
                  <img src="https://meditics.temptics.com/assets/img/about-2-img-1.jpg" alt="About" className="w-full h-full object-cover rounded-xl custom-radius sm:custom-radius-sm  border-r-5 border-[#DBE9A1]" />
                </div>
              </div>
            </div>

            {/* <!-- Right Content --> */}
            <div className="lg:w-1/2 lg:ps-5 lg:text-left md:text-center text-center space-y-2" >

              <span className="text-[#0D6DFD]  flex gap-2 lg:justify-start justify-center  font-medium  uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1500">
                <BiSolidHeart color='#0D6DFD' /> ABOUT US</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1650">Committed to Your Care <br /> Every Step of the Way</h2>

              <p className="text-gray-500 text-sm leading-relaxed" data-aos="fade-up" data-aos-duration="1700">
                With a team of world-class doctors, experienced nurses, and dedicated healthcare professionals, we are committed to delivering compassionate, high-quality medical care to every patient.
              </p>

              <ul className="text-gray-600 space-y-2 text-sm  list-disc list-inside" data-aos="fade-up" data-aos-duration="1800">

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;Highly Qualified Specialists </li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;Advanced Medical Equipmeent</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;Safe, Comfortable Environment</li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;24/7 Emergency Services Host</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;Patient-Centered Approach</li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <span className='bg-[#0D6DFD] rounded-full px-1'>
                      <img src="/rightarrow.png" className='w-3 h-5' alt="angle" />
                    </span>&nbsp;&nbsp;Affordable, Transparent Pricing</li>
                </div>

                <div className="w-full flex flex-wrap lg:justify-between justify-center items-center gap-5">
                  <li className='flex  lg:justify-start md:items-center  md:justify-center items-center lg:items-start  md:p-1'>
                    <span className="p-3">
                      <img src="https://meditics.temptics.com/assets/img/about-2-author.jpg" className='rounded-full' alt="picdoc" />
                    </span>
                    <span>
                      <strong> CEO, Founder Of <br /> CarePoint</strong>
                    </span>
                  </li>

                  <li className='flex  lg:justify-start md:items-center  md:justify-center justify-start items-start  md:p-1'>
                    <img src="https://meditics.temptics.com/assets/img/signature.png" alt="signature" />
                  </li>
                </div>
              </ul>

              <div className='flex lg:justify-start justify-center mt-4 gap-4 mx-auto'>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group hidden lg:flex items-center gap-2 text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded  transition-colors duration-300"
                >
                  More About
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate fill-current stroke-current text-[#041C33] group-hover:text-[#DBE9A1] transition-colors duration-300"
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
          </div>
        </section >
      </div>



      {/* Where Compassion Meets Excellence */}
      <section className="bg-[linear-gradient(90deg,_rgba(10,30,59,1)_34%,_rgba(46,70,132,1)_63%)] text-white py-16 px-4 relative overflow-visible">
        <div className="absolute top-0 left-0 z-10">
          <img
            src="https://meditics.temptics.com/assets/img/why-choose-vector-1.svg"
            alt="Background"
            className="w-[180px] object-cover "
            data-aos="fade-right"
          />
        </div>


        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image Section */}
          <div className="w-full  flex justify-center items-center ">

            <div className="relative">
              <div className="flex">
                <img src="https://meditics.temptics.com/assets/img/why-choose-img-1.jpg" alt="Nurse  with patient" className="rounded-xl lg:w-[430px] z-5 w-full object-cover shadow-md  lg:border-none border-8 border-[#DBE9A1]" />
                <span className="lg:absolute lg:block lg:-right-[20px] lg:top-[50px] lg:w-[300px]  lg:h-[490px] border-8 rounded-xl hidden border-[#DBE9A1]"></span>

                {!showVideo && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="group w-[60px] absolute lg:block md:block hidden lg:-right-[50px] lg:top-[430px] md:top-[280px] md:-right-[25px] z-10 p-5 bg-[#DBE9A1] rounded-full transition duration-300 hover:bg-[#1D3777]"
                  >
                    <svg
                      className="w-5 h-5 transition duration-300 text-black group-hover:text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.2"
                        d="M1 15.65L15.662 8L1 .35z"
                      />
                    </svg>
                  </button>

                )}

                {/* Fullscreen Video */}
                {showVideo && (
                  <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
                    <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 text-white text-xl">✕</button>
                    <iframe
                      className="w-full max-w-4xl aspect-video rounded-xl shadow-lg"
                      src="https://www.youtube.com/embed/Ev6yE55kYGw?autoplay=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              <div>
                <img src="https://meditics.temptics.com/assets/img/why-choose-img-2.jpg" alt="Doctor with patient"
                  className="rounded-xl w-[230px] lg:z-5  md:z-5 h-[220px] md:absolute lg:absolute lg:-right-[100px] md:-right-[100px] lg:top-[350px] md:top-[200px] hidden lg:block md:block  object-cover shadow-md" />
                <div>
                  {/* Play Button */}
                  {!showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="group lg:hidden md:hidden absolute sm:left-[250px] sm:top-[300px] top-[150px] left-[115px] p-5 bg-[#DBE9A1] hover:bg-blue-900 rounded-full z-10"
                    >
                      <svg
                        className="w-5 h-5 text-black transition duration-300 group-hover:text-white"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.2"
                          d="M1 15.65L15.662 8L1 .35z"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Fullscreen Video */}
                {showVideo && (
                  <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
                    <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 text-white text-xl">✕</button>
                    <iframe
                      className="w-full max-w-4xl aspect-video rounded-xl shadow-lg"
                      src="https://www.youtube.com/embed/Ev6yE55kYGw?autoplay=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}



              </div>

            </div>

          </div>

          {/* Right Content Section */}
          <div className="w-full  ">
            <div className="lg:text-left text-center mx-auto relative">
              <button className="text-[#0D6DFD] lg:mx-0  mx-auto flex  items-center gap-2 px-4 py-1 rounded-full font-semibold uppercase transition-colors duration-300">
                <BiSolidHeart color="#0D6DFD" /> Why Choose Us
              </button>
              <h2 className="text-white font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4">
                Where Compassion Meets Excellence
              </h2>
              <p className="mb-6 lg:text-sm md:text-[14px]">
                That's why we are committed to delivering world-class medical services with <br />
                compassion, innovation, and integrity — putting your health and comfort first."
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>01</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Personalized Patient Care</h4>
                  <p className="text-sm text-[#ccc]">
                    Our team includes highly trained doctors, nurses, and specialists, each dedicated to providing the best possible care.
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>02</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">World-Class Medical Experts</h4>
                  <p className="text-sm text-[#ccc]">
                    Our team includes highly trained doctors, nurses, and specialists, each dedicated to providing the best possible care.
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-center items-center  gap-5">
                <div>
                  <span className="p-3 font-bold border border-white bg-white text-[#0D6DFD] rounded-full">
                    <span>03</span>
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Advanced Facilities</h4>
                  <p className="text-sm text-[#ccc]">
                    We offer state-of-the-art equipment and technology to ensure accurate diagnosis and effective treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex mt-4 items-center gap-3 lg:mx-0 mx-auto text-sm text-white border border-[#0D6DFD] hover:bg-[#0D6DFD] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
            >
              <div className="flex  w-full  btn justify-center items-center gap-2  ">
                <small>APPOINTMENT NOW</small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-[white]"
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
              </div>
            </motion.button>
          </div>
        </div>
      </section >



      {/*  Happy Patients says */}
      < section className=" relative bg-[#F8FAFC] py-16  overflow-hidden" >

        {/* Background SVGs */}
        < div className="relative" >
          <img
            src="https://meditics.temptics.com/assets/img/feedback-2-vector-1.svg"
            alt="Background Illustration"
            className="absolute "
          />
        </div >

        {/* right vector img */}
        < div className="flex justify-center items-center" >
          <img
            src="https://meditics.temptics.com/assets/img/feedback-2-vector-2.svg"
            alt="Laptop Illustration"
            className="absolute right-[0] top-[150px] w-[200px] h-[200px]"
          />
        </div >


        <div className="max-w-7xl mx-auto flex lg:justify-between lg:gap-4 gap-5 lg:flex-row flex-col justify-center items-center lg:px-5">
          <div className="w-full ">
            <div className="lg:text-left text-center  relative">
              <button className="text-[#0D6DFD] lg:mx-0  mx-auto border border-[#0D6DFD] flex items-center gap-2 px-4 py-1 rounded-full font-semibold uppercase transition-colors duration-300">
                <BiSolidHeart color="#0D6DFD" /> patient SAYS
              </button>
              <h2 className="text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4">
                Happy Patients says
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa <br /> mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, <br /> mattis ligula consec.</p>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="flex mt-5 lg:justify-start items-center justify-center gap-4">
              <motion.button
                ref={prevRef}
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
                ref={nextRef}
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


          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full"
          >


            {testimonials.map((t, i) => (

              <SwiperSlide key={i}>
                <div className="relative w-full lg:w-[550px] mx-auto px-4 py-5">
                  {/* Ghost Layers */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="absolute w-full h-full scale-[0.95] blur-sm opacity-30 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                    <div className="absolute w-full h-full scale-[0.90] blur-sm opacity-20 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                    <div className="absolute w-full h-full scale-[0.85] blur-sm opacity-10 animate-pulse-layer bg-white rounded-xl shadow-md"></div>
                  </div>

                  {/* Active Card */}
                  <div className="relative z-10 bg-white rounded-xl shadow-md p-6 md:p-10 h-full transition-all duration-500 ease-in-out">
                    <img src={t.comma} alt={t.name} className="w-15 h-12 object-cover" />
                    <p className="text-gray-600 mt-4 text-sm font-semibold headinglato md:text-base leading-relaxed mb-6">{t.quote}</p>
                    <div className="flex lg:justify-start items-center border-t border-[#dddddd76] pt-4 justify-center gap-4">
                      <img src={t.img} alt={t.name} className="w-12 h-12 border-2 border-[#0D6DFD] rounded-full object-cover" />
                      <div className="text-left">
                        <h4 className="text-sm font-semibold text-[#041C33]">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section >


      {/* YOUR HEALTH, YOUR CONVENIENCE */}
      < section className="bg-[white] text-black px-4 md:px-8 lg:px-16 lg:mt-40 lg:mb-35 lg:py-13 md:py-10 " >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* <!-- Left Content --> */}
          <div className="lg:w-1/2  lg:text-left md:text-center text-center space-y-2" >

            <span className="text-[#0D6DFD] mt-5  lg:mt-0 pt-5  lg:pt-0 flex gap-2 lg:justify-start justify-center text-sm font-medium  uppercase tracking-wide" data-aos="fade-up" data-aos-duration="1500">
              <BiSolidHeart color='#0D6DFD' /> YOUR HEALTH, YOUR CONVENIENCE</span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1050">Consult Your Doctor Online <br />— Anytime, Anywhere</h2>

            <p className="text-gray-500 text-sm leading-relaxed" data-aos="fade-up" data-aos-duration="1700">
              Say goodbye to long queues and unnecessary travel. With our secure video consultation service, you’ll be able to get experienced doctors from the comfort of your home.
            </p>

            <ul className="text-gray-600 space-y-2 text-sm  list-disc list-inside" data-aos="fade-up" data-aos-duration="1800">

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Speak with certified specialists in real time</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Easy appointment booking via mobile or web</li>

              <li className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Private, secure, and confidential video calls</li>

              <li className='flex   lg:justify-start md:items-center  md:justify-center justify-center items-start  md:p-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <span className='bg-[#0D6DFD] rounded-full p-1'>
                  <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                </span>&nbsp;Available 7 days a week, including evenings</li>
            </ul>

            <div className='flex lg:flex-row flex-col lg:justify-start justify-center lg:gap-4  mx-auto'>
              <motion.button data-aos="fade-up" data-aos-duration="1900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group flex items-center  lg:justify-start justify-center mt-6 gap-3 text-sm bg-[#0D6DFD] hover:bg-[#DBE9A1] text-white  text-[12px]  sm:text-[14px] md:text-[16px]hover:text-[#041C33] px-5 py-3 rounded font-semibold transition-colors duration-300"
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

              <motion.button data-aos="fade-up" data-aos-duration="1900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="group flex items-center lg:mt-6 lg:justify-start justify-center  mt-3 gap-3 text-sm border border-[black] hover:bg-[black] text-black text-[12px]  sm:text-[14px] md:text-[16px] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
              >
                Book A Video Call

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current text-black group-hover:text-[white]"
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
          <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0" >

            <div className='lg:absolute lg:mb-0 md:mb-0 mb-15 lg:-bottom-[290px]  '>

              {/* <!-- Back Image --> */}
              <div className="lg:w-[190px] lg:h-[190px] h-[100px] lg:left-[0px] lg:top-[0px]  z-10  absolute " data-aos="fade-up" data-aos-duration="1800">
                <img src="https://meditics.temptics.com/assets/img/inner-video-call-img-2.png" alt="Consult Top Doctors" className="w-full h-full object-cover" />
              </div>

              {/* <!-- Back Image --> */}
              <div className="lg:w-[100px] w-[50px] p-0 lg:h-[100px] h-[50px] bg-[#DBE9A1] flex justify-center items-center rounded-full lg:-right-[50px] right-0 lg:top-[0px]  z-10  absolute " data-aos="fade-up" data-aos-duration="1800">
                <img src="/video.png" alt="video" className="lg:w-[60px] w-[30px] object-cover" />
              </div>


              {/* <!-- Front Image --> */}
              <div className="w-full lg:h-[550px] border-circle relative" data-aos="fade-up" data-aos-duration="1500">
                <img src="https://meditics.temptics.com/assets/img/inner-video-call.png" alt="Dr. Tiffany Rizka" className="w-full h-full object-cover" />
              </div>


            </div>
          </div>

        </div>
      </section >


      <Footer2 />
    </div >
  );
};

export default About;
