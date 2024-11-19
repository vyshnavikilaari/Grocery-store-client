import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLeftBar = () => {
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'Offers%',
      path: '/admin/products'
    },
    
    {
      title: 'Beauty and Hygiene',
      path: '/admin/beautyandhygiene'
    },
    {
      title: 'Cleaning and Household',
      path: '/admin/cleaningandhousehold'
    },
    {
      title: 'Dairyproducts',
      path: '/admin/dairyproducts'
    },
    {
      title: 'FruitsandVegetables',
      path: '/admin/fruitsandveg'
    },
    {
      title: 'Snacks',
      path: '/admin/snacks'
    },
    
    {
      title: 'Users',
      path: '/admin/users'
    }
    
  ]
  return (
    <div className='w-full h-screen shadow-rose-400 shadow-md flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
        {/* <div className='h-[10%] w-full text-rose-500 flex justify-center font-bold text-2x5 items-center'>
          Catalog
        </div> */}
        <div className=' px-8  w-full h-[10%] text-rose-600 flex justify-start font-bold items-center'>
            Welcome!
          </div>

        <div className='h-[80%] w-full flex flex-col items-center '>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-rose-500/90 hover:text-white  flex justify-start items-center rounded-lg shadow-md font-bold'>
              {link.title}
            </NavLink>
          ))
          }
        </div>
        <div className='h-[10%] w-full flex items-end'>
          <div className=' px-8 bg-rose-400 w-full h-2/3 text-white flex justify-start font-bold items-center'>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar