function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14">

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Tushar <span className="text-orange-500">Kumar</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Full Stack Java Developer focused on building scalable,
              secure, and high-performance web applications using
              modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-orange-500 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-orange-500 transition"
                >
                  tusharkumarlahori221@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tushar-kumar-204548335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tushar_89580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  Instagram Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-12 pt-6 text-left text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Tushar Kumar</span>.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
