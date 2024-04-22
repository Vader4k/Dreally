import { logo, open, closed } from '../assets'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants'
import { useState } from 'react'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(0)
   
  return (
    <section className='w-full sticky top-5 lg:top-10 z-50 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <nav className='w-full relative box  py-4 px-6 bg-primary-50 flex items-center justify-between rounded-[100px] z-20'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <img src={logo} alt="logo" className='px-4 w-[150px]'/>
          </Link>
          <div className='hidden lg:flex items-center gap-6 relative'>
            {navLinks.map((nav) => (
              <div  
                key={nav.id} 
                className='capitalize text-[1rem] cursor-pointer'>
                  <NavLink to={nav?.path || nav?.item?.url} className=' nav font-Sora no-underline text-primary-900 flex items-center p-3 hover:text-black rounded-md transition-all'>
                    <div>
                      {nav.name}
                      {nav.item && (
                        <div className='absolute hidden dropdown top-10 bg-white py-6 px-9 shadow rounded-xl'>
                          {nav.item.map((i) => (
                            <div key={i.id}>
                              <p 
                                className='no-underline text-primary-900'
                                onClick={() => window.open(i.url, '_blank')}
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

        <div className='flex items-center gap-4'>
          <button className='hidden lg:block px-16 py-6 bg-transparent border-[1px] border-gray-400 rounded-[100px] cursor-pointer'>Sign In</button>
          <button className='hidden lg:block px-10 py-6 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer'>Get Started Free</button>
          <div 
            onClick={() => setIsOpen((prev) => (!prev))}
            className='block lg:hidden cursor-pointer ml-3'>
            <img className='w-[25px] h-[25px] object-contain' src={isOpen ? closed : open } alt="navbar buttons" />
          </div>

        </div>
      </nav>
      <div>
        {
          isOpen === true && (
            <div className='p-6 top-0 left-0 right-0 bottom-0 min-h-[100vh] fixed z-10 bg-primary-300 flex items-center '>
              <div className='w-full'>
                  {navLinks.map((nav) => (
                  <span  
                    key={nav.id} 
                    className='capitalize text-[2.5rem] cursor-pointer'>
                      <NavLink 
                        to={nav.path} 
                        className='font-Sora no-underline text-primary-900 flex items-center p-3 hover:bg-white hover:text-black rounded-md transition-all'>
                          <p>
                            {nav.name}
                          </p>
                      </NavLink>
                  </span>
                ))}
                <div className='flex flex-col items-start gap-8 my-6'>
                <button className='px-16 py-6 bg-white border-none rounded-[100px] cursor-pointer'>Sign In</button>
                <button className='px-10 py-6 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer'>Get Started Free</button>
                </div>
              </div>
            </div>
              )
        }
      </div>
    </section>
  )
}

export default Navbar 