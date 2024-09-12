import { logo, open, closed } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(0);

  return (
    <section className="sticky z-50 w-full px-4 top-5 lg:top-10 sm:px-8 md:px-12">
      <nav className="w-full relative box  py-3 px-5 bg-primary-50 flex items-center justify-between rounded-[100px] z-20">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo} alt="logo" className="px-4 w-[120px]" />
          </Link>
          <div className="relative items-center hidden gap-6 lg:flex">
            {navLinks.map((nav) => (
              <div
                key={nav.id}
                className="capitalize text-[0.8rem] cursor-pointer"
              >
                <NavLink
                  to={nav?.path || nav?.item?.url}
                  className="flex items-center p-3 no-underline transition-all rounded-md  nav font-Sora text-primary-900 hover:text-black"
                >
                  <div>
                    {nav.name}
                    {nav.item && (
                      <div className="absolute hidden py-6 bg-white shadow dropdown top-10 px-9 rounded-xl">
                        {nav.item.map((i) => (
                          <div key={i.id}>
                            <p
                              className="no-underline text-primary-900"
                              onClick={() => window.open(i.url, "_blank")}
                            >
                              {i.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center h-full gap-4">
          <Link className="no-underline" to="https://app.dreally.com/login">
            <button className="hidden lg:block px-10 py-4 bg-transparent border-[1px] border-gray-400 rounded-[100px] cursor-pointer text-[0.6rem]">
              Sign In
            </button>
          </Link>
          <Link className="no-underline" to="https://app.dreally.com/register">
            <button className="hidden lg:block px-5 py-4 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer text-[0.6rem]">
              Get Started Free
            </button>
          </Link>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${
              isOpen === true
                ? "bg-primary-400 w-[40px] h-[40px] flex items-center justify-center rounded-full"
                : ""
            } block lg:hidden cursor-pointer ml-3`}
          >
            <img
              className="w-[25px] h-[25px] object-contain"
              src={isOpen ? closed : open}
              alt="navbar buttons"
            />
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen === true && (
          <motion.div
            initial={{ x: "100%" }} // Starts from left side of screen (for initial render)
            animate={{ x: 0 }} // Animate based on isOpen state
            exit={{ x: "100%" }} //
            transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust animation duration
            className="p-6 top-0 left-0 right-0 bottom-0 min-h-[100vh] fixed z-10 bg-primary-300 flex items-center "
          >
            <div className="w-full">
              {navLinks.map((nav) => (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }} // Starts invisible with slight offset
                  animate={{ opacity: 1, x: 0 }} // Animates to opacity 1 and original position
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: navLinks.indexOf(nav) * 0.2,
                  }} // Stagger animation based on index
                  key={nav.id}
                  className="capitalize text-[2rem] cursor-pointer"
                >
                  <NavLink
                    to={nav.path ? nav.path : ""}
                    onClick={() => {
                      setIsClicked(nav.id);
                      if (nav.path === "/about") {
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center p-3 font-bold no-underline transition-all rounded-md font-Sora text-primary-900 hover:bg-white hover:text-black"
                  >
                    <p>
                      {nav.name}
                      {isClicked === nav.id && nav.item && (
                        <div className="px-5 py-5">
                          {nav.item.map((i) => (
                            <div key={i.id}>
                              <p
                                className="no-underline text-primary-900 text-[1.5rem]"
                                onClick={() => {
                                  window.open(i.url, "_blank");
                                  setIsOpen(false);
                                }}
                              >
                                {i.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </p>
                  </NavLink>
                </motion.div>
              ))}
              <div className="flex flex-col items-start gap-8 my-6">
                <Link to="https://app.dreally.com/login">
                  <button className="px-16 py-6 bg-white border-none rounded-[100px] cursor-pointer">
                    Sign In
                  </button>
                </Link>
                <Link to="https://app.dreally.com/register">
                  <button className="px-10 py-6 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer">
                    Get Started Free
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
