import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import { Link } from "react-router-dom";

const About = () => {


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
      <div className="max-w-7xl mx-auto py-20 flex flex-wrap justify-center items-center gap-8 p-1">

      </div>

      <Footer2 />
    </div>
  );
};

export default About;