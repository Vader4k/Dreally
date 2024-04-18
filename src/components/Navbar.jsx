import { logo } from '../assets'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <section className='w-full sticky top-10 z-50 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <nav className='w-full py-6 px-8 bg-primary-50 flex items-center justify-between rounded-[100px]'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <img src={logo} alt="logo" className='px-4 w-[150px]'/>
          </Link>
          <div className='flex items-center gap-6'>
            {navLinks.map((nav) => (
              <span  
                key={nav.id} 
                className='capitalize text-[1.1rem] cursor-pointer'>
                  <NavLink to={nav.path} className='font-Sora no-underline text-primary-900 flex items-center p-3 hover:bg-gray-300 hover:text-black rounded-md transition-all'>
                    {nav.name}
                  </NavLink>
              </span>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <button className=' px-16 py-6 bg-transparent border-[1px] border-gray-400 rounded-[100px] cursor-pointer'>Sign In</button>
          <button className=' px-10 py-6 bg-primary-500 border-none text-white rounded-[100px] cursor-pointer'>Get Started Free</button>
        </div>
      </nav>
    </section>
  )
}

export default Navbar 