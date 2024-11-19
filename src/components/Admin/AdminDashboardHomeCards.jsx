import { ChartBar, DollarSign, Package2, User2, Users,SparklesIcon,AppleIcon,IceCreamIcon, DropletIcon, MilkIcon} from 'lucide-react'
import React from 'react'

const AdminDashboardHomeCards = ({ products,  users, beautyandhygiene,fruitsandveg,snacks,cleaningandhousehold,dairyproducts }) => {
    return (
        <>
            <div className=' w-full flex flex-col justify-center items-center gap-6'>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {users}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Users
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Users className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {products}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Products
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Package2 className='w-9 h-9' />
                    </div>
                </div>


                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {beautyandhygiene}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            beauty&hygiene products
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <SparklesIcon className='w-9 h-9' />
                    </div>
                </div>

                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {fruitsandveg}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Fruits&vegetables 
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <AppleIcon className='w-9 h-9' />
                    </div>
                </div>

                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {snacks}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Snacks 
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <IceCreamIcon className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {cleaningandhousehold}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Cleaning&household products 
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <DropletIcon className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-rose-300 hover:text-rose-500'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {dairyproducts}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Dairy products 
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <MilkIcon className='w-9 h-9' />
                    </div>
                </div>
                

    
                    
                </div>
        </>
    )
}

export default AdminDashboardHomeCards