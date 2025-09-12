import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import { Footer2 } from '../components/Footer';
import AnimatedSelect from "../components/AnimatedSelect";
import { MdEmail, MdPhone } from "react-icons/md";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link, useParams } from "react-router-dom";
import { doctors } from "../doc.js";

const TeamMemberDetails = () => {
  const [startCount, setStartCount] = useState(false);
  const data = [
    { percent: 55, label: "Surgery" },
    { percent: 73, label: "Medicine" },
    { percent: 90, label: "Healthcare" },
  ];

  useEffect(() => {
    setStartCount(true);
  }, []);

  const { id } = useParams();
  const doc = doctors.find((d) => String(d.id) === String(id));

  const fallback = {
    name: "Dr. John Joey",
    title: "Internal Medicine & Diabetology",
    img: "https://meditics.temptics.com/assets/img/team-details-img.jpg",
    email: "info@example.com",
    phone: "+208-6666-0112",
    address: "123 Main Street, City",
    experience: "3–5 years",
    des: "Our doctors are more than just healthcare professionals — they’re compassionate caregivers, committed to providing personalized, expert medical care. With years of experience and deep knowledge in their respective fields, our doctors ensure that patients receive...",
  };

  const activeDoc = doc || fallback;

  motion
  return (
    <div className="">
      <Header2 />

      {/* Hero Section */}
      <div className="bg-[#0B2447] py-20 relative overflow-hidden">
        <span className="absolute top-[10px] left-[0px] scroll-right">
          <img
            src="https://meditics.temptics.com/assets/img/breadcrumb-vector.svg"
            alt="+"
          />
        </span>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-h1 lg:text-6xl text-center md:text-4xl text-4xl text-white"
        >
          Our Doctors
        </motion.h1>

        <div className="flex justify-center mt-5 items-center gap-3 text-white">
          <span className="text-[#A7B0C2]">
            <small>
              <Link to="/">
                Home
              </Link>
            </small>
          </span>
          <span>
            <img src="/rightarrow.png" alt="img" className="w-2" />
          </span>
          <span>
            <small>Our Doctors</small>
          </span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="max-w-5xl md:mt-15 p-3 mx-auto">
        <div className="bg-white rounded-xl p-6 md:flex justify-center md:items-center gap-6 max-w-5xl mx-auto my-10">
          {/* Doctor Image */}
          <div className="md:px-10 px-2 mx-auto justify-center items-center flex-shrink-0 mb-6 md:mb-0">
            <img
              src={activeDoc.img}
              alt={activeDoc.name}
              className="h-[400px] mx-auto hover:shadow-lg object-cover rounded-3xl"
            />
          </div>

          <div>
            {/* Info Section */}
            <div className="md:text-left text-center mx-auto justify-center items-center flex-1 space-y-4">
              <h2 className="md:text-4xl text-2xl lg:text-left lg:justify-start justify-center text-center font-bold text-[#041C33]">
                {activeDoc.name}
              </h2>
              <p className="text-[#0D6DFD] lg:text-left lg:justify-start justify-center text-center flex items-center gap-2">
                {activeDoc.title}
              </p>
              <p className="text-gray-600 text-sm mx-auto leading-relaxed">
                {activeDoc.des}
              </p>
            </div>

            {/* Contact Info */}
            <div className="lg:w-[450px] w-full grid grid-cols-1 sm:grid-cols-2 lg:gap-0 md:gap-3 gap-4 pt-4 text-sm text-gray-700">

              <div className="border lg:border-r-0 lg:border-b-0 hover:text-[#0D6DFD] lg:px-0 px-2  border-gray-200 md:rounded flex items-center py-3 justify-center gap-2">
                <MdEmail className="text-[#0D6DFD] w-7 h-8" /> {activeDoc.email}
              </div>

              <div className="border hover:text-[#0D6DFD] border-gray-200 md:rounded  lg:px-0 px-2 flex items-center py-3 justify-center gap-2">
                <MdPhone className="text-[#0D6DFD] w-7 h-7" /> {activeDoc.phone}
              </div>

              <div className="border lg:border-r-0   border-gray-200 md:rounded flex items-center lg:px-0 px-2 py-3 justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
                  <path fill="#0D6DFD" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" strokeWidth="13" stroke="#0D6DFD" />
                  <path fill="#0D6DFD" d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" strokeWidth="13" stroke="#0D6DFD" />
                </svg>

                {activeDoc.address}
              </div>

              <div className="border lg:border-t-0 border-gray-200 md:rounded flex items-center lg:px-0 px-2 py-3 justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="#0D6DFD" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5">
                    <path d="M16.5 13.5h-3v-3h-3v3h-3v3h3v3h3v-3h3z" />
                    <path d="M23.5 7.5H.5v16h23zm-7 0h-9l1-4h7z" />
                  </g>
                </svg> Experience: {activeDoc.experience}
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 px-6 flex gap-2 lg:justify-start justify-center items-center lg:mx-0 mx-auto py-3 bg-[#0D6DFD] text-white rounded hover:shadow-lg hover:bg-[#041C33] transition duration-300">
              Make Appointment
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
          </div>
        </div>
      </div>


      {/* Left Paragraph */}
      < div className="max-w-5xl lg:px-5 p-3  border-t border-gray-200 pt-10 mx-auto" >
        <h2 className="text-3xl font-bold text-[#041C33]">Introducing the Doctor:</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          One of the most significant individuals in our society is the doctor. They can save lives. When someone is having trouble, they are the first to offer assistance. Many parents hope that their kids will grow up to be doctors. The people who know the most about all illnesses are doctors. Sample paragraphs about doctors and their value to society may be found in this article. Before you write a paragraph on doctors, have a look at them. In society, doctors are regarded as the most significant and accountable individuals. When someone is experiencing health issues, they are the ones who provide assistance. The only people who truly understand all types of diseases, their symptoms, and their remedies are doctors. They tirelessly toil day and night for  </p>
      </div >


      <div className="max-w-5xl mx-auto  p-3 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-16 "
        id="experience"
      >
        {/* Left Paragraph */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#041C33]">Personal Experience</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bring win-win survival techniques to the table. Victory to guarantee that a new normal that has developed from generation X is on the streamlined solution with proactive other dominance moving forward.
          </p>
        </div>

        {/* Right Counters */}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center"
          whileInView={() => setStartCount(true)}
          viewport={{ once: true }}
        >
          {data.map((item, i) => {
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (item.percent / 100) * circumference;

            return (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                className={`relative w-32 h-32 rounded-full flex flex-col items-center justify-center ${startCount ? "border-[0px]" : "border-[5px]"
                  } border-blue-500 bg-white hover:shadow-md`}
              >
                {/* SVG Ring */}
                <svg className="absolute top-0 left-0 w-32 h-32 rotate-[-90deg]">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#9DAAFF"
                    strokeWidth="1"
                    fill="none"
                  />

                  {startCount && (
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#0D6DFD"
                      strokeWidth="3"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      strokeLinecap="round"
                      fill="none"
                      animate={{ strokeDashoffset: offset }}
                      transition={{
                        duration: 1.5 + i * 0.5,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </svg>

                {/* Center Content */}
                <h3 className="text-2xl font-bold text-[#041C33]">
                  {startCount && <CountUp end={item.percent} duration={2 + i * 0.5} />}%
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>


      {/* Apply for Appointment */}
      <div className="max-w-5xl mx-auto p-3">
        <section className="max-w-6xl rounded-2xl  lg:mb-30 mb-15 relative mx-auto bg-[#F2F2F2] px-4 md:px-8  py-10">

          <h2 className='text-center  mx-auto text-black font-bold mt-3 heading-h2 md:text-4xl text-2xl mb-4' data-aos="fade-up" data-aos-duration="1000" >
            Apply for Appointment
          </h2>

          {/* Right Side: Form */}
          <form className="w-full bg-[#F2F2F2] mx-auto  md:p-6 space-y-5" data-aos="fade-up" data-aos-duration="1500">

            <div className=' mb-6 flex w-full  justify-center lg:flex-row md:flex-row flex-col gap-5'>
              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
                />
              </div>

              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Your Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
                />
              </div>

            </div>

            <div className=' mb-6 flex lg:flex-row md:flex-row flex-col gap-5'>
              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Your Phone</label>
                <input
                  type="tel"
                  placeholder="Your Number"
                  className="w-full px-4 py-3 rounded  focus:outline-none focus:none bg-white focus:ring-none"
                />
              </div>
              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Select Date</label>
                <input
                  type="date"

                  className="w-full px-4 py-3  rounded  focus:outline-none focus:none bg-white focus:ring-none"
                />
              </div>
            </div>

            <div className=" mb-6 flex lg:flex-row md:flex-row flex-col gap-5">

              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Select Doctor</label>
                <AnimatedSelect
                  label="Select Doctor"
                  options={[",Dr. Rizka", "Dr. Ahmed"]}
                />
              </div>

              <div className="w-full">
                <label style={{ fontSize: "14px" }} htmlFor="">Select Treatment</label>
                <AnimatedSelect
                  label="Select Treatment"
                  options={["General Checkup", "Cardiology"]}
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer group">
              <input
                type="checkbox"
                className=" w-4 h-4 border border-gray-300  "
              />
              <span className="text-gray-600   transition duration-200">
                I agree to terms and conditions
              </span>
            </label>

            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group mt-5 w-full justify-center items-center text-sm bg-[#0D6DFD] px-1 hover:bg-black text-white hover:text-white md:px-3 py-3  rounded transition-colors duration-300 uppercase"
            >
              &nbsp;   Appointment Now


            </motion.button>
          </form>

        </section >
      </div>


      <Footer2 />
    </div >
  );
}

export default TeamMemberDetails;
