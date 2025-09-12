import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

motion
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0C243A] text-[#B4BCC2] px-6 py-1 md:px-16 pt-10">
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col lg:items-start justify-center items-center gap-8">

        {/* Branding & Subscription */}
        <div data-aos="fade-up" className="mx-auto lg:text-left text-center">
          <h2 className="text-2xl font-bold mb-4">
            <img
              src="https://meditics.temptics.com/assets/img/logo-white.svg"
              alt="Meditics Logo"
              className="lg:ml-0 mx-auto"
            />
          </h2>
          <motion.p
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm mb-6"
          >
            It is a long established fact that a reader will be distracted
            <br />
            the road readable content of a page when looking at layout.
          </motion.p>
          <div className="flex items-center gap-2 rounded-full bg-white">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-3 py-3 bg-white text-black rounded-full placeholder-gray-500 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-full">
              SUBSCRIBE
            </button>
          </div>
          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="w-full px-6 py-4 "
          >
            <h3 className="text-[#0C243A] font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4 text-[#0C243A] text-xl">
              <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
                <FaFacebookF size={"15px"} />
              </a>
              <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
                <FaTwitter size={"15px"} />
              </a>
              <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
                <FaInstagram size={"15px"} />
              </a>
              <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
                <FaYoutube size={"15px"} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200" className="mx-auto lg:text-left text-center">
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white font-semibold mb-4"
          >
            Quick Links
          </motion.h3>

          <div className="flex gap-1 mb-4 justify-center lg:justify-start items-center">
            <span className="w-15 bg-blue-500" style={{ height: '1.5px' }}></span>
            <span className="w-3 bg-blue-500" style={{ height: '1.5px' }}></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">General Health Check-Ups</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Stress & Lifestyle <br /> Counseling</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Vaccinations & <br /> Immunizations</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Referral to Specialists</a></li>
          </ul>
        </div>

        {/* Company */}
        <div data-aos="fade-up" data-aos-delay="400" className="mx-auto lg:text-left text-center">
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-white font-semibold mb-4"
          >
            Company
          </motion.h3>
          <div className="flex gap-1 mb-4 justify-center lg:justify-start items-center">
            <span className="w-15 bg-blue-500" style={{ height: '1.5px' }}></span>
            <span className="w-3 bg-blue-500" style={{ height: '1.5px' }}></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Home</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">About Us</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Pages</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="600" className="mx-auto lg:text-left text-center">
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-white font-semibold mb-4"
          >
            Contact
          </motion.h3>
          <div className="flex gap-1 mb-4 justify-center lg:justify-start items-center">
            <span className="w-15 bg-blue-500" style={{ height: '1.5px' }}></span>
            <span className="w-3 bg-blue-500" style={{ height: '1.5px' }}></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="mb-4">102/ B Street, New Elephant Road, <br /> Sandigo, USA</li>
            <div>
              <span className="mt-5 text-white font-semibold text-base">Email Us</span>
              <li className="mb-4">info@exemple.com</li>
            </div>

            <div>
              <span className="text-white font-semibold text-base">Call Now</span>
              <li className="mb-4">+208-666-0112</li>
            </div>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-white max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
        style={{ borderTop: '1px dashed #4B5563' }} data-aos="fade-up"
        data-aos-delay="800"
      >
        <p>© <span className="text-[#0D6DFD]">Medtics</span> 2025. All Rights Reserved.</p>

        {/* Payment Icons */}
        <div className="flex flex-wrap gap-2 mt-3 mb-4 lg:mt-0 lg:mb-0 lg:w-[400px] justify-center items-center">
          {[
            'payment-method-1.png',
            'payment-method-2.png',
            'payment-method-3.png',
            'payment-method-4.png',
            'payment-method-5.png',
          ].map((img, i) => (
            <div key={i} className="p-2 rounded hover:bg-white/20 transition-colors cursor-pointer">
              <img
                src={`https://meditics.temptics.com/assets/img/${img}`}
                alt={`Payment ${i + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex gap-4">
          <a href="#!" className="hover:underline">Terms of Use</a>
          <a href="#!" className="hover:underline">Privacy</a>
          <a href="#!" className="hover:underline">Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




export const Footer2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  motion
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(90deg,_rgba(10,33,59,1)_34%,_rgba(46,70,132,1)_63%)] text-[#B4BCC2] px-6 lg:py-15 py-10 md:px-16 ">

      <div className='relative'>
        <span className='absolute top-0 right-[0px] lg:block hidden lg:-top-[120px] lg:-right-[60px]'>
          <img
            src="https://meditics.temptics.com/assets/img/footer-2-vector.svg"
            alt="Background"
            className=" object-center object-cover"
          />
        </span>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://meditics.temptics.com/assets/img/footer-2-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
 
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col lg:items-start justify-center items-center gap-8">

        {/* Branding & Subscription */}
        <div data-aos="fade-up" className="mx-auto lg:text-left text-center">
          <h2 className="text-2xl font-bold mb-4">
            <img
              src="https://meditics.temptics.com/assets/img/logo-white.svg"
              alt="Meditics Logo"
              className="lg:ml-0 mx-auto"
            />
          </h2>
          <motion.p
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm mb-6"
          >
            It is a long established fact that a reader will be <br /> distracted
            the road readable content of a page when <br /> looking at layout.
          </motion.p>


          {/* Payment Icons */}
          <div className="flex flex-wrap gap-3 mt-3 mb-4  lg:w-[350px] lg:justify-start justify-center items-center">
            {[
              'payment-method-1.png',
              'payment-method-2.png',
              'payment-method-3.png',
              'payment-method-4.png',
              'payment-method-5.png',
            ].map((img, i) => (
              <div key={i} className="p-1 rounded hover:bg-white/20 transition-colors cursor-pointer">
                <img
                  src={`https://meditics.temptics.com/assets/img/${img}`}
                  alt={`Payment ${i + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>



        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200" className="mx-auto lg:text-left text-center">
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white font-semibold mb-4"
          >
            Quick Links
          </motion.h3>

          <div className="flex gap-1 mb-4 justify-center lg:justify-start items-center">
            <span className="w-15 bg-blue-500" style={{ height: '1.5px' }}></span>
            <span className="w-3 bg-blue-500" style={{ height: '1.5px' }}></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">General Health Check-Ups</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Stress & Lifestyle Counseling</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Vaccinations & Immunizations</a></li>
            <li className="mb-5"><a href="#" className="transition-colors hover:text-[#0D6DFD] hover:underline">Referral to Specialists</a></li>
          </ul>
        </div>



        {/* Join The Newsletter */}
        <div data-aos="fade-up" data-aos-delay="600" className="mx-auto lg:text-left text-center">
          <motion.h3
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-white font-semibold mb-4"
          >
            Join The Newsletter
          </motion.h3>
          <div className="flex gap-1 mb-4 justify-center lg:justify-start items-center">
            <span className="w-15 bg-blue-500" style={{ height: '1.5px' }}></span>
            <span className="w-3 bg-blue-500" style={{ height: '1.5px' }}></span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="mb-4">Want to be notified about our services. Just sign up and we'll send <br /> you a notification by email.</li>
            <div className="flex items-center gap-2 rounded-full bg-white">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-3 py-3 bg-white text-black rounded-full placeholder-gray-500 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-full">
                SUBSCRIBE
              </button>

            </div>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-white max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
        style={{ borderTop: '1px dashed #4B5563' }} data-aos="fade-up"
        data-aos-delay="800"
      >
        <p>© <span className="text-[#0D6DFD]">Medtics</span> 2025. All Rights Reserved.</p>


        {/* Follow Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          className=""
        >
          <div className="flex justify-center gap-4 text-[#0C243A] text-xl">
            <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
              <FaFacebookF size={"15px"} />
            </a>
            <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
              <FaTwitter size={"15px"} />
            </a>
            <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
              <FaInstagram size={"15px"} />
            </a>
            <a href="#" className="border border-gray-600 text-white bg-white/20 hover:bg-[#0D6DFD] hover:border-[#0D6DFD] py-2 px-2 rounded  transition-colors duration-300">
              <FaYoutube size={"15px"} />
            </a>
          </div>
        </motion.div>

        {/* Legal Links */}
        <div className="flex gap-4">
          <a href="#!" className="hover:underline">Terms of Use</a>
          <a href="#!" className="hover:underline">Privacy</a>
          <a href="#!" className="hover:underline">Environmental Policy</a>
        </div>
      </div>
    </footer>
  );
}