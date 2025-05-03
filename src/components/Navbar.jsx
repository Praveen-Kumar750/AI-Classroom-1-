import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center font-bold text-xl text-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
            <span>AI Classroom</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link to="/pricing" className="font-medium hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contests" className="font-medium hover:text-purple-600 transition-colors">
              Contests
            </Link>
          </li>
          <li>
            <Link to="/individual" className="font-medium hover:text-purple-600 transition-colors">
              Individual
            </Link>
          </li>
          <li>
            <Link to="/rewards" className="font-medium hover:text-purple-600 transition-colors">
              Rewards
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium hover:text-purple-600 transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-full overflow-hidden">
            <button className="px-4 py-2 text-sm bg-indigo-600 text-white">English</button>
            <button className="px-4 py-2 text-sm">Hindi</button>
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
