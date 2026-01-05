import Navbar from "../components/Navbar"
import MyImage from "../assets/myimage.jpg"
import Footer from "../components/Footer"

function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-4 sm:px-6 lg:px-12 py-20">

  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-14">
    <h1 className="text-3xl text-orange-500 sm:text-4xl font-bold text-white mb-4">
      About Me
    </h1>
    <p className="text-gray-400 text-sm sm:text-base">
      A quick overview of my education, experience, and background
    </p>
  </div>

  {/* Cards Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Education Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-500 mb-3">
        Education
      </h2>
      <p className="text-gray-300 leading-relaxed">
        <b>BCA</b> completed in <b>2025</b>.  
        Currently pursuing <b>MCA</b> with a strong focus on
        software development, problem-solving, and modern web technologies.
      </p>
    </div>

    {/* Experience Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Experience
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Worked as a <b>Software Developer Intern</b> at
        <b> CadSetGo</b>, where I gained hands-on experience in
        real-world projects, application development,
        and professional coding practices.
      </p>
    </div>

    {/* Location Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Location
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Based in <b>Raipur Sadat</b>, District <b>Bijnor</b>,
        Uttar Pradesh, India.
        Open to remote opportunities and collaborative projects.
      </p>
    </div>

    {/* Skills Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Technical Skills
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Java, Spring Boot, React.js, MySQL, HTML, CSS,
        JavaScript, REST APIs, Git & GitHub.
      </p>
    </div>

    {/* Career Goal Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Career Goal
      </h2>
      <p className="text-gray-300 leading-relaxed">
        To become a skilled <b>Full Stack Java Developer</b>
        and contribute to building scalable, secure,
        and impactful software solutions.
      </p>
    </div>

    {/* Strengths Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition">
      <h2 className="text-xl font-semibold text-orange-400 mb-3">
        Strengths
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Quick learner, problem solver, team player,
        and highly motivated to continuously improve
        both technical and professional skills.
      </p>
    </div>

  </div>

</section>
<Footer/>


    </>
  )
}

export default About
