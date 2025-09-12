import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { doctors } from "../doc.js";

const Team = () => {
  const icons = [FaFacebookF, FaInstagram, FaYoutube, FaTwitter];

  motion
  return (
    <div>
      <Header2 />

      {/* Hero Section */}
      <div className='bg-[#0B2447] py-20 relative overflow-hidden'>
        <span className="absolute top-[10px] left-[0px] scroll-right">
          <img src="https://meditics.temptics.com/assets/img/breadcrumb-vector.svg" alt="+" />
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='heading-h1 lg:text-6xl text-center md:text-4xl text-4xl text-white'
        >
          Our Doctors
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/">
              Home
            </Link>
          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>Our Doctors</small></span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto py-20 flex flex-wrap justify-center items-center gap-8 p-2">
        {doctors.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group md:w-[340px] sm:w-[340px] w-[320px] h-[300px] pt-5 bg-[#F2F2F2] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br border border-[#F2F2F2] hover:border-[#0D6DFD]"
          >
            <div className="p-4 flex flex-col items-center text-center">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-30 h-30 object-cover rounded-full border-6 border-white shadow-md group-hover:border-[#0D6DFD] group-hover:scale-105 transition-all duration-300"
              />

              <h3 className="mt-4 text-lg hover:text-[#0D6DFD] font-semibold text-gray-800">
                <Link to={`/team/${doc.id}`}>{doc.name}</Link>
              </h3>

              <p className="text-sm text-gray-500">{doc.title}</p>

              <div className="mt-4 flex gap-3">
                {icons.map((Icon, i) => (
                  <div
                    key={i}
                    className="bg-white p-2 rounded shadow-sm hover:bg-[#DBE9A1] transition-colors duration-300"
                  >
                    <Icon className="text-gray-500 w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer2 />
    </div>
  );
};

export default Team;
