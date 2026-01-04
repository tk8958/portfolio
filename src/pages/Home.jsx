import Navbar from "../components/Navbar"
import MyImage from "../assets/myimage.jpg"

import css from "../assets/css.png"
import github from "../assets/github.png"
import html2 from "../assets/html2.png"
import java from "../assets/java.png"
import js from "../assets/js.png"
import react2 from "../assets/react2.png"
import sp from "../assets/springboot.png"
import sql from "../assets/sql.png"
import tailwind from "../assets/tailwind.png"




import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer"

function Home() {

  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black  flex flex-col-reverse md:flex-row items-center justify-center bg-gray=50 px-4 sm:px-6 lg:px-12">
  
  {/* LEFT CONTENT */}
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      Hi, I’m <span className="text-orange-500">Tushar Kumar</span>
    </h1>

    <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-md sm:max-w-xl mx-auto md:mx-0">

     I’m a Full Stack Java Developer who enjoys turning ideas into scalable and efficient web applications using React, Spring Boot, and clean coding practices. 
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button  onClick={() => navigate("/Contact")} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
        Hire Me
      </button>

      <button onClick={() => navigate("/Projects")} className="border border-orange-500 bg-white  px-6 py-2 rounded hover:bg-gray-200 transition">
        View Projects
      </button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="md:w-1/2 mb-10 md:mb-0 flex  justify-center">
    <img
      src={MyImage} 
      alt="Tushar Kumar"
      className="w-64  sm:w-72 md:w-80 border-4 border-orange-500 lg:w-96 rounded-full"
    />
  </div>

</section>

{/* TECH STACK SECTION */}
<section className="bg-black px-4 sm:px-6 lg:px-12 py-10">

  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-3">
      Technologies I Work With
    </h2>
    <p className="text-gray-400 text-sm sm:text-base">
      Tools and technologies I use to build scalable web applications
    </p>
  </div>

  {/* Tech Stack Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">

    {/* TECH ITEM */}
    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={sp}
        alt="Spring Boot"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={react2}
        alt="React"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={html2}
        alt="HTML"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={css}
        alt="CSS"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={js}
        alt="JavaScript"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={sql}
        alt="MySQL"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

    <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={github}
        alt="MySQL"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

     <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={java}
        alt="MySQL"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

     <div className=" p-4 flex items-center justify-center hover:border-orange-500 hover:-translate-y-1 transition">
      <img
        src={tailwind}
        alt="MySQL"
        className="h-12 sm:h-14 object-contain"
      />
    </div>

  </div>
</section>
    
    <Footer/>


    </>
  )
}

export default Home
