import { IndianRupee } from 'lucide-react'
// import { Percent } from 'lucide-react'
import React from 'react'

const ProductCard = ({ img, price, title,offer}) => {
    return (
        <>
            <div className="relative flex w-[16%] flex-col rounded-xl bg-white bg-clip-border text-rose-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-rose-300 to-rose-600">
                    <img src={img} alt={title} className='h-full w-full object-cover' />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                        <IndianRupee className='h-5 w-6'/> {price}
                    </p>
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {offer}
                    </h5>
                </div>
                <div className="p-6 pt-0 w-full">
                    <button data-ripple-light="true" type="button" className="w-full select-none rounded-lg bg-rose-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard




// import { IndianRupee } from 'lucide-react'
// import React from 'react'

// const ProductCard = ({ title, img, price}) => {
//     return (
//         <>

//             <div className="relative flex w-[24%] flex-col p-10 h-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//                 <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-red-400 to-red-900">
//                     <img src={img} alt={title} className='h-full w-full object-cover' />
//                 </div>
//                 <div className="p-6">
//                     <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                       {title}
//                     </h5>
//                     <p className="font-sans leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
//                         <IndianRupee className='h-5 w-6' /> {price}
//                     </p>
//                 </div>
//                 <div className="p-6 pt-0 w-full">
//                     <button 
//                         data-ripple-light="true" 
//                         type="button" 
//                         className="w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-red-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                     >
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default ProductCard
