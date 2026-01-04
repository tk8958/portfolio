import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-4 sm:px-6 lg:px-12 py-20">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
            Contact Me
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Feel free to connect with me using the options below
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Email Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Email
            </h2>
            <a
              href="mailto:tusharkumarlahori221@gmail.com"
              className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Click Me
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/tushar-kumar-204548335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Click Me
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Instagram
            </h2>
            <a
              href="https://www.instagram.com/tushar_89580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Click Me
            </a>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
