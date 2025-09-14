import { useParams, Link } from "react-router-dom";
import { services } from "../services.js";
import { Header2 } from "../components/Header";
import { Footer2 } from "../components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

motion

const ServicesDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // detailservice faq
  const faqs = [
    {
      question: "Do I need a diagnosis to book a session?",
      answer:
        "Ansectetur adipiscing elit. Aenean scelerisque augue vitae consequat. E-learning is suitable for students, professionals, and anyone interested."
    },
    {
      question: "Why Join Us as a Volunteer?",
      answer:
        "Volunteering helps you grow, connect, and contribute to a meaningful cause. You’ll gain experience and make a real impact."
    },
    {
      question: "Be Part of a Community",
      answer:
        "Our community is built on support, learning, and shared values. You’ll find mentors, peers, and opportunities to thrive."
    }
  ];

  // detailservice id
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  // detailservice falllback
  const fallback = {
    title: "General Health Service",
    img: "https://meditics.temptics.com/assets/img/service-2.jpg",
    para: "This is a general fallback service description. Our team is committed to providing expert care and personalized attention to every patient.",
    offer: [
      "Comprehensive health checkups",
      "Online consultation support",
      "Personalized wellness plans",
      "Stress and lifestyle management",
      "24/7 patient assistance"
    ],
    features: [
      {
        title: "Comprehensive Testing",
        detail: "Covers a wide range of biological samples for accurate diagnosis."
      },
      {
        title: "Expert Review",
        detail: "All samples analyzed by certified pathologists."
      },
      {
        title: "Rapid Turnaround",
        detail: "Results delivered quickly to support timely medical decisions."
      },
      {
        title: "Expert Review",
        detail: "All samples analyzed by certified pathologists."
      },
      {
        title: "Comprehensive Testing",
        detail: "Covers a wide range of biological samples for accurate diagnosis."
      },
    ],
    why: [
      "Health services are essential for maintaining well-being and preventing illness.Even when specific data is unavailable", " we ensure quality care through fallback support."
    ]
  };

  const activeService = service || fallback;
  const { title, img, para, offer, features, why } = activeService;

  // categories
  const categories = [
    { title: "General Health Consultation" },
    { title: "Chronic Disease Management" },
    { title: "Online Video Consultation" },
    { title: "Preventive Health Checkups" },
    { title: "Women's & Men's Health" },
    { title: "Family Health Services" },
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
          Service Details
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/" className="cursor-pointer">Home</Link>

          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>Service Details</small></span>
        </div>
      </div>



      <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 lg:mb-15 lg:mt-16 md:mb-15 md:mt-16 mb-10 mt-10 bg-white mx-auto lg:p-3 md:p-3 p-1">
        <div className="max-w-7xl mx-auto lg:px-4 md:px-4 lg:py-10 md:py-10 py-1 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Blog Posts*/}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-up" data-aos-duration="1050">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src={img} alt={title} className="w-full rounded-3xl object-cover" />
              <div className="lg:p-2 mt-5 p-2 space-y-2">

                {/* Title + Excerpt */}
                <h2 className="lg:text-3xl text-2xl font-bold text-[#041C33] hover:text-[#0D6DFD] transition">
                  {title}
                </h2>
                <p className="text-gray-500 mt-2 mb-4" style={{ fontSize: "15px" }}>
                  {para}
                </p>
              </div>
              <div className="bg-[#EDEDFF] border-b-2 mb-10 border-[#0D6DFD] rounded-xl py-6 lg:px-5 px-2">
                <p style={{ fontSize: "18px" }}><i>This blog post hits the mark perfectly for our target audience — busy professionals who care about their health but struggle with time.</i> <span className="text-[#0D6DFD]">— John Doe</span>
                </p>
              </div>


              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* <!-- Left Content --> */}
                <div className="lg:w-1/2  lg:text-left md:text-center text-center space-y-6" >
                  <h2 className="text-2xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1650">What We Offer:</h2>
                  <ul className=" space-y-2 text-sm  list-disc list-inside" data-aos="fade-up" data-aos-duration="1800">
                    {offer.map((item, i) => (
                      <li key={i} className='flex  lg:justify-start md:items-center  md:justify-center justify-center items-center  md:p-1'>
                        <span className='bg-[#0D6DFD] rounded-full p-1'>
                          <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                        </span>
                        <span className="lg:text-sm md:text-sm sm:text-sm text-[12px]">&nbsp; {item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <!-- Right Content: Overlapping Mobile Screens --> */}
                <div className="lg:w-1/2 relative flex  md:px-5 px-1 justify-center items-center mt-10 lg:mt-0" >
                  {/* <!-- Front Image --> */}
                  <div className="w-full h-full  rounded-xl shadow-xl  z-10 relative" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://meditics.temptics.com/assets/img/service-details-inner.jpg" alt="Dr. Tiffany Rizka" className="w-full h-full   rounded-2xl object-cover" />
                  </div>
                </div>
              </div>


              {/* <!-- Left Content --> */}
              <div className="lg:w-1/1  lg:text-left md:text-center text-center space-y-6" >

                <ul className=" space-y-2 mt-5 text-sm  list-disc list-inside" data-aos="fade-up" data-aos-duration="1800">
                  <h2 className="text-2xl font-bold leading-snug" data-aos="fade-up" data-aos-duration="1650">Key Features:</h2>
                  {
                    features.map((item, i) => (
                      <li key={i} className='flex lg:flex-row flex-col lg:justify-start md:items-center  md:justify-start justify-center items-center  md:p-1'>
                        <span className='flex '>
                          <span className=' bg-[#0D6DFD] rounded-full p-1'>
                            <img src="/rightarrow.png" className='w-2 h-3' alt="angle" />
                          </span>
                          <span>&nbsp;{item.title} :</span>
                        </span>
                        <small style={{ fontSize: "13px" }} >&nbsp;&nbsp;{item.detail}</small>
                      </li>
                    ))
                  }
                </ul>
              </div>

              {/* Why It Matters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2 mt-8 mb-5">
                <h2 className="text-2xl font-bold lg:text-left  text-center text-[#041C33]">Why It Matters:</h2>
                <ul className=" text-sm  lg:text-left  text-center list-none list-inside">
                  {why.map((item, i) => (
                    <li key={i} >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <section className="px-2 py-1">

                {faqs.map((faq, i) => (
                  <div key={i} className="px-2 rounded-xl mb-4 bg-[#F2F2F2] py-4">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full mb-2 flex justify-between items-center text-left"
                    >
                      <p className="px-3  text-[#041C33]">{faq.question}</p>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 me-4 cursor-pointer"
                        initial={{ rotate: -140, color: "#000000" }}
                        animate={{
                          rotate: openIndex === i ? -28 : 150,
                          color: openIndex === i ? "#0D6DFD" : "#000000"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-3 overflow-hidden  border-t pt-4 border-[#cacaca7e] pb-2 px-2 text-sm text-[#4b4e52c1]"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </section>

            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 p-2">

            {/* Categories */}
            <div className="bg-[#F2F2F2]  p-4 rounded-xl hover:shadow-md" data-aos="fade-up" data-aos-duration="1500">
              <h2 className="text-xl font-semibold mb-6 text-[#041C33]" >Our Services</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {categories.map((cat, i) => (
                  <li key={i} className="">
                    <span className="group hover:bg-[#0D6DFD] px-2 py-1 items-center cursor-pointer flex justify-between heading hover:rounded hover:text-white">
                      {cat.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate fill-current stroke-current text-[#041C33] group-hover:text-white transition-colors duration-300"
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
                    </span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Left: Schedule Section */}
            <section className="bg-[#112B58] relative  text-white lg:text-left md:text-left px-4 text-center rounded-xl hover:shadow-md  w-full md:w-[330px] " data-aos="fade-up" data-aos-duration="1500" >

              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img
                  src="https://meditics.temptics.com/assets/img/service-sidebar-cta-bg.jpg"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold pt-8 mb-4">Have Additional Questions?</h2>
              <ul className="space-y-2  ">
                <li className='py-2 mt-2 text-sm overflow-hidden '>
                  <hr className='w-75 mx-auto border border-l-0 border-r-0 border-b-0 pt-3 border-t-gray-600' />
                  3rd Avenue, 83 Manhattan, London, UK
                </li>
                <li className='hover:text-[#0D6DFD] text-white'>+1890 123 456</li>
                <li className='hover:text-[#0D6DFD] text-sm'>support@example.com</li>
                <li className='  pt-4 pb-8 text-sm'>

                  {/* Appointment Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="group hidden lg:flex z-10 items-center gap-2 text-[#041C33] text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded transition-colors duration-300"
                  >
                    Contact Us
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
                </li>

              </ul>
            </section>
          </div>
        </div>
      </div>



      <Footer2 />
    </div >
  );
};

export default ServicesDetails;

