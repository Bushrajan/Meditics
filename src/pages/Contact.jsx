
import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", formData);
  };

  motion
  return (
    <div className="">
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
        >Contact Us
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/">
              Home
            </Link>
          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>Contact Us</small></span>
        </div>
      </div>

      <div className="max-w-6xl md:mt-15 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 py-10 ">
          {/* Card 1 */}
          <div className="md:w-[350px] w-full  bg-[#F2F2F2] h-[230px] rounded-xl hover:shadow-md p-6 flex flex-col items-center justify-center text-center space-y-4" data-aos="fade-up" data-aos-duration="100">
            <div className="bg-[#0D6DFD] w-14 h-14 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed lg:px-10">
              House #5, Street Number #98, brasilia- 70000-000, Brazil.
            </p>
          </div>

          {/* Card 2 */}
          <div className="md:w-[350px] w-full  bg-[#F2F2F2] h-[230px] rounded-xl hover:shadow-md p-6 flex flex-col justify-center items-center text-center space-y-4" data-aos="fade-up" data-aos-duration="1700">
            <div className="bg-[#0D6DFD] w-14 h-14 rounded-full flex items-center justify-center">
              <FaEnvelope color="white" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              info@exmple.com <br />
              info@exmple.com
            </p>
          </div>

          {/* Card 3 */}
          <div className="md:w-[350px] w-full  bg-[#F2F2F2] h-[230px] rounded-xl hover:shadow-md p-6 flex flex-col items-center justify-center text-center space-y-4" data-aos="fade-up" data-aos-duration="2000">
            <div className="bg-[#0D6DFD] w-14 h-14 rounded-full flex items-center justify-center">
              <FaPhoneAlt color="white" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              +208-666-01112 <br />
              +380961381877 </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl md:mb-20 mb-10 mx-auto grid grid-cols-1 md:gap-0 gap-8 md:grid-cols-2 md:px-6 px-2 md:py-12 " data-aos="fade-up" data-aos-duration="1500">
        {/* Map Section */}
        <div className="w-full h-[300px] md:h-auto">
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Bashundhara%20City%20Shopping%20Complex,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full md:rounded-l-3xl rounded  hover:shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <form className="bg-[#0C2449] md:rounded-r-3xl rounded    hover:shadow-md p-2 md:p-10 space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-[white]">Let's talk...</h2>

          <div className="flex gap-3 lg:flex-row lg:justify-between flex-col">
            <div> <label htmlFor="Your Name" className="text-white font-semibold" style={{ fontSize: "14px" }}>Your Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name "
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
              />
            </div>

            <div><label htmlFor="Your Email" className="text-white font-semibold" style={{ fontSize: "14px" }}>Your Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email "
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
              />
            </div>
          </div>

          <label htmlFor="Subject" className="text-white font-semibold" style={{ fontSize: "14px" }}>Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject "
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
          />

          <label htmlFor="Message" className="text-white font-semibold" style={{ fontSize: "14px" }}>Message</label>
          <textarea
            name="message"
            required
            placeholder="Message "
            value={formData.message}
            onChange={handleChange}
            rows={5}

            className="w-full px-4 py-3 bg-white text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0D6DFD] text-white font-semibold py-3 rounded hover:shadow-lg transition-shadow duration-300 group flex justify-center z-10 items-center gap-2   text-sm  hover:bg-[#DBE9A1] hover:text-[#041C33] px-5 "
          >
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate fill-current stroke-current text-[#ffffff] group-hover:text-[#041C33] transition-colors duration-300"
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
          </button>
        </form>
      </div>

      <Footer2 />
    </div>
  );
};

export default Contact;


