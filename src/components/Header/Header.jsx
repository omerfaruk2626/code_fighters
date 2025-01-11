import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md h-[80px] fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Code Fighters
        </Link>

        <Menu as="div" className="relative lg:hidden z-30">
          {({ open }) => (
            <>
              <Menu.Button className="text-3xl focus:outline-none">
                {open ? "✕" : "☰"}
              </Menu.Button>

              <Menu.Items className="absolute right-0 top-full mt-2 w-48 bg-gray-900 rounded-md shadow-lg border border-gray-700">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/about"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      About
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/contact"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Contact
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/sections"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      Projects
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-lg">
          <Link to="/" className="hover:bg-gray-700 px-4 py-2 rounded-md">
            Home
          </Link>
          <Link to="/about" className="hover:bg-gray-700 px-4 py-2 rounded-md">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Contact
          </Link>
          <Link
            to="/sections"
            className="hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Projects
          </Link>
        </div>

        <div className="hidden lg:block">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 w-40 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-gray-500"
            />
            <button
              type="submit"
              className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
