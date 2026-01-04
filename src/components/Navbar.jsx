import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-950 w-full shadow-md px-6 py-4">
      
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Tushar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/" className=" text-white hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className= "text-white hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden  text-white  mt-4 flex flex-col gap-4 font-medium">
          <li className="bg-gray-900 p-2 rounded-lg"><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
          <li className="bg-gray-900 p-2 rounded-lg "><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
          <li className=" bg-gray-900 p-2 rounded-lg    border-white"><Link onClick={() => setOpen(false)} to="/projects">Projects</Link></li>
          <li className=" bg-gray-900 p-2 rounded-lg  "><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
        </ul> 
      )}

    </nav>
  )
}

export default Navbar
