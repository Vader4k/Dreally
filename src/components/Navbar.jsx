import { logo } from '../assets'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <section className='w-full'>
      <nav className='w-full py-4 px-4 bg-primary-50 flex items-center justify-between rounded-[100px]'>
        <div className='flex items-center gap-10'>
          <img src={logo} alt="logo" className='px-4'/>
          <div className='flex items-center gap-6'>
            {navLinks.map((nav) => (
              <span 
                key={nav.id} 
                className='capitalize text-[1rem] cursor-pointer'>
                  <NavLink to={nav.path} className='no-underline text-gray-500 flex items-center p-3 hover:bg-gray-300 hover:text-black rounded-md transition-all'>
                    {nav.name}
                  </NavLink>
              </span>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <button className=' px-8 py-4 bg-transparent border-[1px] border-gray-400 rounded-[100px] cursor-pointer'>Sign In</button>
          <button className=' px-8 py-4 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer'>Sign Up</button>
        </div>
      </nav>
    </section>
  )
}

export default Navbar 