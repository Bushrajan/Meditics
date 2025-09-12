
import { motion } from "framer-motion";
import { Header2 } from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci"; 
import { useState } from "react";
import { FaRegClock } from "react-icons/fa";


const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      title: "The Role of Physical Therapy in Recovery",
      author: "Admin",
      date: "Sep 11, 2025",
      readTime: "6 Min Read",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      comments: 15,
      img: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      author: "Admin",
      date: "Sep 10, 2025",
      readTime: "3 Min Read",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
      comments: 4,
      img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      author: "Admin",
      date: "Sep 10, 2025",
      readTime: "8 Min Read",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
      comments: 15,
      img: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
    },
    {
      title: "The Role of Physical Therapy in Recovery",
      author: "Admin",
      date: "Sep 11, 2025",
      readTime: "6 Min Read",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      comments: 15,
      img: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      author: "Admin",
      date: "Sep 10, 2025",
      readTime: "3 Min Read",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
      comments: 4,
      img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
      title: "The Role of Physical Therapy in Recovery",
      author: "Admin",
      date: "Sep 11, 2025",
      readTime: "6 Min Read",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      comments: 15,
      img: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
    },
  ];

  const categories = [
    {
      title: "Health & Wellness",
      cat: "(08)",
    },
    {
      title: "Preventive Care",
      cat: "(11)",
    },
    {
      title: "Nutrition & Lifestyle",
      cat: "(18)",
    },
    {
      title: "Senior & Geriatric Care",
      cat: "(11)",
    },
    {
      title: "Medical Education & Tips",
      cat: "(07)",
    },
    {
      title: "Surgery & Recovery",
      cat: "(07)"
    }
  ];

  const recentPosts = [
    {
      title: "A Day in the Life of a Hospital Nurse",
      date: "May 12, 2023",
      img: "https://meditics.temptics.com/assets/img/blog-2.jpg"
    },
    {
      title: "Choosing the Right Doctor for Your Needs",
      date: "May 18, 2023",
      img: "https://meditics.temptics.com/assets/img/blog-1.jpg"
    },
    {
      title: "Choosing the Right Doctor for Your Needs",
      date: "May 15, 2023",
      img: "https://meditics.temptics.com/assets/img/blog-3.jpg"
    },
  ];

  // pagination
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const getPaginatedPosts = () => {
    const start = (currentPage - 1) * postsPerPage;
    return blogPosts.slice(start, start + postsPerPage);
  };

  const paginatedPosts = getPaginatedPosts();

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
          initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className='heading-h1 lg:text-6xl text-center md:text-4xl text-4xl text-white'>
          Our Blogs
        </motion.h1>

        <div className='flex justify-center mt-5 items-center gap-3 text-white'>
          <span className='text-[#A7B0C2]'><small>
            <Link to="/">
              Home
            </Link>
          </small></span>
          <span><img src="/rightarrow.png" alt="img" className='w-2' /></span>
          <span><small>Blog</small></span>
        </div>
      </div>

      <div className="max-w-6xl flex flex-wrap justify-center items-center gap-8 mb-15 mt-16 bg-white mx-auto p-3">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Blog Posts*/}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-up" data-aos-duration="1050">
            {paginatedPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-lg hover:shadow-md overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full object-cover" />
                <div className="lg:p-6 p-2 space-y-2">
                  {/* Meta Info */}
                  <div className="text-sm text-gray-500 flex items-center mb-5 gap-4">
                    <span className="flex gap-1 text-white p-1 px-4 bg-[#0D6DFD] rounded-full">
                      {/* Author Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="white" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z" stroke-width="0.2" stroke="#040000" />
                      </svg>
                      By {post.author}
                    </span>
                    <span className="flex gap-1">
                      <FaRegClock color="#B6B7B9" className="w-[19px] h-[19px]" />
                      {post.readTime}
                    </span>
                    <span className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                        <path fill="#B6B7B9" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z" stroke-width="0.2" stroke="#040000" />
                      </svg>
                      {post.comments} Comments
                    </span>
                  </div>

                  {/* Title + Excerpt */}
                  <h2 className="lg:text-3xl text-2xl font-bold text-[#041C33] hover:text-[#0D6DFD] transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 mt-2 mb-4" style={{ fontSize: "15px" }}>
                    {post.text}
                  </p>

                  {/* Read More Button */}

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group flex items-center gap-3 text-sm text-[#0D6DFD] border border-[#0D6DFD] hover:bg-[#0D6DFD] hover:text-[white] px-5 py-3 rounded font-semibold transition-colors duration-300"
                  >

                    <Link to={`/detailblog/${i}`} className="flex  lg:w-25 md:w-50 w-full  btn justify-center items-center gap-2  ">
                      <small>READ MORE</small>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate fill-current stroke-current text-[#0D6DFD] group-hover:text-[white]"
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

                  </motion.button>

                </div>
              </div>
            ))}

            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="p-3 border border-gray-400 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate2 fill-current stroke-current hover:text-[#0D6DFD] text-[#041C33] bg-white  group-hover:text-[white]"
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

              {[...Array(totalPages)].map((_, i) => (
                <button className={`px-4 py-2 rounded  ${currentPage === i + 1
                  ? "bg-[#0D6DFD] text-white  border border-gray-400 rounded-full"
                  : " border border-gray-400 bg-white rounded-full text-[#041C33] hover:bg-[#0D6DFD] hover:text-white"
                  } transition`}
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button className="p-3 border border-gray-400 bg-white rounded-full transition"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate fill-current stroke-current  hover:text-[#0D6DFD] text-[#041C33] bg-white group-hover:text-[white]"
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

          {/* Sidebar */}
          <div className="space-y-8 p-2">
            {/* Search */}
            <div className="bg-[#F2F2F2] rounded-lg  p-4" data-aos="fade-up" data-aos-duration="1">
              <div className="flex bg-white  lg:justify-between lg:items-start rounded-full p-2  hover:shadow-md">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-full px-1 py-1   rounded-full focus:outline-none focus:ring-0 focus:ring-[#0d6dfd00]"
                />
                <button
                  className="hover:bg-[#182E43] bg-[#0D6DFD] rounded-full text-white px-1 py-1 transition-colors duration-300"
                >
                  <CiSearch size={22} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#F2F2F2]  p-4 rounded-lg hover:shadow-md" data-aos="fade-up" data-aos-duration="1500">
              <h2 className="text-xl font-semibold mb-4 text-[#041C33]" >Categories</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {categories.map((cat, i) => (
                  <li key={i} className="hover:text-[#0D6DFD] cursor-pointer flex justify-between">
                    <span className="heading">{cat.title}</span>
                    <span className="heading">{cat.cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-[#F2F2F2] p-4 rounded-lg hover:shadow-md" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-lg font-semibold mb-4 text-[#041C33]">Recent Posts</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {recentPosts.map((post, i) => (
                  <li key={i}>
                    <img src={post.img} alt="img" className="mb-4 rounded  w-full" />
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <p className="font-medium heading mb-4 hover:text-[#0D6DFD] cursor-pointer">{post.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Left: Schedule Section */}
            <section className="bg-[#112B58] relative  text-white lg:text-left md:text-left px-4 text-center rounded-xl shadow-md w-full md:w-[350px]" data-aos="fade-up" data-aos-duration="1500" >

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

      <Footer />
    </div>
  );
};

export default Blog;




