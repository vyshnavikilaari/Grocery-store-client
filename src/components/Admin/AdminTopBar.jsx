import React from 'react'
import { ShoppingCartIcon } from 'lucide-react'

const AdminTopBar = () => {
  return (
    <div className='w-full h-full shadow-rose-500 shadow-2xl flex justify-center items-center px-20 text-2xl font-bold text-red-600 font-sans'>Grocery Spot 
    <ShoppingCartIcon className="w-7 h-7 mr-2 text-rose-600" />
    </div>
    


  )
}

export default AdminTopBar