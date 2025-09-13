import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaRegClock, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Prevent scroll when overlays are open
    document.body.style.overflow = (showSearch || sidebarOpen) ? 'hidden' : 'auto';
  }, [showSearch, sidebarOpen]);


  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "TEAM", path: "/team" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative z-[10]" data-aos="fade-up">

      {/* Top Bar */}
      <header className="bg-[#0D6DFD] text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex gap-6 flex-wrap items-center font-semibold">
            <div className="flex items-center gap-2">
              <FaPhoneAlt color="#DBE9A1" />
              <span>HelpLine: +208-6666-1111</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock color="#DBE9A1" />
              <span>Open Hours: Mon-Fri 8.00am - 8.00pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope color="#DBE9A1" />
            <span className="text-gray-300 font-semibold">info@meditics.com</span>
          </div>
        </div>
      </header>


      {/* Main Navigation */}
      < div className="lg:px-3" >
        <div className=" lg:hidden  text-white w-full font-semibold py-3 mx-auto flex justify-center items-center gap-2">
          <FaPhoneAlt color="#DBE9A1" />
          <span>Help Line: </span>
          <span>+208-6666-1111</span>
        </div>

        <div className="max-w-7xl mx-auto bg-white border-generate text-black border px-4 py-4 flex  justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <img src="https://meditics.temptics.com/assets/img/logo.svg" alt="Meditics Logo" className="mx-auto" />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.path}
                  className="hover:text-[#0D6DFD] text-gray-800 transition heading3"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>


          {/* CTA Buttons */}
             {/* Appointment Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="group hidden lg:flex items-center gap-2 text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded  transition-colors duration-300"
            >
              BOOK AN APPOINTMENT
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
      </div >

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[1000] h-screen  bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full max-w-xl px-6">
            {/* Close Button */}
            <div className="text-center mb-5">
              <button
                onClick={() => setShowSearch(false)}
                className="bg-black border border-gray-500 text-white hover:text-black hover:bg-white transition-colors duration-300 p-2 rounded-full"
              >
                <RxCross2 size={25} />
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center border border-gray-500  rounded-full overflow-hidden shadow-lg bg-[#1a1a1a]">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button className="text-white px-4 py-3 rounded-r-full">
                <CiSearch size={22} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 z-[900] w-full max-w-sm h-screen bg-white shadow-lg border-l-2 border-[#0C243A]"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between border-b p-4"
            >
              <img src="https://meditics.temptics.com/assets/img/logo.svg" alt="Meditics Logo" className="mx-auto" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="bg-[#0C243A] text-white hover:bg-[#DBE9A1] hover:text-[#0C243A] transition-colors duration-300 p-2 rounded-full"
              >
                <RxCross2 size={24} />
              </button>
            </motion.div>


            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className='p-4 lg:hidden md:hidden'>

              {/* Navigation Links */}
              <div className="w-full border border-[#ccc]  md:flex gap-6 text-sm font-medium">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className='py-2 border-[#ccc] px-4 border-t border-b'
                  >
                    <Link
                      to={link.path}
                      className="hover:text-[#0D6DFD]  text-gray-800 transition heading3"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="px-6 py-4 space-y-6">
              {/* About Us */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">About Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Enim odio eveniet ex dicta beatae.
                </p>
              </motion.div>

              {/* Location */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600 text-sm flex gap-2 items-center">
                  <MdOutlineLocationOn color="#0D6DFD" style={{ fontSize: "20px" }} />
                  123 Main Street, New York, NY 10012
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm flex gap-2 items-center">
                  <FaPhoneAlt color="#0D6DFD" /> 123-456-7890
                </p>
              </motion.div>

              {/* Follow Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute bottom-0 left-0 w-full px-6 py-4"
              >
                <h3 className="text-[#0C243A] font-bold text-lg mb-3">Follow Us</h3>
                <div className="flex gap-4 text-[#0C243A] text-xl">
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default Header;




export const Header2 = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Prevent scroll when overlays are open
    document.body.style.overflow = (showSearch || sidebarOpen) ? 'hidden' : 'auto';
  }, [showSearch, sidebarOpen]);


  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "TEAM", path: "/team" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  motion
  return (
    <div className="relative z-[10]" data-aos="fade-up">

      {/* Top Bar */}
      <header className="bg-[#041C33] text-white text-sm p-1 ">
        <div className="max-w-7xl mx-auto flex flex-wrap  lg:justify-between justify-center items-center px-4 py-2">
          <div className="flex gap-6 flex-wrap items-center font-semibold">
            <div className="flex items-center gap-2">
              <FaRegClock color="#DBE9A1" />
              <span>Mon-Fri 8.00am - 8.00pm</span>
            </div>
          </div>

          <div className="hidden lg:block  justify-center mx-auto text-center items-center gap-2">
            <span>Welcome Mediket hospital and doctors appoinment services</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <FaEnvelope color="#DBE9A1" />
            <span className="lg:text-gray-300 ">info@meditics.com</span>
            <div className="flex lg:ms-5 items-center gap-2">
              <FaPhoneAlt color="#DBE9A1" />
              <span>+208-6666-1111</span>
            </div>
          </div>
        </div>
      </header>


      {/* Main Navigation*/}
      <div className="flex w-full justify-center back">
        <header className="max-w-7xl flex w-full justify-center lg:bg-white md:back">
          <div className="bg-[#0D6DFD] md:w-[280px] px-4 py-4  flex lg:justify-end justify-center items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex  items-center"
            >
              <img
                src="https://meditics.temptics.com/assets/img/logo-white-2.svg"
                alt="Meditics Logo"
                className="lg:w-[250px] w-[150px] lg:me-0"
              />
            </motion.div>
          </div>

          <div className='lg:flex hidden w-full px-5 py-4 lg:justify-between justify-center items-center gap-5'>
            {/* Navigation Links */}
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-800 heading3 hover:text-[#0D6DFD] transition" style={{ fontSize: "14px" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Appointment Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="group hidden lg:flex items-center gap-2 text-sm bg-[#DBE9A1] hover:bg-[#041C33] hover:text-[#DBE9A1] px-5 py-3 rounded  transition-colors duration-300"
            >
              BOOK AN APPOINTMENT
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

          <div className="bg-[#041C33] md:w-[200px] w-[250px] py-4 gap-5 flex lg:justify-end justify-center items-center">
            {/* Search & Menu Icons */}
            <button
              onClick={() => setShowSearch(true)}
              className="bg-[#182E43] hover:bg-[#0D6DFD] text-white px-3 py-2 rounded transition-colors duration-300"
            >
              <CiSearch size={22} />
            </button>

            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-[#182E43] hover:bg-[#0D6DFD] text-white px-3 py-2 rounded transition-colors duration-300"
            >
              <HiOutlineMenuAlt1 size={22} />
            </button>
          </div>
        </header >
      </div>



      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-[1000] h-screen  bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full max-w-xl px-6">
            {/* Close Button */}
            <div className="text-center mb-5">
              <button
                onClick={() => setShowSearch(false)}
                className="bg-black border border-gray-500 text-white hover:text-black hover:bg-white transition-colors duration-300 p-2 rounded-full"
              >
                <RxCross2 size={25} />
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center border border-gray-500  rounded-full overflow-hidden shadow-lg bg-[#1a1a1a]">
              <input
                type="text"
                placeholder="Search Here"
                className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent focus:outline-none"
              />
              <button className="text-white px-4 py-3 rounded-r-full">
                <CiSearch size={22} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 z-[900] w-full max-w-sm h-screen bg-white shadow-lg border-l-2 border-[#0C243A]"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between border-b p-4"
            >
              <img src="https://meditics.temptics.com/assets/img/logo.svg" alt="Meditics Logo" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="bg-[#0C243A] text-white hover:bg-[#DBE9A1] hover:text-[#0C243A] transition-colors duration-300 p-2 rounded-full"
              >
                <RxCross2 size={24} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className='p-4 lg:hidden md:hidden'>

              {/* Navigation Links */}
              <div className="w-full border border-[#ccc]  md:flex gap-6 text-sm font-medium">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className='py-2 border-[#ccc] px-4 border-t border-b'
                  >
                    <Link
                      to={link.path}
                      className="hover:text-[#0D6DFD]  text-gray-800 transition heading3"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            <div className="px-6 py-4 space-y-6">
              {/* About Us */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">About Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Enim odio eveniet ex dicta beatae.
                </p>
              </motion.div>

              {/* Location */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 }} >
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600 text-sm flex gap-2 items-center">
                  <MdOutlineLocationOn color="#0D6DFD" style={{ fontSize: "20px" }} />
                  123 Main Street, New York, NY 10012
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="text-[#0C243A] font-bold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm flex gap-2 items-center">
                  <FaPhoneAlt color="#0D6DFD" /> 123-456-7890
                </p>
              </motion.div>

              {/* Follow Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute bottom-0 left-0 w-full px-6 py-4"
              >
                <h3 className="text-[#0C243A] font-bold text-lg mb-3">Follow Us</h3>
                <div className="flex gap-4 text-[#0C243A] text-xl">
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="border border-gray-400 hover:bg-[#0C2449] hover:text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}; 